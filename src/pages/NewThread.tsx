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
  @Prop() public id!: number
  @Getter('getLogin') public getLogin
  @Getter('getAdmin') public getAdmin
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public title: string = ''
  public postBody: any = ''
  public preview: boolean = false

  public showPreview () {
    this.preview = false
  }

  public showEditor () {
    this.preview = true
  }

  public mutate () {
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

  public threadSuccess (result: any) {
    alert('Thread created successfully')
    this.$router.push(`/blog/categories/${this.id}/`)
  }

  public threadError (error: any) {
    alert(error)
  }

  public mounted () {
    if (this.getAdmin) {
      this.setTitle('New thread')
      this.setBack(true)
    } else {
      setTimeout(() => {
        this.$router.push('/blog')
      }, 2000)
    }
  }

  public render (h: any) {
    if (this.getAdmin) {
      return (
        <NewThreadTemplate
          data={{
            ...this.$props,
            ...this.$data,
            getLogin: this.getLogin,
            getAdmin: this.getAdmin
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
                class='pure-button -fixed pure-button-primary input'
                onClick={() => this.mutate()}
              >
              create Thread
              </button>
            </div>
          ) : (
            <section class='markdown-style -padding'>
              <vue-markdown typographer>
                ## {this.title}
              </vue-markdown>
              <vue-markdown typographer>
                {this.postBody}
              </vue-markdown>
            </section>
          )}
        </NewThreadTemplate>
      )
    } else {
      return null
    }
  }
}
