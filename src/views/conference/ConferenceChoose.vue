<template>
  <div class="conference_choose">
    <p>請 選 擇 會 議</p>
    <div class="conference_list">
      <div
        v-for="item in delibrations"
        :key="item.delibrationID"
        class="conference_item"
        @click="joinDelibration(item)"
      >
        <div class="item_block">
          <h3 class="item_block__session">{{item.semester}}學年度第{{convertNumber(item.period)}}會期</h3>
          <h2 class="item_block__name">{{item.name}}</h2>
          <div class="item_block__time">{{item.startTime}} 開放登入</div>
        </div>
        <p class="item_authority">權限：{{item.position}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ConferenceChoose',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'delibrations'
    ])
  },
  methods: {
    ...mapMutations([
      'setDelibrationInfo'
    ]),
    convertNumber (num) {
      return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][num - 1]
    },
    joinDelibration ({ delibrationID, semester, period, name }) {
      this.setDelibrationInfo({ semester, period, name })
      router.push({ name: 'schedule', params: { delibrationID: delibrationID } })
    }
  }
}
</script>

<style lang="scss">
.conference_choose {
  width: 100%;
  // flex-grow: 1;
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
}
</style>
