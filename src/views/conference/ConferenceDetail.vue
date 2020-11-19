<template>
  <div class="conference_detail">
    <div class="schedule_block">
      <h3 class="schedule_block__title">四、議案與討論事項</h3>
    </div>
    <table class="detail_table">
      <tr class="case_info">
        <td class="title" width="25px">案次</td>
        <td class="title_data">第一案</td>
        <td class="title" width="50px">提案單位</td>
        <td class="title_data">{{proposal.dept}}</td>
      </tr>
      <tr class="case_summary">
        <td class="title">案由</td>
        <td colspan="3" align="left">{{proposal.reason}}</td>
      </tr>
      <tr class="case_description">
        <td class="title">說明</td>
        <td colspan="3" align="left">
          <li v-for="(description,index) in proposal.description" :key="index">{{description}}</li>
        </td>
      </tr>
      <tr>
        <td class="title">討論</td>
        <td colspan="3" align="left">{{proposal.discussion}}</td>
      </tr>
    </table>

    <VoteWindow v-show="votingInfo.isVoting && showVoteWindow" @vote="vote"/>

    <LeaderVoteWindow v-if="position === 'leader'" v-show="showLeaderVoteWindow"/>
    <div class="toggle_btns">
      <div v-if="position === 'leader'" class="toggle_btns__leader" :class="{ is_open: showLeaderVoteWindow }" @click="toggleLeaderWindow">管</div>
      <div class="toggle_btns__vote" :class="{ is_open: votingInfo.isVoting && showVoteWindow }" @click="toggleVoteWindow">投</div>
    </div>
    <VoteDetailWindow style="display:none"/>
  </div>
</template>

<script>
import VoteWindow from '@/components/VoteWindow.vue'
import LeaderVoteWindow from '@/components/LeaderVoteWindow.vue'
import VoteDetailWindow from '@/components/VoteDetailWindow.vue'
import { proposalID, vote } from '@/api/proposal'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ConferenceDetail',
  components: {
    VoteWindow,
    LeaderVoteWindow,
    VoteDetailWindow
  },
  data () {
    return {
      proposal: {},
      showVoteWindow: false,
      showLeaderVoteWindow: false
    }
  },
  computed: {
    ...mapState({
      position: state => state.user.position,
      votingInfo: 'votingInfo'
    })
  },
  created: async function () {
    this.setLodingStatus(true)
    await this.getProposalDetail(this.$route.params.delibrationID, this.$route.params.proposalID)
    this.setLodingStatus(false)
    this.$socket.emit('entryVote', {
      proposalID: this.$route.params.proposalID
    })
  },
  methods: {
    ...mapActions({
      setErrorWindow: 'error/setErrorWindow',
      setLodingStatus: 'setLodingStatus',
      setVotingStatus: 'setVotingStatus'
    }),
    async getProposalDetail (dID, pID) {
      const response = await proposalID(dID, pID)
      this.proposal = response.data
    },
    async vote (caseID, studentID, result) {
      const response = await vote(caseID, studentID, result)
      console.log(response)
    },
    toggleLeaderWindow () {
      if (!this.showLeaderVoteWindow && this.showVoteWindow) {
        this.showVoteWindow = false
      }
      this.showLeaderVoteWindow = !this.showLeaderVoteWindow
    },
    toggleVoteWindow () {
      if (this.votingInfo.isVoting) {
        this.showVoteWindow = !this.showVoteWindow
        if (this.showLeaderVoteWindow) {
          this.showLeaderVoteWindow = false
        }
      } else {
        this.setErrorWindow({ showError: true, errorType: 'cantVote' })
      }
    }
  }
}
</script>

<style lang="scss">
.conference_detail{
  padding-top: 20px;
  width: 100%;
}
.detail_table{
  border-color:#fff;
  border-collapse:collapse;
  margin-bottom: 130px;
  .case_summary{
    font-weight: 700;
  }
  .title{
    background-color: $primary;
    color: #fff;
    font-weight: 700;
    &_data{
      background-color: $secondary;
      font-weight: 700;
    }
  }
  td{
    border: 5px solid #fff;
  }
  li{
    margin-bottom: 10px;
  }
}

.toggle_btns {
  user-select: none;
  z-index: 1;
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  div {
    cursor: pointer;
    // color: #fff;
    font-weight: 700;
    width: 30px;
    height: 30px;
    border-radius: 7px;
    border: 3px solid #3b3838;
    margin: 0 5px 0 0;
    &.is_open {
      background-color: #808080;
    }
  }
}

</style>
