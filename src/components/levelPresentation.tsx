import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import PresentationTemplate from '../templates/components/presentationLevel'
import {
  Getter, Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Getter('getLevelNumber') public getLevelNumber: any
  @Getter('getLevelName') public getLevelName: any

  @Prop() public route!: any | undefined
  @Prop() public title!: string | undefined
  @Prop() public levelNumber!: string | undefined
  @Prop() public levelName!: string | undefined

  public mounted () {
    this.setTitle(this.title)
    this.setLevelNumber(this.levelNumber)
    this.setLevelName(this.levelName)
    setTimeout(() => {
      this.$router.push(this.route)
    }, 3000)
  }
  public render (h) {
    return (
      <PresentationTemplate
        getLevelNumber={this.getLevelNumber}
        getLevelName={this.getLevelName}
      />
    )
  }
}
