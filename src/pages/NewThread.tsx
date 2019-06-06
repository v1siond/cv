import { Vue, Component, Prop } from 'vue-property-decorator'
import MutationList from '../graphql/Mutations'
import VueMarkdown from 'vue-markdown'
import {
  Getter, Mutation
} from 'vuex-class'
import NewThreadTemplate from '../templates/pages/newThread'

const Mutations = new MutationList()

@Component({
  name: 'newThread',
  components: {
    VueMarkdown
  }
})
export default class NewThread extends Vue {
  @Prop()
  id!: number
  @Getter('getLogin') getLogin: any
  @Mutation('setTitle') setTitle
  @Mutation('setBack') setBack
  title: string = ''
  postBody: any = ''
  preview: boolean = false

  showPreview () {
    this.preview = false
  }

  showEditor () {
    this.preview = true
  }

  mutate () {
    if (this.title !== '' && this.postBody !== '') {
      this.$apollo
        .mutate({
          variables: {
            id: this.id,
            title: this.title,
            body: this.postBody
          },
          mutation: Mutations.createThread()
        })
        .then((result) => {
          this.threadSuccess(result)
        })
        .catch((error) => {
          if (error.graphQLErrors) {
            this.threadError(error)
          }
        })
    } else {
      alert(
        `Error, empty fields: ${this.title === '' &&
          `Title can't be blank`}. ${this.postBody === '' &&
          `Post can't be blank`} `
      )
    }
  }

  threadSuccess (result: any) {
    alert('Thread created successfully')
    this.$router.push(`/blog/categories/${this.id}/`)
  }

  threadError (error: any) {
    alert(error)
  }

  render (h: any) {
    console.log(this)
    this.setTitle('New thread')
    this.setBack(true)
    return (
      <NewThreadTemplate
        data={{
          ...this.$props,
          ...this.$data,
          getLogin: this.getLogin
        }}
        methods={{
          showPreview: this.showPreview,
          showEditor: this.showEditor
        }}
      >
        {!this.preview ? (
          <div class='pure-form pure-form-stacked pure-u-1'>
            <fieldset>
              <input
                class='pure-input-1'
                id='title'
                placeholder='Title'
                type='text'
                vModel={this.title}
              />
            </fieldset>
            <fieldset class='pure-1 thread-comment-box'>
              <textarea
                class='textarea'
                id='postBody'
                resize='false'
                vModel={this.postBody}
              />
            </fieldset>
            <button
              class='pure-button pure-button-primary pure-input-1'
              onClick={() => this.mutate()}
            >
              create Thread
            </button>
          </div>
        ) : (
          <section class='markdown-style -padding'>
            <vue-markdown>
              ## {this.title}
            </vue-markdown>
            <vue-markdown>
              {this.postBody}
            </vue-markdown>
          </section>
        )}
      </NewThreadTemplate>
    )
  }
}
