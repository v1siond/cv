import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Prop() playAudio!: any | undefined
  public render (h) {
    return (
      <router-view playAudio={this.playAudio} />
    )
  }
}
