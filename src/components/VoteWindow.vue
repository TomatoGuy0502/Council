<template>
  <div class="vote_window">
    <h3 class="vote_topic">第一案 決議投票</h3>
    <div class="vote_block">
      <button 
        class="vote_button " 
        :class="[(vote===null || vote===0) ? 'agree_vote' : 'no_vote']" 
        @click="handleClick(0)" 
        :disabled="vote">同意</button>
      <button 
        class="vote_button " 
        :class="[(vote===null || vote===1) ? 'against_vote' : 'no_vote']" 
        @click="handleClick(1)" 
        :disabled="vote">反對</button>
      <button 
        class="vote_button " 
        :class="[(vote===null || vote===2) ? 'null_vote' : 'no_vote']" 
        @click="handleClick(2)" 
        :disabled="vote">廢票</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteWindow",
  data() {
    return {
      vote: null,
    }
  },
  methods: {
    handleClick(index){
      if(!this.vote) {
        this.vote = index;
        this.$emit('vote', index);
      }
    }
  }
}
</script>

<style lang="scss">
.vote_window{
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
  box-shadow: 0 0 14px 0 rgba(0,0,0,.06);
}
.vote_topic{
  color: $title1;
  letter-spacing:5px;
}
.vote_block{
  display: flex;
  justify-content: space-around;
}
.vote_button{
  width: 100px;
  height: 60px;
  margin: 5px;
  border-radius: 10px;
  color: #fff;
  font-size: $text_lm;
  line-height: $text_lm;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;
  &.not_ready{                //未開放投票
    background-color:$primary;
  }
}
.agree_vote{
  background-color: #00b050;
}
.against_vote{
  background-color: #c00000;
}
.null_vote{
  background-color: #000;
}
.no_vote{
  background-color: gray;
}
</style>