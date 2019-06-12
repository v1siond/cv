import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'About'
})
export default class About extends Vue {
  public render (h) {
    return (
      <router-view />
    )
  }
}