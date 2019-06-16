import { Mixins, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import BackendTemplate from '../../../components/Skills'
import {
  Mutation
} from 'vuex-class'
import SoundMixing from '../../mixins/soundMixin'

@Component({
  name: 'Backend'
})
export default class Backend extends Mixins(SoundMixing) {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public listener = this.backgroundSound.bind(this)
  public skillsSound: string = 'skills'
  public current: number = 0
  public transitionName: string = 'fade'
  public show: boolean = false
  public nextUrl: any = {
    url: '/static-resume/experience',
    text: 'Level 3'
  }
  public prevUrl: any = {
    url: '/static-resume/skills/frontend',
    text: 'Level 2.1'
  }
  public skills: any = [
    {
      title: 'Languages',
      techs: [
        {
          name: 'Ruby',
          stars: 3
        },
        {
          name: 'JavaScript',
          stars: 4
        },
        {
          name: 'Elixir',
          stars: 2
        },
        {
          name: 'Java',
          stars: 2
        },
        {
          name: 'PHP',
          stars: 4
        }
        ],
      class: ''
    },
    {
      title: 'Data Base',
      techs: [
        {
          name: 'MySQL',
          stars: 4
        },
        {
          name: 'PostgreSQL',
          stars: 3
        },
        {
          name: 'GraphQL',
          stars: 4
        }
        ],
      class: ''
    }
  ]

  public backgroundSound () {
    if (this.getSound) {
      this.playAudio('/desert.mp3', this.skillsSound, 40, true)
    } else if (this.sounds[this.skillsSound]) {
      this.cleanSounds()
    }
  }

  public cleanSounds () {
    this.sounds[this.skillsSound].stop()
    this.sounds[this.skillsSound].destruct()
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.listener)
  }

  public mounted () {
    this.setTitle('LVL-2.2: Backend')
    this.setBack(true)
    this.setLevelNumber('2-2')
    this.setLevelName('Backend')
    this.soundManager.onready(() => {
      this.backgroundSound()
      window.addEventListener('resize', this.listener)
    })
  }

  public render (h) {
    return (
      <BackendTemplate
        current={this.current}
        skills={this.skills}
        show={this.show}
        transitionName={this.transitionName}
        nextUrl={this.nextUrl}
        prevUrl={this.prevUrl}
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
