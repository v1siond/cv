import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import { Getter, Mutation } from 'vuex-class'
import vueMarkdown from 'vue-markdown'
import ThreadTemplate from '../templates/pages/thread'
const Query = new Queries()

@Component({
  apollo: {
    thread: {
      query: Query.thread,
      variables () {
        return {
          id: this.threadId
        }
      },
      skip () {
        return !this.threadId
      },
      error (error) {
        console.log(`We've got an error!`, error)
      },
      fetchPolicy: 'network-only'
    }
  },
  components: {
    vueMarkdown
  },
  name: 'thread',
  props: {
    threadId: String
  }
})
export default class Thread extends Vue {
  @Getter('getLogin') public getLogin: any
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public thread: any

  public get returnPost () {
    return this.thread.posts.reverse()
  }

  public render (h: any) {
    if (this.thread) {
      this.setTitle(this.thread.title)
      this.setBack(true)
      return (
        <ThreadTemplate
          data={{
            ...this.$props,
            thread: this.thread,
            posts: this.returnPost,
            getLogin: this.getLogin
          }}
        />
      )
    } else {
      return `Thread doesn't exist`
    }
  }
}
