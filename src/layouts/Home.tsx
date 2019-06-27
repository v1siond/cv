import { Vue, Watch, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import HomeTemplate from '../templates/layouts/Home'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'categories'
})
export default class Home extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Getter('getSound') public getSound
  @Prop() public playAudio!: any | undefined
  public stepsDuration: number = 15
  public animationClass: string = '-intro animated'
  public stepsOne: any = undefined
  public jump: any = undefined
  public walk2: any = undefined
  public walk2Internal: any = undefined
  public explosionTimeout: any = undefined
  public stepsG: any = undefined
  public listener = this.backgroundSound.bind(this)
  $refs!: {
    wind: any,
    introMusic: any,
    character1: any,
    character2: any
  }

  public buttons: any = [
    {
      name: 'interactive',
      status: true
    },
    {
      name: 'static',
      status: false
    },
    {
      name: 'blog',
      status: false
    }
  ]

  public explosion () {
    if (this.explosionTimeout) {
      clearInterval(this.explosionTimeout)
    }
    this.explosionTimeout = setTimeout(() => {
      this.playAudio('explosion1')
    }, 16500)
  }

  public mounted () {
    this.backgroundSound()
    window.addEventListener('resize', this.listener)
  }

  public buttonSelected (type) {
    this.buttons.map((button) => {
      if (button.name === type) {
        button.status = true
      } else {
        button.status = false
      }
    })
    this.playAudio('beep')
  }

  public cleanIntervals () {
    if (this.stepsOne) {
      clearInterval(this.stepsOne)
      this.stepsOne = undefined
    }
    if (this.explosionTimeout) {
      clearInterval(this.explosionTimeout)
      this.explosionTimeout = undefined
    }
    if (this.walk2) {
      clearInterval(this.walk2)
      this.walk2 = undefined
    }
    if (this.jump) {
      clearInterval(this.jump)
      this.jump = undefined
    }
    if (this.walk2Internal) {
      clearInterval(this.walk2Internal)
      this.walk2Internal = undefined
    }
    if (this.stepsG) {
      clearInterval(this.stepsG)
      this.stepsG = undefined
    }
  }

  public backgroundSound () {
    this.animationClass  = '-intro'
    if (!this.getSound) {
      this.animationClass  = '-intro animated'
    }
    this.playAudio('intro')
    this.playAudio('wind4')
    this.steps()
    this.explosion()
  }

  public beforeDestroy () {
    this.cleanIntervals()
    window.removeEventListener('resize', this.listener)
  }

  public steps () {
    this.cleanIntervals()
    this.stepsG = setTimeout(() => {
      this.animationClass  = '-intro animated'
      this.$refs.character1.className = 'character'
      this.$refs.character2.className = 'character -jumpDownIntro'
      this.stepsOne = setInterval(() => {
        this.playAudio('stepstone1')
      }, 500)
      this.jump = setTimeout(() => {
        this.playAudio('jumpstart')
      }, 5000)
      this.walk2 = setTimeout(() => {
        this.walk2Internal = setInterval(() => {
          this.playAudio('stepstone1')
        }, 500)
        setTimeout(() => { clearInterval(this.walk2Internal) }, 6000)
      }, 5500)
      setTimeout(() => {
        clearInterval(this.stepsOne)
      }, 4990)
    }, 1000)
  }

  render (h: any) {
    this.setTitle('Alexander Pulido')
    this.setBack(false)
    return (
      <HomeTemplate
        interactive={this.buttons[0].status}
        static={this.buttons[1].status}
        blog={this.buttons[2].status}
        animationClass={this.animationClass}
        router={this.$router}
        methods={{
          buttonSelected: this.buttonSelected
        }}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.animationClass  = '-intro'
      if (newVal === true) {
        if (this.$refs.character1) {
          this.$refs.character1.className = '-'
        }
        if (this.$refs.character2) {
          this.$refs.character2.className = '-'
        }
      }
      this.backgroundSound()
    }
}
