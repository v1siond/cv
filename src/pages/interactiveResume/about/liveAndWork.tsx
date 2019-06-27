import { Vue, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LiveAndWorkTemplate from '../../../templates/pages/interactiveResume/about/liveAndWork'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'LiveAndWork'
})
export default class LiveAndWork extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Getter('playAudio') public playAudio
  @Getter('getSound') public getSound

  public mounted () {
    this.setTitle('LVL-1.3: Live and Work')
    this.setBack(true)
    this.setLevelNumber('1-3')
    this.setLevelName('Live and Work')
    this.playAudio('wind4')
  }

  public render (h) {
    return (
      <LiveAndWorkTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.playAudio('wind4')
    }
}
