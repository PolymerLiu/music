<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>


<script type="text/ecmascript-6">
  import { getSingerList } from 'api/singer'
  import Singer from 'common/js/singer'
  import ListView from 'base/listview/listview'
  //  import ERR_OK from 'api/config'
  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10
  export default{
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
      this._normalizeSinger()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === 0) {
            this.singers = this._normalizeSinger(res.data.list)
            console.log(this.singers)
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => { // 遍历传进来的list，并把其值填充到map的items里边
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 为了得到有序列表、我们需要处理 map
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    },
    components: {
      ListView
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
