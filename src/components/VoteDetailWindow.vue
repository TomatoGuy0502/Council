<template>
  <div class="vote_detail_window">
    <!-- <h3 class="vote_topic">第一案 決議投票</h3> -->
    <div class="vote_block">
      <div class="vote_button agree_vote">同意</div>
      <div class="vote_button against_vote">反對</div>
      <div class="vote_button null_vote">廢票</div>
    </div>
    <div class="vote_result">
      <div class="vote_result__item">
        <h5>{{voteResult.agree}}票</h5>
        <p>{{percent.agree}}%</p>
      </div>
      <div class="vote_result__item">
        <h5>{{voteResult.disagree}}票</h5>
        <p>{{percent.disagree}}%</p>
      </div>
      <div class="vote_result__item">
        <h5>{{voteResult.spoil}}票</h5>
        <p>{{percent.spoil}}%</p>
      </div>
    </div>
    <!-- <div class="voter">
      <div class="voter__item">
        <div class="voter_number">1</div>
        <div class="voter_department">不分系代</div>
        <div class="voter_name">暫無</div>
      </div>
    </div> -->
    <!-- <div class="confirm">確定</div> -->
  </div>
</template>

<script>
import { voteResults } from '../api/proposal'

export default {
  name: 'VoteDetailWindow',
  data () {
    return {
      voteResult: {}
    }
  },
  created () {
    this.getVoteResults(4)
  },
  methods: {
    async getVoteResults () {
      // TODO: 修正isAmendment
      const response = await voteResults(this.$route.params.proposalID, 0)
      console.log(response.data)
      this.voteResult = response.data
    }
  },
  computed: {
    percent () {
      const total = this.voteResult.agree + this.voteResult.disagree + this.voteResult.spoil
      return {
        agree: (this.voteResult.agree / total * 100).toFixed(1),
        disagree: (this.voteResult.disagree / total * 100).toFixed(1),
        spoil: (this.voteResult.spoil / total * 100).toFixed(1)
      }
    }
  }
}
</script>

<style lang="scss">
.vote_detail_window{
  position: fixed;
  max-width: 480px;
  bottom: 48px;
  padding: 20px 5px 10px 5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  border: 5px solid $primary;
  border-radius: 18px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.vote_result{
  display: flex;
  justify-content: space-around;
  &__item{
    border: 2px solid $title1;
    border-radius: 15px;
    width: 100px;
    height: 100px;
    margin: 5px;
    padding: 10px;
  }
}
.voter{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
  overflow: auto;
  &__item{
    display: flex;
    align-items: center;
    margin: 3px;
  }
  &_number{
    width: 20px;
    background-color: $secondary;
    padding: 10px 0;
  }
  &_department{
    width: 40px;
    margin: 0 5px;
  }
  &_name{
    width: 40px;
    background-color: #00b050;
    padding: 10px 0;
  }
}
.confirm{
  @include btn;
  color: inherit;
  margin: 0 auto;
  border: 2px solid $title1;
  width: 100px;
  font-size: $text_ms;
}
</style>
