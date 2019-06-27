import { Vue, Prop, Component } from 'vue-property-decorator'
import {
  Getter, Mutation
} from 'vuex-class'
import MenuTemplate from '../templates/components/menu'
import debounce from '../helpers/debounce'
@Component({
  name: 'Menu'
})
export default class Menu extends Vue {
  @Getter('getTitle') public getTitle: any
  @Getter('getBack') public getBack: any
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any
  @Getter('getTime') public getTime: any
  @Getter('getSound') public getSound: any
  @Mutation('setSound') public setSound
  @Prop({}) public openMenu!: any | undefined
  @Prop({}) public formatTime!: any | undefined
  @Prop({}) public pushRoute!: any | undefined
  @Prop({}) public buttonSelected!: any | undefined
  public opened: boolean = false

  public goBack () {
    this.$router.go(-1)
  }

  public showLevels () {
    this.opened = !this.opened
  }

  public setDebouncedTime () {
    debounce(this.setSound(!this.getSound), 300, this)
  }

  public render (h: any) {
    return (
      <MenuTemplate
        pushRoute={this.pushRoute}
        data={{
          ...this.$props,
          getTitle: this.getTitle,
          getBack: this.getBack,
          getTime: this.getTime,
          getLevelNumber: this.getLevelNumber,
          getLevelName: this.getLevelName,
          opened: this.opened,
          getSound: this.getSound
        }}
        methods={{
          backHandler: this.goBack,
          openMenu: this.openMenu,
          showLevels: this.showLevels,
          formatTime: this.formatTime,
          setSound: this.setDebouncedTime,
          buttonSelected: this.buttonSelected
        }}
      />
    )
  }
}
