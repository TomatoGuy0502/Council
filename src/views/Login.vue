<template>
  <div class="Login">
    <div class="login_form" @submit.prevent>
      <div class="login_form__account">
        <label for="account">帳 號</label>
        <input class="input" id="account" v-model.trim="studentID" type="text" placeholder="學號(H00000000)" @keyup.13="login(studentID, password)" required>
      </div>
      <div class="login_form__password">
        <label for="password">密 碼</label>
        <input class="input" id="password" v-model.trim="password" type="password" placeholder="密碼(隨便打)" @keyup.13="login(studentID, password)" required>
      </div>
      <button class="login_form__enter" @click="login(studentID, password)">登 入</button>
    </div>
  </div>
</template>

<script>
import { login } from "../api/user"
import store from '../store'
import router from '@/router'

export default {
  name: 'Login',
  data() {
    return{
      studentID: '',
      password: '',
    }
  },
  methods: {
    async login(studentID, password) {
      if(this.studentID!=='' && this.password!=='') {
        let response = await login(studentID, password);
        if (response.data.isLogin === "success") {
          await store.dispatch('login', response.data.position)
          router.push({name: 'home'})
        } else {
          this.$emit('handle-error-window', "open", "login")
        }
      }
    },
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
  &__enter{
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
</style>