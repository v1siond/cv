import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'Experience'
})
export default class Experience extends Vue {
  @Prop() playAudio!: any | undefined
  public render (h: any) {
    return (
      <router-view playAudio={this.playAudio}  />
    )
  }
}
