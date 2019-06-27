import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import PresentationComponent from '../../../components/levelPresentation'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'About'
})
export default class About extends Vue {
  @Mutation('setBack') public setBack
  public render (h) {
    return (
      <PresentationComponent
        title='LVL-3: Work Experience'
        levelNumber='3'
        levelName='Experience'
        route='/static-resume/experience/work'
        router={this.$router}
      />
    )
  }
}
