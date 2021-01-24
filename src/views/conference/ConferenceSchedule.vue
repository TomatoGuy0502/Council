<template>
  <div class="conference_schedule">
    <div v-if="this.proposalList.length">
      <div class="topic">議程</div>
      <div class="schedule_list">
        <div class="schedule_block">
          <h4 class="schedule_block__title">一、正式開會</h4>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">二、主席報告</h4>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">三、行政報告</h4>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">四、議案與討論事項</h4>
          <div class="schedule_block__detail">
            <div
              v-for="(proposal, index) in proposalList"
              :key="proposal.proposalID"
              class="case"
            >
              <router-link
                :to="{
                  name: 'detail',
                  params: { proposalID: proposal.id }
                }"
                tag="div"
                class="case__number"
                >第{{ convertNumber(index + 1) }}案
              </router-link>
              <div class="case__proposer">{{ proposal.dept }}</div>
            </div>
          </div>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">五、臨時動議</h4>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">六、聲明與補述</h4>
        </div>
        <div class="schedule_block">
          <h4 class="schedule_block__title">七、散會</h4>
        </div>
      </div>
    </div>
    <div v-else>
      <p>查無此會議</p>
      <router-link :to="{name: 'home'}" class="btn" tag="span">回到首頁</router-link>
    </div>
  </div>
</template>

<script>
import { getProposals } from '@/api/proposal'
import { mapActions } from 'vuex'

export default {
  name: 'ConferenceSchedule',
  components: {
    // LoginWindow,
  },
  data () {
    return {
      proposalList: []
    }
  },
  created: async function () {
    this.setLodingStatus(true)
    await this.getProposal(this.$route.params.delibrationID)
    this.setLodingStatus(false)
  },
  methods: {
    ...mapActions([
      'setLodingStatus'
    ]),
    ...mapActions({
      setDelibrationInfo: 'delibration/setDelibrationInfo'
    }),
    async getProposal (dID) {
      const response = await getProposals(dID)
      if (response.data.length === 0) {
        this.setDelibrationInfo({ semester: 0, period: 0, name: '無此會議' })
      }
      this.proposalList = response.data
    },
    convertNumber (num) {
      return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][
        num - 1
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.conference_schedule {
  width: 100%;
}

.topic {
  position: absolute;
  left: -20px;
  border-radius: 7px;
  background-color: $primary;
  color: #fff;
  font-size: $text_l;
  font-weight: 700;
  padding: 0 20px 0 60px;
  margin-top: 20px;
  top: 0;
}

.schedule_list {
  letter-spacing: 5px;
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.schedule_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  &__title {
    border-radius: 7px;
    background-color: $title1;
    color: #fff;
    // font-size: $text_m;
    font-weight: 700;
    text-align: left;
    padding: 3px 15px;
    width: 100%;
    max-width: 360px;
  }
  &__detail {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .case {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      &__number {
        width: 140px;
        font-size: $text_s;
        color: #fff;
        font-weight: 700;
        background-color: $title2;
        border-radius: 7px;
        padding: 5px 0 5px 5px;
      }
      &__proposer {
        z-index: -1;
        position: relative;
        left: -7px;
        font-size: $text;
        color: #fff;
        font-weight: 700;
        background-color: $title3;
        border-radius: 7px;
        padding-left: 5px;
        height: 38px;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
