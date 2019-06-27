import { Vue, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import {
  Getter
} from 'vuex-class'

@Component({
  name: 'Skills'
})
export default class About extends Vue {
  @Getter('playAudio') public playAudio
  @Getter('getSound') public getSound
  public sound: any = undefined

  public mounted () {
    if (this.$router.currentRoute.name === 'skillsPresentation') {
      this.sound = setTimeout(() => {
        this.playAudio('desert')
      }, 3000)
    } else {
      this.playAudio('desert')
    }
  }

  public render (h) {
    return (
      <router-view />
    )
  }

  beforeDestroy () {
    clearInterval(this.sound)
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      if (this.$router.currentRoute.name !== 'skillsPresentation') {
        this.playAudio('desert')
      }
    }
}
