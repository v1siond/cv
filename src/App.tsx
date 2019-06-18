import Component from 'vue-class-component'
import { Watch, Mixins } from 'vue-property-decorator'
import './assets/styles/app.styl'
import {
  Getter, Mutation
} from 'vuex-class'
import Toolbar from './components/Toolbar'
import SoundMixing from './pages/mixins/soundMixin'

@Component({
  name: 'app'
})
export default class App extends Mixins(SoundMixing) {
  @Getter('getLogin') public  getLogin: any
  @Mutation('setLogin') public  setLogin
  public  toolbarHeight: number = 55
  public toolbarBlog: boolean = false
  public mobile: boolean = false
  public renderT: boolean = false
  public style: string = ''
  $refs!: {
    toolbar: HTMLFormElement
  }

  public getBlogLayout () {
    const urls: any[] = ['login', 'signup']
    let blogLayout: boolean = false
    urls.map((urlName) => {
      if (urlName === this.$router.currentRoute.name) {
        blogLayout = true
      }
    })
    return blogLayout
  }

  public checkLogin (): void {
    if (this.$router.currentRoute.fullPath.includes('blog') || this.getBlogLayout()) {
      this.toolbarBlog = true
    } else {
      this.toolbarBlog = false
    }

    if (localStorage.getItem('token')) {
      this.setLogin(true)
      if (this.getLogin === true && (this.$router.currentRoute.name === 'login' || this.$router.currentRoute.name === 'signup')) {
        alert('You already have a session please close it.')
        this.$router.push('/')
      }
    } else if (this.$router.currentRoute.name && (this.$router.currentRoute.name === 'newThread' || this.$router.currentRoute.name === 'newPost')) {
      this.setLogin(false)
      alert('You need to be logged in for this action.')
      this.$router.push('/')
    } else {
      this.setLogin(false)
    }
  }

  public mounted () {
    this.checkLogin()
    this.checkToolbarHeight()
    window.addEventListener('resize', this.checkToolbarHeight)
    setTimeout(() => {
      this.renderT = true
    }, 3000)
  }

  public getStyle () {
    this.style = ''
    if (this.toolbarBlog) {
      this.style = `height: calc(100vh - ${this.toolbarHeight}px);`
    } else {
      this.style = 'height: 100vh;'
    }
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.checkToolbarHeight)
  }

  public checkToolbarHeight () {
    this.toolbarHeight = this.$refs.toolbar && this.$refs.toolbar.$el.clientHeight
    this.mobile = window.innerWidth > 700 || false
  }

  public render (h: any) {
    if (this.renderT) {
      return (
        <div id='app'>
          <Toolbar playAudio={this.playAudio} mobile={this.mobile} blog={this.toolbarBlog || false} ref='toolbar' />
          <router-view playAudio={this.playAudio} style={this.style} />
          <footer class='footer'>
            <article class='about'>
              <h2 class='game-title -credits'>About</h2>
              <figure />
              <p>Alexander Pulido is a Full Stack developer who was born in Roma, studied in Venezuela and now lives and Work in Arequipa, Perú.
              He loves to build web apps and his specialty is frontend development in javascript enviroments.</p>
            </article>
            <article class='legal'>
              &#64; Alexander Pulido. All Rights Reserved.
            </article>
          </footer>
        </div>
      )
    } else {
      return null
    }
  }

  @Watch('$route', { immediate: true, deep: true })
    onUrlChange (newVal: any) {
      this.checkToolbarHeight()
      this.getStyle()
      this.checkLogin()
      if (this.getSounds) {
        this.songNames.map((soundName) => {
          if (!((newVal.name === 'Work' && soundName === 'experiencelevel') || ((newVal.name === 'frontend' || newVal.name === 'backend') && soundName === 'desert')) ) {
            this.getSounds[soundName].stop()
          }
        })
      }
    }

}
