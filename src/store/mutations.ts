import { MutationTree } from 'vuex'
import { AppState } from './types'

const mutations: MutationTree<AppState> = {
  setLogin (state, value: boolean) {
    state.loggedIn = value
  },
  setTitle (state, value: string) {
    state.title = value
  },
  setBack (state, value: boolean) {
    state.back = value
  },
  setLevelNumber (state, value: string) {
    state.levelNumber = value
  },
  setLevelName (state, value: string) {
    state.levelName = value
  },
  setTime (state, value: number) {
    state.time = value
  },
  setSound (state, value: boolean) {
    state.sound = value
  },
  setSounds (state, value: object) {
    state.sounds = value
  },
  setPlayAudio (state, value: any) {
    state.playAudio = value
  },
  setAdmin (state, value: any) {
    state.admin = value
  }
}

export default mutations
