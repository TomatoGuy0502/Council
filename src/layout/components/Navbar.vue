<template>
  <div class="navbar">
    <router-link to="/" tag="div" class="navbar__icon">
      <img src="@/assets/brand-icon.svg">
    </router-link>
    <h1 class="navbar__title" v-if="!$route.params.delibrationID">{{$route.meta.title}}</h1>
    <div class="navbar__title" v-else>
      <p class="session">{{delibrationInfo.semester}}學年度第{{delibrationInfo.period}}會期</p>
      <h2 class="name">{{delibrationInfo.name}}</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState([
      'delibrationInfo'
    ])
  }
}
</script>

<style scoped lang="scss">
.navbar{
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: $secondary;
  padding: 12px;
  display: flex;
  align-items: center;
  &__icon{
    width:60px;
    height:60px;
    background-color: $primary;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 70%;
    }
  }
  &__title{
    margin-left: 18px;
    .session{
      margin: 0;
      text-align: left;
      height: 22px;
    }
    .name{
      height: 38px;
    }
  }
}

</style>
