import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import SignupTemplate from '../templates/layouts/signup'
const MutationC = new Mutations()
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'signup'
})
export default class Signup extends Vue {
  @Mutation('setLogin') public setLogin
  @Mutation('setAdmin') public setAdmin
  public email: string = ''
  public password: string = ''
  public name: string = ''
  public username: string = ''

  public signup (name, email, password, username) {
    this.$apollo
      .mutate({
        mutation: MutationC.createUser(),
        variables: {
          email,
          password,
          name,
          username
        }
      })
      .then(async (response) => {
        alert(`${this.name} was registered successfully`)
        await this.signin(email, password)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public signin (email, password) {
    this.$apollo
      .mutate({
        mutation: MutationC.authenticate(),
        variables: {
          email,
          password
        }
      })
      .then((response) => {
        this.setLogin(true)
        if (email === 'alex@smoothterminal.com') {
          localStorage.setItem('admin', 'true')
          this.setAdmin(true)
        } else {
          localStorage.removeItem('admin')
          this.setAdmin(false)
        }
        localStorage.setItem('token', response.data.authenticate)
        this.$router.push('/blog')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public render (h: any) {
    return (
      <SignupTemplate
        class='section'
        data={{
          ...this.$data,
          email: this.email,
          password: this.password,
          name: this.name,
          username: this.username
        }}
        methods={{
          signup: this.signup
        }}
      />
    )
  }
}
