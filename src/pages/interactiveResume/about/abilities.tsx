import { Vue, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import AbilitiesTemplate from '../../../templates/pages/interactiveResume/about/abilities'
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
  public left1: number = 0
  public left2: number = 0
  public left3: number = 0
  public left4: number = 0
  public left5: number = 0
  public leftCharacter: number = 10
  public $refs!: {
    interactiveCharacter,
    background1,
    background2,
    background3,
    background4,
    background5,
    bottom,
    info,
    title
  }

  public backgroundSound () {
    this.playAudio(this.abilitiesSound)
    this.playAudio('wind4')
  }

  public beforeDestroy () {
    window.removeEventListener('resize', this.listener)
    window.removeEventListener('keydown', this.moveCharacter)
    window.removeEventListener('keyup', this.stopCharacter)
  }

  public moveCharacter (event: any) {
    const maxLeft = 200
    const minLeft = 0
    if (this.leftCharacter > 100) {
      this.$router.push('/interactive-resume/about/born-in')
    } else {
      if (event.key === 'ArrowRight') {
        this.leftCharacter = this.leftCharacter + 0.275
        this.$refs.interactiveCharacter.style.left = this.$refs.interactiveCharacter && `${this.leftCharacter}%`
        if (!this.$refs.interactiveCharacter.className.includes('moving')) {
          this.$refs.interactiveCharacter.className = `${this.$refs.interactiveCharacter.className.replace('-left', '')} moving`
        }
        if (this.left1 > 120) {
          this.$refs.info.style.display = 'block'
          this.$refs.title.style.display = 'block'
          setTimeout(() => {
            this.$refs.info.style.opacity = 1
          }, 250)
        }
        if (this.left1 < maxLeft) {
          this.left1 = this.left1 + 0.85
          this.left2 = this.left2 + 0.5
          this.left3 = this.left3 + 0.35
          this.left4 = this.left4 + 0.2
          this.left5 = this.left5 + 0.1
          this.$refs.background1.style.left = `-${this.left1}%`
          this.$refs.background2.style.left = `-${this.left2}%`
          this.$refs.background3.style.left = `-${this.left3}%`
          this.$refs.background4.style.left = `-${this.left4}%`
          this.$refs.background5.style.left = `-${this.left5}%`
          this.$refs.bottom.style.left = `-${this.left1}%`
        }
      } else if (event.key === 'ArrowLeft') {
        this.leftCharacter = this.leftCharacter > 10 ?  this.leftCharacter - 0.275 : 10
        this.$refs.interactiveCharacter.style.left = this.$refs.interactiveCharacter && `${this.leftCharacter}%`
        if (!this.$refs.interactiveCharacter.className.includes('movingLeft')) {
          this.$refs.interactiveCharacter.className = `${this.$refs.interactiveCharacter.className.replace('-left', '')} movingLeft`
        }
        if (this.left1 < 95) {
          this.$refs.info.style.opacity = 0
          this.$refs.title.style.opacity = 0
          setTimeout(() => {
            this.$refs.info.style.display = 'none'
            this.$refs.title.style.display = 'none'
          }, 500)
        }
        if (this.left1 > minLeft && this.leftCharacter < 80) {
          this.left1 = this.left1 - 0.85
          this.left2 = this.left2 - 0.5
          this.left3 = this.left3 - 0.35
          this.left4 = this.left4 - 0.2
          this.left5 = this.left5 - 0.1
          this.$refs.background1.style.left = `-${this.left1}%`
          this.$refs.background2.style.left = `-${this.left2}%`
          this.$refs.background3.style.left = `-${this.left3}%`
          this.$refs.background4.style.left = `-${this.left4}%`
          this.$refs.background5.style.left = `-${this.left5}%`
          this.$refs.bottom.style.left = `-${this.left1}%`
        }
      } else {
        this.stopCharacter()
      }
    }
  }

  public stopCharacter () {
    if (this.$refs.interactiveCharacter.className.includes('movingLeft')) {
      this.$refs.interactiveCharacter.className = `${this.$refs.interactiveCharacter.className.replace('movingLeft', '')} -left`
    } else {
      this.$refs.interactiveCharacter.className = this.$refs.interactiveCharacter.className.replace('moving', '')
    }
  }

  public mounted () {
    this.setTitle('LVL-1.1: Abilities')
    this.setBack(true)
    this.setLevelNumber('1-1')
    this.setLevelName('Abilities')
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
    window.addEventListener('keydown', this.moveCharacter)
    window.addEventListener('keyup', this.stopCharacter)
    this.left1 = 0
    this.left2 = 0
    this.left3 = 0
    this.left4 = 0
    this.left5 = 0
    this.leftCharacter = 10
    console.log(this.leftCharacter)
  }

  public render (h) {
    return (
      <AbilitiesTemplate router={this.$router} moveCharacter={this.moveCharacter}/>
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
