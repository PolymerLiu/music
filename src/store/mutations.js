// mutation  变化; 转变;
import * as types from './mutation-types'

const mutations = {
  // 每一个','为一个函数，"[types.SET_SINGER]"为一个函数名，其值为SET_SINGER
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) { // state源自state.js里边的state对象
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mutations
// 04mutations用来对数据进行修改 ，要先定义mutation-types
