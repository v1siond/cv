import { Watch, Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import BornInTemplate from '../../../templates/pages/interactiveResume/about/bornIn'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'BornIn'
})
export default class BornIn extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Getter('playAudio') public playAudio
  @Getter('getSound') public getSound

  public backgroundSound () {
    this.playAudio('tarantella')
    this.playAudio('wind4')
  }

  public mounted () {
    this.setTitle('LVL-1.2: Born In')
    this.setBack(true)
    this.setLevelNumber('1-2')
    this.setLevelName('Born In')
    this.backgroundSound()
  }

  public render (h) {
    return (
      <BornInTemplate
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
