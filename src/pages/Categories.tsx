import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import MutationList from '../graphql/Mutations'
import {
  Getter, Mutation
} from 'vuex-class'
import CategoriesTemplate from '../templates/pages/categories'

const Mutations = new MutationList()
const Query = new Queries()

@Component({
  apollo: {
    categories: {
      query: Query.categories,
      variables () {
        return {
          page: this.page,
          perPage: this.perPage
        }
      },
      error (error) {
        console.log(`We've got an error!`, error)
      },
      fetchPolicy: 'network-only'
    }
  },
  name: 'Categories'
})
export default class Categories extends Vue {
  @Getter('getLogin') public getLogin: any
  @Getter('getAdmin') getAdmin: any
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack

  public active: number = 1
  public page: number = 0
  public perPage: number = 20
  public categories: any = ''
  public title: string = ''
  public newCategoryMutation: any = Mutations.createCategory()

  public categorySuccess (result: any) {
    if (result.data.createCategory) {
      alert('Category created successfully!')
      this.$apollo.queries.categories.refetch()
    }
  }

  public categoryError (error: any) {
    console.log(error)
  }

  public goToCategory (categoryId) {
    this.$router.push(`/blog/categories/${categoryId}`)
  }

  public prevPage () {
    this.page = this.page - 1
    this.active = this.active - 1
  }

  public goToPage (pageNumber: number) {
    if (pageNumber !== this.active) {
      this.page = pageNumber - 1
      this.active = pageNumber - 1
    }
  }

  public nextPage () {
    this.page = this.page + 1
    this.active = this.active + 1
  }

  public render (h: any) {
    this.setTitle('Categories')
    this.setBack(true)
    return (
      <CategoriesTemplate
        class='section'
        data={{
          ...this.$data,
          getAdmin: this.getAdmin,
          categories:
            this.categories &&
            this.categories.entries &&
            this.categories.entries.length > 0
              ? this.categories.entries
              : [],
          getLogin: this.getLogin,
          totalPages: this.categories ? this.categories.totalPages : 0
        }}
        methods={{
          apollo: this.$apollo,
          mutation: this.newCategoryMutation,
          sucessHandler: this.categorySuccess,
          errorHandler: this.categoryError,
          prevPage: this.prevPage,
          goToPage: this.goToPage,
          nextPage: this.nextPage,
          routeHandler: this.goToCategory
        }}
      />
    )
  }
}
