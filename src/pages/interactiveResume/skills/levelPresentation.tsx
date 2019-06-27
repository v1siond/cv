import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import PresentationComponent from '../../../components/levelPresentation'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'LevelPresentation'
})
export default class LevelPresentation extends Vue {
  @Mutation('setBack') public setBack
  public render (h) {
    return (
      <PresentationComponent
        title='LVL-2: Skills'
        levelNumber='2'
        levelName='Skills'
        route='/interactive-resume/skills/frontend'
        router={this.$router}
      />
    )
  }
}
