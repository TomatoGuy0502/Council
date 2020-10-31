<template>
  <div class="error_window container window">
    <div class="close_layer" @click="setErrorWindow({})"></div>
    <div class="error_container">
      <span class="error_block">錯 誤</span>
      <p class="error_message">{{errorMessage}}</p>
      <button class="error_return">點擊畫面返回</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ErrorWindow',
  data () {
    return {
    }
  },
  computed: {
    errorMessage: function () {
      return {
        login: '帳號或密碼錯誤，請重新嘗試',
        notAvailable: '會議簽到未開放/已過期',
        cantVote: '議案尚未開放投票，請稍後再試'
      }[this.errorInfo.errorType]
    },
    ...mapState([
      'errorInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'setErrorWindow'
    ])
  }
}
</script>

<style lang="scss">
.close_layer{
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.error_block{
  background-color: $primary;
  border-radius: 7px;
  border: none;
  color: #fff;
  font-size: $text_s;
  font-weight: bold;
  padding: 5px 30px;
}
.error_return{
  border: 1.5px #767171 solid;
  border-radius: 7px;
  background-color: #ffffff00;
  padding: 5px 30px;
  font-size: $text_s;
  font-weight: bold;
  color: $primary;
  cursor: pointer;
  margin-top: 20px;
}
</style>
