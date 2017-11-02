export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
// 02getters其实就是对数据的一些映射，getters也可以是一个函数，该函数类似于一些计算属性，其可以根据state的不同值计算出一个新的值
// eg currentSong 就是根据playList和currentIndex计算得出来的
