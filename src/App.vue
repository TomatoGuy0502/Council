<template>
  <div id="app">
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
      showError: state => state.error.showError
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
