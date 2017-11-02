import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
//  01 给Vuex定义数据时，先定义state，state是用来存储原始数据的
//  02 getters其实就是一些对数据的映射，getters也可以是函数（也就类似于计算属性），其可以根据不同的state值计算得到不同的结果
//  03 mutation-types看看有哪些修改数据的动作，即哪里会修改数据
//  04 mutations用来定义如何修改数据
