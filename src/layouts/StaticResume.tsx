import { Vue, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import {
  Getter, Mutation
} from 'vuex-class'
@Component({
  name: 'StaticResume'
})
export default class StaticResume extends Vue {
  @Getter('getTime') public getTime: any
  @Mutation('setTime') public setTime
  @Prop() playAudio!: any | undefined
  mounted () {
    const vm = this
    setInterval(() => {
      vm.setTime(vm.getTime + 1)
    }, 1000)
  }
  render (h) {
    return (
      <router-view playAudio={this.playAudio}/>
    )
  }
}
