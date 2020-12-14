<template>
  <form class="create_conference" @submit.prevent="handleSubmit">
    <div class="create_conference__item">
      <label for="dept">提案單位</label>
      <input class="input" id="dept" v-model.trim="dept" type="text" placeholder="學生會" required>
    </div>
    <div class="create_conference__item">
      <label for="name">提案人</label>
      <input class="input" id="name" v-model.trim="name" type="text" placeholder="會長" required>
    </div>
    <div class="create_conference__item">
      <label for="reason">案由</label>
      <textarea class="input" id="reason" v-model.trim="reason" placeholder="請填入案由" required></textarea>
    </div>
    <div class="create_conference__item">
      <label for="description">描述</label>
      <textarea class="input" id="description" v-model.trim="description" placeholder="請填入描述" required></textarea>
    </div>
    <button class="create_conference__btn" type="submit">送 出</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      dept: '',
      name: '',
      reason: '',
      description: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.dept, this.name, this.reason)
    }
  }
}
</script>
<style lang="scss">
.create_conference{
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label{
    color:$title1;
  }
  .input{
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
