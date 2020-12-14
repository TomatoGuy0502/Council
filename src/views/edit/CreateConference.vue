<template>
  <form class="create_conference" @submit.prevent="handleSubmit">
    <label for="name">議會名稱</label>
    <input class="create_conference__input" id="name" v-model.trim="name" type="text" placeholder="第一次財委會" required>

    <label for="startTime">開始時間</label>
    <input class="create_conference__input" id="startTime" v-model.trim="startTime" type="datetime-local" required>

    <label for="endTime">結束時間</label>
    <input class="create_conference__input" id="endTime" v-model.trim="endTime" type="datetime-local" required>

    <label for="position">權限</label>
    <input class="create_conference__input" id="position" v-model.trim="position" type="text" placeholder="請填入權限" required>

    <label for="semester">學年度</label>
    <input class="create_conference__input" id="semester" v-model.trim="semester" type="number" required>

    <label for="period">會期</label>
    <input class="create_conference__input" id="period" v-model.trim="period" type="number" required>

    <div style="grid-column: 1 / span 2;">
      <button class="create_conference__btn" type="submit">送 出</button>
    </div>
  </form>
</template>

<script>
import { createDelibration } from '@/api/delibration'

export default {
  data () {
    return {
      name: '',
      startTime: null,
      endTime: null,
      position: '',
      semester: null,
      period: null
    }
  },
  methods: {
    handleSubmit () {
      createDelibration()
      console.log(this.dept, this.name, this.reason)
    }
  }
}
</script>

<style lang="scss">
.create_conference{
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  row-gap: 20px;
  column-gap: 15px;
  align-content: center;
  justify-content: center;
  &__input{
    font-size: $text;
    border: 1.5px #767171 solid;
    border-radius: 7px;
    padding: 10px 5px;
    background-color: #ffffff00;
  }
  &__btn{
    @include btn;
    background-color: $primary;
    font-size: $text_s;
    padding: 5px 30px;
  }
}
</style>
