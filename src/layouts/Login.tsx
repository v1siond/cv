import Vue from 'vue'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import {
  Mutation
} from 'vuex-class'
import LoginTemplate from '../templates/layouts/login'
const MutationF = new Mutations()

@Component({
  name: 'login'
})
export default class Login extends Vue {
  public email: string = ''
  public password: string = ''
  @Mutation('setLogin') public setLogin
  @Mutation('setAdmin') public setAdmin

  public signin (email, password): void {
    this.$apollo
      .mutate({
        mutation: MutationF.authenticate(),
        variables: {
          email,
          password
        }
      })
      .then((response) => {
        if (response.data.authenticate) {
          this.setLogin(true)
          if (email === 'alex@smoothterminal.com') {
            localStorage.setItem('admin', 'true')
            this.setAdmin(true)
          } else {
            localStorage.removeItem('admin')
            this.setAdmin(false)
          }
          localStorage.setItem('token', response.data.authenticate)
          alert('Welcome')
        }
        this.$router.push('/blog')
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }

  public render (h: any) {
    return (
      <LoginTemplate
        class='section'
        data={{
          ...this.$data,
          email: this.email,
          password: this.password,
          setLogin: this.setLogin
        }}
        methods={{
          signin: this.signin
        }}
      />
    )
  }
}
