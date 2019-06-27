import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import LevelSelectionTemplate from '../../templates/pages/staticResume/levelSelection'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../mixins/soundMixin'

@Component({
  name: 'LevelSelection'
})
export default class LevelSelection extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  public levels: any = [
    {
      name: 'About',
      status: true
    },
    {
      name: 'Skills',
      status: false
    },
    {
      name: 'Experience',
      status: false
    },
    {
      name: 'Publications',
      status: false
    }
  ]

  public backgroundSound () {
    this.playAudio('levelselection')
    this.playAudio('wind4')
  }

  public mounted () {
    this.setTitle('Level Selection')
    this.setBack(true)
    this.backgroundSound()
  }

  public levelSelected (type) {
    this.levels.map((level) => {
      if (level.name === type) {
        level.status = true
      } else {
        level.status = false
      }
    })
    this.playAudio('beep')
  }

  public render (h: any) {
    return (
      <LevelSelectionTemplate
        methods={{
          levelSelected: this.levelSelected
        }}
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
