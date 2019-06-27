import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import {
  Getter, Mutation
} from 'vuex-class'
import ThreadsTemplate from '../templates/pages/threads'
const Query = new Queries()

@Component({
  apollo: {
    category: {
      query: Query.category,
      variables () {
        return {
          id: this.id
        }
      },
      result (result) {
        this.$data.loading = false
      },
      error (error) {
        this.loading = false
        console.log(`We've got an error!`, error)
      },
      fetchPolicy: 'network-only'
    }
  },
  props: {
    id: String
  }
})
export default class Threads extends Vue {
  @Getter('getLogin') public getLogin: any
  @Getter('getAdmin') public getAdmin: any
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public loading: boolean = true
  public category: any

  public render (h: any) {
    if (this.category) {
      this.setTitle(this.category.title || 'Threads')
      this.setBack(true)
      return (
        <ThreadsTemplate
          class='section'
          data={{
            ...this.$data,
            getLogin: this.getLogin,
            getAdmin: this.getAdmin,
            threads:
              this.category && this.category.threads
                ? this.category.threads
                : []
          }}
          methods={{
            routeHandler: (threadId: string) => {
              this.$router.push(
                `/blog/categories/${this.category.id}/threads/${threadId}`
              )
            }
          }}
        />
      )
    } else {
      return null
    }
  }
}
