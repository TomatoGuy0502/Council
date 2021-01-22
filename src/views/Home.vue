<template>
  <div class="home">
    <router-link
      tag="div"
      class="home__block_link"
      v-for="item in home_link"
      :class="{ unopened: !item[1] }"
      :to="item[1]"
      :key="item[0]"
    >
      {{ item[0] }}
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      home_link: [
        ['公共提案', ''],
        ['選舉系統', ''],
        ['近期議案', ''],
        ['新增會議', ''],
        ['編輯會議', ''],
        ['加入會議', '/conference']
      ]
    }
  },
  methods: {
    ...mapActions({
      setDelibrations: 'delibration/setDelibrations'
    })
  },
  computed: {
    ...mapState({
      isLeader: state => state.user.isLeader
    })
  },
  created () {
    if (this.isLeader) {
      this.home_link[4] = ['編輯會議', '/editConference']
      this.home_link[3] = ['新增會議', '/createConference']
      this.setDelibrations({ isLeader: true })
    } else {
      this.setDelibrations({ isLeader: false })
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
}
// @media (min-width: 510px) {
//   .home{
//     max-width: 510px;
//   }
// }
// @media (min-width: 989px) {
//   .home{
//     min-width: 860px;
//   }
// }
.home__block_link {
  width: 120px;
  height: 120px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: $primary;
  color: #fff;
  font-size: $text_l;
  font-weight: 700;
  &.unopened {
    position: relative;
    &::after {
      position: absolute;
      width: 124px; //比原本的大一點，底層才不會走光
      height: 124px;
      top: -2px;
      left: -2px;
      background-color: #ffffffcc;
      display: flex;
      justify-content: center;
      align-items: center;
      content: "尚未開放";
      font-size: 18px;
      color: $title1;
    }
  }
}
</style>
