<template>
  <div class="warn_window container window">
    <div class="close_layer" @click="$emit('close-window')"></div>
    <div class="warn_container">
      <span class="warn_block">警 告</span>
      <p class="warn_message">你即將刪除<br/>{{semester}}學年度第{{convertNumber(period)}}學期{{name}}</p>
      <button class="warn_return" @click="$emit('delete-delibration', deleteIndex)">確 定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'warnWindow',
  props: {
    semester: Number,
    period: Number,
    name: String,
    deleteIndex: Number,
  },
  methods: {
    convertNumber(num) {
      return ["一","二","三","四","五","六","七","八","九","十"][num-1];
    },
  }
}
</script>

<style lang="scss">
.warn_container{
  z-index: 1;
}
.warn_block{
  background-color: #c00000;
  border-radius: 7px;
  border: none;
  color: #fff;
  font-size: $text_s;
  font-weight: bold;
  padding: 5px 30px;
}
.warn_return{
  border: 1.5px #767171 solid;
  border-radius: 7px;
  background-color: #ffffff00;
  padding: 5px 30px;
  font-size: $text_s;
  font-weight: bold;
  color: $primary;
  cursor: pointer;
  margin-top: 20px;
}
</style>