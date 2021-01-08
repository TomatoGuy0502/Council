<template>
  <div class="conference_choose">
    <WarnWindow
      :semester="semester"
      :period="period"
      :name="name"
      :deleteIndex="deleteIndex"
      v-if="showWarning"
      @close-window="showWarning = 0"
      @delete-delibration="handleDeleteDelibration"
    />
    <p>請 選 擇 會 議</p>
    <div class="conference_list">
      <div
        v-for="(item,index) in delibrations"
        :key="item.id"
        class="conference_item"
        @click="editSchedule(item)"
      >
        <div class="item_block">
          <h3 class="item_block__session">{{item.semester}}學年度第{{convertNumber(item.period)}}學期</h3>
          <h2 class="item_block__name">{{item.dName}}</h2>
          <div class="item_block__time">{{item.startTime}} 開放登入</div>
          <div class="item_block__edit">
            <div @click.stop="">編輯</div>
            <div @click.stop="openWarningWindow(item, index, item.id)">刪除</div>
          </div>
        </div>
        <p class="item_authority">權限：{{item.position}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import WarnWindow from '@/components/WarnWindow.vue'
import router from '@/router'
import { mapState, mapActions } from 'vuex'
import { deleteDelibration } from '@/api/delibration'

export default {
  name: 'ConferenceChoose',
  components: {
    WarnWindow
  },
  data () {
    return {
      semester: 0,
      period: 0,
      name: '',
      deleteIndex: 0,
      showLogin: 0,
      showWarning: 0,
      deleteID: null
    }
  },
  computed: {
    ...mapState('delibration', [
      'delibrations'
    ])
  },
  methods: {
    ...mapActions({
      setDelibrationInfo: 'delibration/setDelibrationInfo'
    }),
    handleDeleteDelibration () {
      this.showWarning = 0
      // this.conferenceList.splice(deleteIndex, 1)
      deleteDelibration(this.deleteID)
    },
    convertNumber (num) {
      return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][num - 1]
    },
    openWarningWindow ({ semester, period, name }, deleteIndex, deleteID) {
      this.semester = semester
      this.period = period
      this.name = name
      this.deleteIndex = deleteIndex
      this.showWarning = 1
      this.deleteID = deleteID
    },
    editSchedule ({ id, semester, period, dName }) {
      this.setDelibrationInfo({ semester, period, name: dName })
      router.push({
        name: 'editSchedule',
        params: { delibrationID: id }
      })
    }
  }
}
</script>

<style lang="scss">
.conference_choose {
  width: 100%;
  & > p {
    color: #000;
    font-size: $text_s;
    margin-bottom: 0;
  }
}
.conference_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conference_item {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
}

.item_block {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary;
  border-radius: 20px;
  color: #fff;
  padding: 10px;
  &__session {
    // font-size: $text_m;
    margin-bottom: 0;
  }
  &__name {
    // font-size: 34px;
    letter-spacing: 5px;
  }
  &__time {
    color: $title1;
    width: calc(100% - 40px);
    padding: 2px 20px;
    border-radius: 5px;
    background-color: $secondary;
  }
  &__edit {
    margin-top: 15px;
    display: flex;
    width: calc(100% - 40px);
    justify-content: space-between;
    div {
      width: 45%;
      padding: 2px 20px;
      border-radius: 5px;
      &:first-child {
        background-color: #00b050;
      }
      &:last-child {
        background-color: #c00000;
      }
    }
  }
}
</style>
