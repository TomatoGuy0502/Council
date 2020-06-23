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
            <div class="case__header">
              <div class="case__number">第{{convertNumber(index+1)}}案</div>
              <div class="case__delete" @click="deleteProposal(index)">刪除</div>
            </div>
            <table class="case__form">
              <tr>
                <td>提案單位</td>
                <td>
                  <input type="text" placeholder="請填入單位" v-model="proposal.dept">
                </td>
              </tr>
              <tr>
                <td>案由</td>
                <td>
                  <textarea name="" placeholder="請填入案由" v-model="proposal.reason"></textarea>
                </td>
              </tr>
              <tr>
                <td>說明</td>
                <td>
                  <textarea name="" placeholder="請填入說明" v-model="proposal.description"></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div class="schedule_block__add_proposal" @click="addNewProposal">新增議案</div>
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
import {getEditDelibration} from '../api/delibration'
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
    this.getEditDelibration(this.$route.params.delibrationID)
  },
  methods: {
    async getEditDelibration(dID) {
      let response = await getEditDelibration(dID)
      this.proposalList = response.data.proposal
    },
    convertNumber(num) {
      return convertNumber(num)
    },
    addNewProposal() {
      this.proposalList.push({
        "dept": "",
        "reason": "",
        "description": "",
        "discussion": "",
      })
    },
    deleteProposal(index) {
      this.proposalList.splice(index, 1)
    }
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
      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      &__number {
        width: 140px;
        font-size: $text_s;
        color: #fff;
        font-weight: 700;
        background-color: $title2;
        border-radius: 7px;
        padding: 5px;
      }
      &__delete {
        color: #fff;
        background-color: #c00000;
        font-size: 24px;
        border-radius: 7px;
        padding: 5px 10px 5px 15px;
        font-weight: 700;
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
        input, textarea {
          height: 40px;
          border: none;
          background-color: #a9d18e;
          border-radius: 7px;
          padding: 0 10px;
          &::placeholder{
            font-size: 22px;
            line-height: 78px;
            font-size: $text;
            color: #fff;
          }
        }
        textarea {
          height: 80px;
          resize: none;
        }
      }
      // &__add_proposal {
      //   background-color: #00b050;
      //   border-radius: 7px;
      //   height: 53px;
      //   line-height: 53px;
      //   color: #fff;
      //   font-weight: 700;
      //   font-size: $text_s;
      // }
    }
  }
  &__add_proposal {
    width: 100%;
    background-color: #00b050;
    border-radius: 7px;
    height: 53px;
    line-height: 53px;
    color: #fff;
    font-weight: 700;
    font-size: $text_s;
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