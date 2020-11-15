<template>
  <div id="app">
    <div class="loding-mask" v-if="isLoding">
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      Loding
    </div>
    <Navbar/>
    <div id="main" class="container">
      <router-view/>
    </div>
    <ErrorWindow v-if="showError"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar.vue'
import Footer from '@/layout/components/Footer.vue'
import ErrorWindow from '@/components/ErrorWindow.vue'
// import VoteDetailWindow from '@/components/VoteDetailWindow.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    ErrorWindow
  },
  data () {
    return {
    }
  },
  created () {
    this.setDelibrations()
  },
  computed: {
    ...mapState({
      showError: state => state.error.showError,
      isLoding: 'isLoding'
    })
  },
  methods: {
    ...mapActions({
      setDelibrations: 'delibration/setDelibrations'
    })
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

.loding-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  background-color: rgba(128, 128, 128, .7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

#main {
  margin-top: 84px;
  margin-bottom: 48px;
  min-height: calc(100vh - 132px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 510px) {
  #main{
    max-width: 510px;
  }
}

.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
