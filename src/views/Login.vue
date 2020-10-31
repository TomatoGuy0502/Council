<template>
  <div class="Login">
    <div class="login_form" @submit.prevent="login">
      <div class="login_form__account">
        <label for="account">帳 號</label>
        <input class="input" id="account" v-model.trim="studentID" type="text" placeholder="學號(H00000000)" @keyup.13="login(studentID, password)" required>
      </div>
      <div class="login_form__password">
        <label for="password">密 碼</label>
        <input class="input" id="password" v-model.trim="password" type="password" placeholder="密碼(隨便打)" @keyup.13="login(studentID, password)" required>
      </div>
      <div class="login_btn_container">
        <button class="login_form__btn" :class="{isValid}" type="submit" @click="login(studentID, password)">登 入</button>
        <button class="login_form__btn" @click="toRegister">註 冊</button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
import router from '@/router'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      studentID: '',
      password: ''
    }
  },
  computed: {
    ...mapState([
      'errorInfo'
    ]),
    isValid () {
      return !!(this.studentID && this.password)
    }
  },
  methods: {
    ...mapMutations([
      'setErrorWindow',
      'setUserInfo'
    ]),
    async login () {
      if (this.studentID !== '' && this.password !== '') {
        const response = await login(this.studentID, this.password)
        if (response.data.isLogin === 'success') {
          this.setUserInfo(response.data.position)
          router.push({ name: 'home' })
        } else {
          this.setErrorWindow({ showError: true, errorType: 'login' })
        }
      }
    },
    toRegister () {
      router.push({ name: 'register' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label{
    color:$title1;
  }
  input.input{
    text-align: center;
    font-size: $text;
    border: 1.5px #767171 solid;
    border-radius: 7px;
    margin-left: 15px;
    margin-bottom: 20px;
    padding: 10px 5px;
    background-color: #ffffff00;
  }
  &__btn{
    background-color: $primary;
    border-radius: 7px;
    border: none;
    color: #fff;
    font-size: $text_s;
    font-weight: bold;
    padding: 5px 30px;
    margin: 0;
    cursor: pointer;
  }
}
.login_btn_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
[type="submit"]:not(.isValid) {
  background-color: gray;
}
</style>
