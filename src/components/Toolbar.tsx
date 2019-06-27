import { Vue, Prop, Component } from 'vue-property-decorator'
import {
  Getter, Mutation
} from 'vuex-class'
import ToolbarTemplate from '../templates/components/toolbar'
import debounce from '../helpers/debounce'
@Component({
  name: 'Toolbar'
})
export default class Toolbar extends Vue {
  @Getter('getLogin') public getLogin: any
  @Getter('getTitle') public getTitle: any
  @Getter('getBack') public getBack: any
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any
  @Getter('getTime') public getTime: any
  @Getter('getSound') public getSound: any
  @Mutation('setSound') public setSound: any
  @Prop() public blog!: boolean | false
  @Prop() public mobile!: boolean | false
  @Prop() public playAudio!: any | undefined
  public showMenu: boolean = false
  public sounds: object  = {}
  public logout () {
    localStorage.removeItem('token')
    this.$router.push('/login')
    alert('See you soon :)')
  }

  public goBack () {
    this.$router.go(-1)
  }

  public openMenu () {
    this.showMenu = !this.showMenu
  }

  public pushRoute (route) {
    this.openMenu()
    this.$router.push(route)
  }
  public formatTime () {
    const secNum = this.getTime
    let hours: any   = Math.floor(secNum / 3600)
    let minutes: any = Math.floor((secNum - (hours * 3600)) / 60)
    let seconds: any = secNum - (hours * 3600) - (minutes * 60)

    if (hours   < 10) {
      hours   = `0${hours}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${minutes > 60 ? `${hours}:` : ''}${minutes}:${seconds}`
  }

  public buttonSelected () {
    this.playAudio('beep')
  }

  public setDebouncedTime () {
    debounce(this.setSound(!this.getSound), 300, this)
  }

  public render (h: any) {
    return (
      <ToolbarTemplate
        getLevelNumber={this.getLevelNumber}
        getLevelName={this.getLevelName}
        showMenu={this.showMenu}
        mobile={this.mobile}
        pushRoute={this.pushRoute}
        data={{
          ...this.$props,
          getLogin: this.getLogin,
          getTitle: this.getTitle,
          getBack: this.getBack,
          getTime: this.getTime,
          blog: this.blog,
          getSound: this.getSound
        }}
        methods={{
          backHandler: this.goBack,
          logoutHandler: this.logout,
          formatTime: this.formatTime,
          openMenu: this.openMenu,
          setSound: this.setDebouncedTime,
          buttonSelected: this.buttonSelected
        }}
      />
    )
  }
}
