import { AppState } from './types'

const state: AppState = {
  loggedIn: false,
  title: 'Alexander Pulido',
  back: false,
  levelNumber: '_',
  levelName: '_',
  time: 0,
  sound: false,
  sounds: undefined,
  playAudio: undefined,
  admin: localStorage.getItem('admin') === 'true' || false
}

export default state
