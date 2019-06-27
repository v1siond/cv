import { Vue, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import AbilitiesTemplate from '../../../templates/pages/staticResume/about/abilities'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'Abilities'
})
export default class Abilities extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Getter('playAudio') public playAudio
  @Getter('getSound') public getSound
  public listener = this.backgroundSound.bind(this)
  public abilitiesSound: string = 'deeper'

  public backgroundSound () {
    this.playAudio(this.abilitiesSound)
    this.playAudio('wind4')
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.listener)
  }

  public mounted () {
    this.setTitle('LVL-1.1: Abilities')
    this.setBack(true)
    this.setLevelNumber('1-1')
    this.setLevelName('Abilities')
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
  }
  public render (h) {
    return (
      <AbilitiesTemplate router={this.$router}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
