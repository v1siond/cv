import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import {Howl, Howler} from 'howler'
import {
  Getter, Mutation
} from 'vuex-class'

@Component
export default class LevelSelection extends Vue {
  @Getter('getSound') public getSound
  @Getter('getSounds') public getSounds
  @Getter('playAudio') public playAudio
  @Mutation('setSounds') public setSounds
  @Mutation('setPlayAudio') public setPlayAudio
  public songNames = [
    'levelselection',
    'beep',
    'deeper',
    'desert',
    'experiencelevel',
    'explosion1',
    'hobbiessong',
    'intro',
    'jumpstart',
    'stepstone1',
    'tarantella',
    'wind4'
  ]
  public sounds: any = [
    {
      src: '/levelSelection.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 1
    },
    {
      src: '/wind_4.wav',
      loop: true,
      volume: 0.2,
      preload: true,
      rate: 1
    },
    {
      src: '/intro.mp3',
      loop: true,
      volume: 0.45,
      preload: true,
      rate: 1
    },
    {
      src: '/stepstone_1.wav',
      loop: false,
      volume: 0.2,
      preload: true,
      rate: 1
    },
    {
      src: '/jumpStart.mp3',
      loop: false,
      volume: 0.75,
      preload: true,
      rate: 1
    },
    {
      src: '/Deeper.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 0.75
    },
    {
      src: '/tarantella.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 1
    },
    {
      src: '/hobbiesSong.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 1
    },
    {
      src: '/desert.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 1
    },
    {
      src: '/beep.wav',
      loop: false,
      volume: 0.75,
      preload: true,
      rate: 1
    },
    {
      src: '/ExperienceLevel.mp3',
      loop: true,
      volume: 0.35,
      preload: true,
      rate: 1
    },
    {
      src: '/Explosion1.mp3',
      loop: false,
      volume: 0.65,
      preload: true,
      rate: 1
    }
  ]

  beforeMount () {
    if (!this.getSounds) {
      const SoundsArray = {}
      this.sounds.map((sound) => {
        const soundName = sound.src.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace('wav', '').replace('mp3', '')
        const objectSpound = new Howl(sound)
        SoundsArray[soundName] = objectSpound
      })
      this.setSounds(SoundsArray)
    }
    if (!this.playAudio) {
      this.setPlayAudio(this.playAudioFunction)
    }
  }

  public async playAudioFunction (sound: string) {
    if (this.getSound) {
      if (this.getSounds && this.getSounds[sound] && this.getSounds[sound]._sounds[0]._paused) {
        this.getSounds[sound].play()
      }
    } else if (this.getSounds && this.getSounds[sound]) {
      this.getSounds[sound].stop()
    }
  }

  public beforeDestroy () {
    this.songNames.map((soundName) => {
      this.getSounds[soundName].stop()
    })
  }
}
