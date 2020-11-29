<template>
  <div class="Register">
    <form class="register_form" @submit.prevent="register()">
      <div class="register_form__item">
        <label for="account">帳 號</label>
        <input class="input" id="account" v-model.trim="studentID" type="text" placeholder="學號(H00000000)" required>
      </div>
      <div class="register_form__item">
        <label for="password">密 碼</label>
        <input class="input" id="password" v-model.trim="password" type="password" placeholder="密碼(隨便打)" required>
      </div>
      <div class="register_form__item">
        <label for="department">系 所</label>
        <select class="input" id="department" v-model.trim="department" required>
          <option value="工資系" selected="selected">工資系</option>
          <option value="統計系">統計系</option>
        </select>
      </div>
      <div class="register_form__item">
        <label for="grade">系 級</label>
        <input class="input" id="grade" v-model.trim="grade" type="text" placeholder="110" required>
      </div>
      <div class="register_form__item">
        <label for="name">姓 名</label>
        <input class="input" id="name" v-model.trim="name" type="text" placeholder="成大人" required>
      </div>
      <div class="register_form__item">
        <label for="email">信 箱</label>
        <input class="input" id="email" v-model.trim="email" type="email" placeholder="123@example.com" required>
      </div>
      <div class="register_form__item">
        <p>預設為學代，如有其他身份請勾選</p>
        <input type="checkbox" id="財委" value="財委" v-model="position">
        <label for="財委">財委</label>
        <input type="checkbox" id="主委" value="主委" v-model="position">
        <label for="主委">主委</label>
      </div>
      <button class="register_form__btn" type="submit">註 冊</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { signUp } from '../api/user'

export default {
  name: 'Register',
  data () {
    return {
      studentID: '',
      password: '',
      department: '工資系',
      grade: '',
      name: '',
      email: '',
      position: []
    }
  },
  computed: {
    ...mapState([
      'errorInfo'
    ])
  },
  methods: {
    async register () {
      // TODO: 跳轉頁面
      console.log('註冊')
      await signUp({
        studentID: this.studentID,
        password: this.password,
        department: this.department,
        grade: this.grade,
        name: this.name,
        email: this.email,
        position: this.position
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register_form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label{
    color:$title1;
  }
  .input{
    text-align: center;
    font-size: $text;
    border: 1.5px #767171 solid;
    border-radius: 7px;
    margin-left: 15px;
    padding: 10px 5px;
    background-color: #ffffff00;
  }
  select {
    width: 189px;
  }
  &__item {
    margin-bottom: 20px;
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
</style>
