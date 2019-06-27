import { Vue, Prop, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import CreditsTemplate from '../templates/pages/credits'
import {
  Getter, Mutation
} from 'vuex-class'
import sgMail from '@sendgrid/mail'

@Component({
  name: 'Credits'
})
export default class Credits extends Vue {
  @Mutation('setTitle') public setTitle
  @Mutation('setBack') public setBack
  @Getter('getSound') public getSound
  @Getter('getSounds') public getSounds
  @Mutation('setLevelNumber') public setLevelNumber
  @Mutation('setLevelName') public setLevelName
  @Prop() public playAudio!: any | undefined
  public email: string = ''
  public subject: string = ''
  public message: string = ''
  public colaborators: any = [
    {
      name: 'Alexander Pulido',
      job: 'Project Development',
      url: null
    },
    {
      name: 'Alexander Pulido',
      job: 'Frontend Development'
    },
    {
      name: 'Alexander Pulido',
      job: 'Backend Development'
    },
    {
      name: 'Alexander Pulido',
      job: 'Animation'
    },
    {
      name: 'Daniel Piña',
      job: 'Sprite Designer',
      url: 'https://drive.google.com/file/d/1Vq9XjseBidmOTCUEEOullLDxPJSucij_/view?fbclid=IwAR1sI0O45qDrWWomAp3okq9DfXC-AOe-4A2WwnDAYitL3ry_ksh1YGqTm-k'
    },
    {
      name: 'Eon',
      job: 'Music Ambientation for Experience and Hobbies levels',
      url: 'https://www.facebook.com/Enlighten-Our-Nature-EON-357583141013558/'
    },
    {
      name: 'Drakhen',
      job: 'Music Ambientation for Home, Credits and Skills levels.',
      url: 'https://www.facebook.com/Drakhenbanda/'
    },
    {
      name: 'Tanner Helland',
      job: 'Music Ambientation for Level Selection screen and Abilities level.',
      url: 'http://www.tannerhelland.com'
    },
    {
      name: '8notes.com',
      job: 'Music Ambientation for Born In level',
      url: 'https://www.8notes.com'
    },
    {
      name: 'Game Dev Market',
      job: 'Game Assets Provider',
      url: 'https://gamedevmarket.net'
    },
    {
      name: 'Luis Zuno',
      job: 'Game Assets for Experience Level',
      urk: 'https://ansimuz.com'
    },
    {
      name: 'Eder Muniz',
      job: 'Game Assets for Selection Level',
      urk: 'https://twitter.com/EdermuniZz'
    },
    {
      name: 'CraftPix.net',
      job: 'Game Assets provider for Home, Abilities, Hobbies and Skills Level',
      urk: 'https://craftpix.net/'
    }
  ]
  public publishedContent: any = [
    {
      date: '27-11-2017',
      title: 'Build a 2D animation with CSS',
      description: 'Learn the fundamentals of CSS animations by building a Hot Air Balloon.',
      url: 'https://www.smoothterminal.com/articles/build-a-2d-animation-using-only-css'
    },
    {
      date: '28-11-2017',
      title: 'Build a 2D animation with CSS Part 2.',
      description: 'Learn the fundamentals of CSS animations by building a Hot Air Balloon.',
      url: 'https://www.smoothterminal.com/articles/build-a-simple-2d-hot-air-balloon-animation-using-only-css'
    },
    {
      date: '29-11-2017',
      title: 'Build a 3D animation with CSS',
      description: 'Learn the fundamentals of CSS 3D animations.',
      url: 'https://www.smoothterminal.com/articles/build-a-3d-animation-using-only-css'
    },
    {
      date: '29-11-2017',
      title: 'Build a 3D Mobile with CSS',
      description: 'Learn the fundamentals of CSS 3D drawing.',
      url: 'https://www.smoothterminal.com/articles/build-a-3d-mobile-using-only-css'
    },
    {
      date: '30-11-2017',
      title: 'Animations Sub-Properties and Their Effects',
      description: 'Learn the fundamentals of CSS animations.',
      url: 'https://www.smoothterminal.com/articles/build-a-3d-mobile-using-only-css'
    },
    {
      date: '24-01-2018',
      title: 'Designing a Email Template',
      description: 'Learn how to design emails and the best practices.',
      url: 'https://www.smoothterminal.com/articles/designing-an-email-template'
    },
    {
      date: '25-01-2018',
      title: 'Building a Responsive Email',
      description: 'Learn how to build email templates and the best practices.',
      url: 'https://www.smoothterminal.com/articles/building-a-responsive-email'
    },
    {
      date: '06-02-2018',
      title: 'Building a Email Template: Fluid Technique Part I',
      description: 'Learn how to build email templates and the best practices.',
      url: 'https://www.smoothterminal.com/articles/building-a-responsive-email-using-fluid-technique-part-i'
    },
    {
      date: '06-02-2018',
      title: 'Building a Email Template: Fluid Technique Part II',
      description: 'How to design emails and best practices.',
      url: 'https://www.smoothterminal.com/articles/building-a-responsive-email-using-fluid-technique-part-ii'
    },
    {
      date: '07-02-2018',
      title: 'Designing a Email Template: Testing, tools, Utilities and Tricks',
      description: 'Overview of best practices',
      url: 'https://www.smoothterminal.com/articles/testing-tools-utilities-and-tricks'
    },
    {
      date: '13-06-2018',
      title: 'Sass: Introduction to Sass Part I',
      description: 'A practical introduction to Sass',
      url: 'https://www.smoothterminal.com/articles/introduction-to-sass-part-one'
    },
    {
      date: '14-06-2018',
      title: 'Sass: Introduction to Sass part II',
      description: 'A practical introduction to Sass',
      url: 'https://www.smoothterminal.com/articles/introduction-to-sass-part-2'
    },
    {
      date: '21-06-2018',
      title: 'Sass: Complex Mixins Part I',
      description: 'Learn how mixins, loops and conditional works in Sass and how they can improve drastically your style workflow.',
      url: 'https://www.smoothterminal.com/articles/complex-mixins-in-sass-part-ii'
    },
    {
      date: '25-06-2018',
      title: 'Sass: Complex Mixins Part II',
      description: 'Learn how mixins, loops and conditional works in Sass and how they can improve drastically your style workflow.',
      url: 'https://www.smoothterminal.com/articles/complex-mixins-in-sass-part-ii-2be8d72c-9b1b-4077-815f-5ec3b1528a0b'
    },
    {
      date: '26-06-2018',
      title: 'Build Your Own 8-bit Character Using Sass Part I: Base',
      description: 'A practical example using all features availables in Sass',
      url: 'https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-i'
    },
    {
      date: '27-06-2018',
      title: 'Build Your Own 8-bit Character Using Sass Part II: Styling',
      description: 'A practical example using all features availables in Sass',
      url: 'https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-ii'
    },
    {
      date: '07-04-2018',
      title: 'Build Your Own 8-bit Character Using Sass Part III: Animating',
      description: 'A practical example using all features availables in Sass',
      url: 'https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-iii'
    },
    {
      date: '09-04-2018',
      title: 'Build Your Own 8-bit Character Using Sass Part IV: Automating Animation',
      description: 'A practical example using all features availables in Sass',
      url: 'https://www.smoothterminal.com/articles/build-your-own-8-bit-character-using-sass-part-iv-a9e55093-4389-4dbe-90d1-2a247edcc5a1'
    },
    {
      date: '30-08-2018',
      title: `A Modern Developer's Approach to Pull Request`,
      description: 'Git best practices',
      url: 'https://www.smoothterminal.com/articles/a-modern-developer-s-approach-to-pull-requests'
    },
    {
      date: '22-01-2019',
      title: `Implement a Vue Client for a GraphQL Forum`,
      description: 'Learn how to use Vue with TypeScript, Stylus, Pug, and Vuex to build a client for a graphql-powered forum',
      url: 'https://www.smoothterminal.com/courses/graphql-zero-to-awesome/lessons/implement-a-vue-client-for-a-graphql-forum'
    }
  ]

  public sendEmail () {
    window.open(`mailto:${this.email}?subject=${this.subject}&body=${this.message}`)
  }

  sync (prop, value) {
    this[prop] = value
  }

  public backgroundSound () {
    this.playAudio('intro')
    this.playAudio('wind4')
  }

  public mounted () {
    this.backgroundSound()
    this.setTitle('Credits')
    this.setBack(true)
    this.setLevelNumber('')
    this.setLevelName('Credits')
  }

  public render (h) {
    return (
      <CreditsTemplate
        colaborators={this.colaborators}
        publishedContent={this.publishedContent}
        sync={this.sync}
        email={this.email}
        subject={this.subject}
        message={this.message}
        sendEmail={this.sendEmail}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.backgroundSound()
    }
}
