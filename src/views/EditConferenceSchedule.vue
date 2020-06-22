<template>
  <div class="conference_schedule">
    <div class="topic">議程</div>
    <div class="edit_finish">完成送出</div>
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
          <div v-for="(proposal, index) in proposalList" :key="index" class="case">
            <router-link :to="{name: 'detail',params: {proposalID:proposal.proposalID}}" tag="div" class="case__number">第{{convertNumber(index+1)}}案</router-link>
            <table class="case__form">
              <tr>
                <td>提案單位</td>
                <td>
                  <select name="">
                    <option value="">123</option>
                    <option value="">456</option>
                    <option value="">789</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>案由</td>
                <td>
                  <textarea name="" placeholder="請填入案由"></textarea>
                </td>
              </tr>
              <tr>
                <td>說明</td>
                <td>
                  <textarea name="" placeholder="請填入說明"></textarea>
                </td>
              </tr>
            </table>
            <div class="case__add_proposal">新增議案</div>
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
</template>

<script>
import {delibrationID} from '../api/proposal'
import {convertNumber} from '../services/converter'

export default {
  name: "ConferenceSchedule",
  components: {
    // LoginWindow,
  },
  data() {
    return {
      proposalList: [],
    };
  },
  created() {
    this.getProposal(this.$route.params.delibrationID)
  },
  methods: {
    async getProposal(dID) {
      let response = await delibrationID(dID)
      this.proposalList = response.data
    },
    convertNumber(num) {
      return convertNumber(num)
    },
  }
};
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
}

.edit_finish {
  position: absolute;
  left: 160px;
  height: 53px;
  line-height: 53px;
  width: 160px;
  border-radius: 7px;
  margin-top: 20px;
  background-color: #00b050;
  color: #fff;
  font-weight: 700;
  font-size: $text_s;
}

.schedule_list {
  letter-spacing: 5px;
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.schedule_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  max-width: 360px;
  &__title {
    border-radius: 7px;
    background-color: $title1;
    color: #fff;
    font-weight: 700;
    text-align: left;
    padding: 3px 15px;
    width: 100%;
  }
  &__detail {
    width: 100%;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .case {
      margin-bottom: 5px;
      width: 100%;
      &__number {
        width: 140px;
        font-size: $text_s;
        color: #fff;
        font-weight: 700;
        background-color: $title2;
        border-radius: 7px;
        padding: 5px;
      }
      &__form {
        width: 100%;
        td {
          width: 50%;
          font-size: $text;
          * {
            width: 100%;
            color: #fff;
            font-size: $text;
          }
        }
        select {
          height: 40px;
          border: none;
          background-color: #a9d18e;
          border-radius: 7px;
          padding: 0 10px;
        }
        textarea {
          padding: 0 10px;
          height: 80px;
          resize: none;
          border: none;
          background-color: #a9d18e;
          border-radius: 7px;
          &::placeholder{
            font-size: 22px;
            line-height: 78px;
            font-size: $text;
            color: #fff;
          }
        }
      }
      &__add_proposal {
        background-color: #00b050;
        border-radius: 7px;
        height: 53px;
        line-height: 53px;
        color: #fff;
        font-weight: 700;
        font-size: $text_s;
      }
    }
  }
}
// @media (min-width: 390px) {
//   .schedule_block__detail {
//     margin-left: calc((100vw - 390px) / 2);
//   }
// }
// .schedule_title{

// }
</style>