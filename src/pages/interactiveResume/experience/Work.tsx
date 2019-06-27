import { Vue, Watch, Prop } from 'vue-property-decorator'
import Component from 'vue-class-component'
import WorkTemplate from '../../../templates/pages/interactiveResume/experience/work'
import {
  Getter
} from 'vuex-class'

@Component({
  name: 'Work'
})
export default class Work extends Vue {
  @Prop() section!: string | undefined
  @Getter('playAudio') public playAudio
  @Getter('getSound') public getSound
  public activeDropdowns: any = {}
  public activeHovers: any = {}
  public sectionSelected: string = 'fundacite'
  public credits: boolean = false
  public $refs!: {
    character,
    movingBg1,
    movingBg
  }
  public works: any[] = [
    {
      from: '2014',
      to: '2015',
      organization: 'Fundacite',
      description: 'Venezuelan organization, its objective is the development of science and techs.',
      jobs: [
        {
          description: 'Dictated a HTML, PHP and MySQL course 3 times',
          url: ''
        },
        {
          description: 'Implemented a basic to mid level JavaScript course',
          url: ''
        },
        {
          description: 'Implemented a basic to high level CSS course.',
          url: ''
        }
      ]
    },
    {
      from: '2016',
      to: '2017',
      organization: 'Systrix',
      description: 'Venezuelan contratist centered in web development.',
      jobs: [
        {
          description: 'Major colaboration in projects from Concur Messaging, Inc. some of them are:',
          url: '',
          projects: [
            {
              name: 'Dailydrip',
              url: 'https://www.dailydrip.com/'
            },
            {
              name: 'Firestorm',
              url: 'https://www.firestormforum.org/'
            },
            {
              name: 'HowFundable',
              url: 'https://www.howfundable.com/'
            }
          ]
        }
      ]
    },
    {
      from: '2017',
      to: 'Current',
      organization: 'Concur Messaging, Inc.',
      description: 'Consulting Enterprise with expertise in mobile and web development.',
      jobs: [
        {
          description: 'Major colaboration in the following projects:',
          url: '',
          projects: [
            {
              name: 'Dailydrip',
              url: 'https://www.dailydrip.com/',
              features: [
                'Implemented redesign style.',
                'Implemented distilley.',
                'Implemented playlist.',
                'Created and published content related to frontend development.'
              ]
            },
            {
              name: 'Firestorm',
              url: 'https://www.firestormforum.org/',
              features: [
                'Implemented Web Style.'
              ]
            },
            {
              name: 'HowFundable',
              url: 'https://www.howfundable.com/',
              features: [
                'Complete frontend development of the app.'
              ]
            },
            {
              name: 'Smooth Terminal',
              url: 'https://www.smoothterminal.com/',
              features: [
                'Complete frontend development of the app',
                'Created and published a Vue + TypeScript + GraphQL 40m lesson.'
              ]
            },
            {
              name: 'Agency Rocket',
              url: 'https://www.app.agencyrocket.com/',
              features: [
                'Main frontend developer of the project, implemented all the principal features off the app.'
              ]
            }
          ]
        }
      ]
    },
    {
      from: '2014',
      to: 'Current',
      organization: 'Freelance Work',
      description: 'List of freelance projects.',
      jobs: [
        {
          description: 'Decompra International',
          url: 'https://decompras.com.ve'
        },
        {
          description: 'Chicas507',
          url: 'https://chicas507.com/'
        },
        {
          description: 'Mi Guía de la Salud',
          url: 'https://miguiadelasalud.net/'
        },
        {
          description: 'Luis Anzola',
          url: 'https://luisanzola.com/'
        },
        {
          description: 'ES6 App Example',
          url: 'https://v1siond.bitbucket.io/'
        },
        {
          description: 'Spotify Search App ( deprecated, needs api update )',
          url: 'https://spotifyappsearch.herokuapp.com/'
        },
        {
          description: 'Zilene Personal Site',
          url: 'https://github.com/v1siond/sileny.com'
        },
        {
          description: 'Bootstrap Course - Socios Creativos',
          url: 'https://www.socioscreativos.com/'
        },
        {
          description: 'PlayList Picker',
          url: 'https://github.com/v1siond/playlistPicker'
        },
        {
          description: 'Interactive Resume',
          url: 'https://alexanderpulido.herokuapp.com/'
        },
        {
          description: 'Personal Invoice App',
          url: 'https://github.com/v1siond/cryptography_invoice'
        }
      ]
    }
  ]

  public toCamel = (s) => {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '')
    })
  }
  public moveBackground (n, anim, organization) {
    const org = organization.toLowerCase().replace(/ /g, '-').replace(/[,.]/g, '')
    this.sectionSelected = org
    this.$refs.character.className = `character -experience ${anim}`
    this.$refs.movingBg.style.left = `${n}%`
    this.$refs.movingBg1.style.left = `${n}%`
    this.$router.replace(`/static-resume/experience/work/${org}`)
  }

  public showDescription (organization) {
    if (this.activeHovers[organization]) {
      this.activeHovers = {}
    } else {
      this.$set(this.activeHovers, organization, true)
    }
  }
  public openDropdown (project) {
    if (this.activeDropdowns[project]) {
      this.$set(this.activeDropdowns, project, !this.activeDropdowns[project])
    } else {
      this.$set(this.activeDropdowns, project, true)
    }
  }

  public goToCredits () {
    this.credits = true
    this.$refs.movingBg.style.transition = 'all .5s'
    this.$refs.movingBg1.style.transition = 'all .5s'
    this.$refs.movingBg.style.left = '-300%'
    this.$refs.movingBg1.style.left = `-300%`
    setTimeout(() => {
      this.$router.push('/credits')
    }, 8000)
  }

  public mounted () {
    if (this.section) {
      this.sectionSelected = this.section.toLowerCase().replace(/ /g, '-').replace(/[,.]/g, '')
      this.works.filter((work, index) => {
        const org = work.organization.toLowerCase().replace(/ /g, '-').replace(/[,.]/g, '')
        let animation = ''
        if (org.includes('sys')) {
          animation = 'experienceTwoNext'
        } else if (org.includes('concur')) {
          animation = 'experienceThreeNext'
        } else if (org.includes('free')) {
          animation = 'experienceFourNext'
        }
        if (org === this.sectionSelected) {
          this.moveBackground(index * -100, animation, work.organization)
        }
      })
    }
    this.playAudio('experiencelevel')
  }

  public render (h) {
    return (
      <WorkTemplate
        works={this.works}
        moveBackground={this.moveBackground}
        activeDropdowns={this.activeDropdowns}
        activeHovers={this.activeHovers}
        showDescription={this.showDescription}
        openDropdown={this.openDropdown}
        section={this.sectionSelected}
        goToCredits={this.goToCredits}
        credits={this.credits}
        router={this.$router}
      />
    )
  }

  @Watch('getSound', { immediate: true, deep: true })
    onSoundChange (newVal: any) {
      this.playAudio('experiencelevel')
    }
}
