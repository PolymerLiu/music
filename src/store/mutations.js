// mutation  变化; 转变;
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
