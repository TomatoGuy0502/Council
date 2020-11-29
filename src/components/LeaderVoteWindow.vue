<template>
  <div class="leader_vote_window">
    <h3 class="vote_topic">
      第一案 {{manipulationType === 'resolution' ? '決議' : '臨時動議'}}操作
    </h3>
    <div class="vote_block">
      <button class="vote_button start" @click="createVote" v-if="!votingInfo.isVoting">開放<br/>投票</button>
      <button class="vote_button finish" @click="closeVote" v-else>結束<br/>投票</button>
      <button class="vote_button" @click="toggleManipulation">
        切至<br/>
        {{manipulationType === 'resolution' ? '動議' : '決議'}}
        </button>
      <button class="vote_button">撤案</button>
    </div>
  </div>
</template>

<script>
import { createVote } from '../api/proposal'
import { mapState } from 'vuex'

export default {
  name: 'LeaderVoteWindow',
  data () {
    return {
      manipulationType: 'resolution'
    }
  },
  computed: {
    ...mapState([
      'votingInfo'
    ])
  },
  methods: {
    async createVote () {
      try {
        const response = await createVote()
        if (response) {
          this.$socket.emit('startResolution', {
            proposalID: this.$route.params.proposalID
          })
        }
      } catch (err) {
        console.warn(err)
      }
    },
    closeVote () {
      this.$socket.emit('closeResolution', {
        proposalID: this.$route.params.proposalID
      })
    },
    toggleManipulation () {
      if (this.manipulationType === 'resolution') {
        this.manipulationType = 'amendment'
      } else {
        this.manipulationType = 'resolution'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.leader_vote_window {
  position: fixed;
  bottom: 48px;
  max-width: 480px;
  padding: 5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  border: 5px solid $primary;
  border-radius: 18px;
  z-index: 1;
}
.vote_button {
  font-size: $text_s;
  line-height: $text_s;
  &.start {
    background-color: #00b050;
  }
  &.finish {
    background-color: #c00000;
  }
  &:nth-child(2) {
    background-color: #c00000;
  }
  &:nth-child(3) {
    background-color: #767171;
  }
}

</style>
