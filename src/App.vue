<template>
  <div id="app">
    <Navbar :semester="semester" :period="period" :name="name"/>
    <div id="main" class="container">
      <router-view 
        @update-title="updateTitle1" 
        @handle-error-window="handleErrorWindow"
      />
    </div>
    <ErrorWindow 
      v-if="errorInfo.showError" 
      :errorType="errorInfo.errorType" 
      @close-window="errorInfo.showError=false"
    />
    <!-- <VoteWindow/> -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar.vue'
import Footer from '@/layout/components/Footer.vue'
import ErrorWindow from "@/components/ErrorWindow.vue";
// import VoteWindow from '@/components/VoteWindow.vue'
// import VoteDetailWindow from '@/components/VoteDetailWindow.vue'
// import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    ErrorWindow,
    // VoteWindow,
  },
  data(){
    return {
      semester: 0,
      period: 0,
      name: '成大學代會',
      errorInfo: {
        showError: false,
        errorType: 'login'
      }
    }
  },
  methods: {
    updateTitle1(semester, period, name) {
      // console.log(semester, period, name)
      this.semester = semester
      this.period = period
      this.name = name
    },
    handleErrorWindow(method, type) {
      if(method === "open") {
        this.errorInfo.showError = true
        this.errorInfo.errorType = type
      } else {
        this.errorInfo.showError = false
      }
    }
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
// @media (min-width: 989px) {
//   #main{
//     min-width: 880px;
//   }
// }

.container{
  width: 100%; 
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
