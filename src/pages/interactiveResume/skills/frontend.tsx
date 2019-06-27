import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import FrontendTemplate from '../../../components/Skills'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'Frontend'
})
export default class Frontend extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  public current: number = 0
  public transitionName: string = 'fade'
  public show: boolean = false
  public nextUrl: any = {
    url: '/static-resume/skills/backend',
    text: 'Level 2.2'
  }
  public prevUrl: any = {
    url: '/static-resume/about/hobbies',
    text: 'Level 1.4'
  }
  public skills: any = [
    {
      title: 'JS/Frameworks',
      techs: [
        {
          name: 'React',
          stars: 5
        },
        {
          name: 'JavaScript',
          stars: 5
        },
        {
          name: 'Phoenix',
          stars: 3
        },
        {
          name: 'Rails',
          stars: 3
        },
        {
          name: 'Vue',
          stars: 5
        }
      ],
      class: ''
    },
    {
      title: 'Style',
      techs: [
        {
          name: 'Sass',
          stars: 5
        },
        {
          name: 'CSS Animations',
          stars: 4
        },
        {
          name: 'JS Animations',
          stars: 4
        },
        {
          name: 'Stylus',
          stars: 5
        },
        {
          name: 'CSS',
          stars: 5
        }
      ],
      class: ''
    },
    {
      title: 'Miscellaneous',
      techs: [
        {
          name: 'TypeScript',
          stars: 4
        },
        {
          name: 'GraphQL / Apollo',
          stars: 5
        },
        {
          name: 'Build Tools',
          stars: 4
        },
        {
          name: 'Cypress',
          stars: 4
        },
        {
          name: 'TDD',
          stars: 3
        }
      ],
      class: ''
    },
    {
      title: 'Miscellaneous',
      techs: [
        {
          name: 'REST',
          stars: 5
        },
        {
          name: 'Email Template',
          stars: 4
        },
        {
          name: 'JQuery',
          stars: 4
        },
        {
          name: 'Quasar',
          stars: 5
        },
        {
          name: 'Jest',
          stars: 3
        }
      ],
      class: ''
    }
  ]

  public mounted () {
    this.setTitle('LVL-2.1: Frontend')
    this.setBack(true)
    this.setLevelNumber('2-1')
    this.setLevelName('Frontend')
  }

  public render (h) {
    return (
      <FrontendTemplate
        current={this.current}
        skills={this.skills}
        show={this.show}
        transitionName={this.transitionName}
        nextUrl={this.nextUrl}
        prevUrl={this.prevUrl}
        router={this.$router}
      />
    )
  }
}
