import { Vue } from 'vue-property-decorator'
import VueMarkdown from 'vue-markdown'
import Component from 'vue-class-component'
import MutationList from '../graphql/Mutations'
import { Prop } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import NewPostTemplate from '../templates/pages/newPost'
const Mutations = new MutationList()

@Component({
  name: 'newPost',
  components: {
    VueMarkdown
  }
})
export default class NewPost extends Vue {
  @Prop()
  threadId!: string
  @Prop()
  id!: string
  @Getter('getLogin') getLogin: any
  @Mutation('setTitle') setTitle
  @Mutation('setBack') setBack
  postBody: string = ''
  preview: boolean = false

  postSuccess (result: any) {
    if (result.data.createPost) {
      this.$router.push(`/blog/categories/${this.id}/threads/${this.threadId}`)
    }
  }

  postError (error: any) {
    console.log(error)
  }

  getPostBody (postBody) {
    this.postBody = postBody
  }

  showPreview () {
    this.preview = false
  }

  showEditor () {
    this.preview = true
  }

  mutate () {
    if (this.postBody !== '') {
      this.$apollo.mutate({
        variables: {
          body: this.postBody,
          id: this.threadId
        },
        mutation: Mutations.createPost()
      })
      .then((result) => {
        if (result.data.createPost) {
          this.postSuccess(result)
        }
      })
      .catch((error) => {
        if (error.graphQLErrors) {
          this.postError(error)
        }
      })
    } else {
      alert(`Post can't be blank`)
    }
  }

  render (h: any) {
    this.setTitle('New Post')
    this.setBack(true)
    return (
      <NewPostTemplate
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
          <div class='thread-comment-box'>
            <textarea
              class='textarea'
              id='postBody'
              placeholder='Please be friendly...'
              vModel={this.postBody}
            />
            <button
              class='pure-button -fixed pure-button-primary input'
              onClick={() => this.mutate()}
            >
              New Post
            </button>
          </div>
        ) : (
            <vue-markdown typographer class='markdown-style -padding'>
              {this.postBody}
            </vue-markdown>
          )}
      </NewPostTemplate>
    )
  }
}
