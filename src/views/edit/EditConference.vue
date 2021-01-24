<template>
  <form class="create_conference" @submit.prevent="handleSubmit">
    <label for="name">議會名稱</label>
    <input class="create_conference__input" id="name" v-model.trim="name" type="text" placeholder="第一次財委會" required>

    <label for="startTime">開始時間</label>
    <input class="create_conference__input" id="startTime" v-model.trim="startTime" type="datetime-local" required>

    <label for="endTime">結束時間</label>
    <input class="create_conference__input" id="endTime" v-model.trim="endTime" type="datetime-local" :min="startTime" required>

    <label for="position">權限</label>
    <input class="create_conference__input" id="position" v-model.trim="position" type="text" placeholder="請填入權限（不限定則留白）" required>

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
import { saveEditDelibration } from '@/api/delibration'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      startTime: null,
      endTime: null,
      position: '',
      semester: null,
      period: null,
      timeNow: new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0, 16)
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const res = await saveEditDelibration(this.$route.params.delibrationID, {
          dName: this.name,
          startTime: this.startTime.replace(/T/, ' '),
          endTime: this.endTime.replace(/T/, ' '),
          position: this.position,
          semester: this.semester,
          period: this.period
        })
        if (res.data.message === 'success') {
          await this.setDelibrations({ isLeader: this.isLeader })
          this.$router.push({ name: 'editConference' })
        }
      } catch (err) {
        console.error(err)
      }
    },
    ...mapActions({
      setDelibrations: 'delibration/setDelibrations'
    })
  },
  created () {
    this.startTime = this.timeNow

    const [data] = this.delibrations.filter(delibration => {
      return delibration.id === this.$route.params.delibrationID
    })
    this.name = data.dName
    this.startTime = data.startTime.slice(0, 16)
    this.endTime = data.endTime.slice(0, 16)
    this.position = data.position
    this.semester = data.semester
    this.period = data.period
  },
  computed: {
    ...mapState('delibration', [
      'delibrations'
    ]),
    ...mapState({
      isLeader: state => state.user.isLeader
    })
  }
}
</script>

<style lang="scss">
.create_conference{
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
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
    width: 100%;
  }
  &__btn{
    @include btn;
    background-color: $primary;
    font-size: $text_s;
    padding: 5px 30px;
  }
}
</style>
