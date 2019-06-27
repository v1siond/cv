import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Frontend from '../templates/components/skills'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'Skills'
})
export default class Skills extends Vue {
  @Prop() public current!: number | 0
  @Prop() public transitionName!: string | 'fade'
  @Prop() public show!: boolean | false
  @Prop() public skills!: any | undefined
  @Prop() public nextUrl!: any | undefined
  @Prop() public prevUrl!: any | undefined
  public currentBg: number = this.current
  public transition: string = this.transitionName
  public Show: boolean = this.show
  public direction: number = 1

  public $refs!: {
    moveSand: any
  }

  slide (dir) {
    this.direction = dir
    dir === 1
      ? (this.transition = 'slide-next')
      : (this.transition = 'slide-prev')
    const len = this.skills.length
    this.currentBg = (this.currentBg + dir % len + len) % len
    setTimeout(() => {
      this.$refs.moveSand.style.transition = 'unset'
    }, 2500)
    setTimeout(() => {
      this.transition = ''
      this.$refs.moveSand.style.left = `${this.currentBg > 0 ? this.currentBg * -100 : -100}%`
    }, 3000)
    this.$refs.moveSand.style.transition = 'all 3s'
  }

  public mounted () {
    this.Show = true
  }
  public render (h) {
    return (
      <Frontend
        current={this.currentBg}
        skills={this.skills}
        slide={this.slide}
        show={this.Show}
        transitionName={this.transition}
        nextUrl={this.nextUrl}
        prevUrl={this.prevUrl}
        router={this.$router}
      />
    )
  }
}
