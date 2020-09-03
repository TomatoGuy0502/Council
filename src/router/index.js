import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:'成大學代會'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'登入系統'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      title:'註冊帳號'
    }
  },
  {
    path: '/conference',
    name: 'conference',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ConferenceChoose" */ '../views/conference/ConferenceChoose.vue'),
    meta:{
      title:'加入會議'
    }
  },
  {
    path: '/conference/:delibrationID',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "ConferenceSchedule" */ '../views/conference/ConferenceSchedule.vue'),
  },
  {
    path: '/editConference',
    name: 'editConference',
    component: () => import(/* webpackChunkName: "EditConferenceChoose" */ '../views/edit/EditConferenceChoose.vue'),
    meta:{
      title:'編輯會議',
      requiresAuth: true
    }
  },
  {
    path: '/editConference/:delibrationID',
    name: 'editSchedule',
    component: () => import(/* webpackChunkName: "EditConferenceSchedule" */ '../views/edit/EditConferenceSchedule.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import(/* webpackChunkName: "VoteDetailWindow" */ '../components/VoteDetailWindow.vue'),
  },
  {
    path: '/conference/:delibrationID/proposal/:proposalID',
    name: 'detail',
    component: () => import(/* webpackChunkName: "ConferenceDetail" */ '../views/conference/ConferenceDetail.vue'),
  }
]

const router = new VueRouter({
  routes,
  store,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    } else {
      return { x:0 ,y:0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if(!store.state.userInfo.isLogin) {
    switch (to.path) {
      case '/login':
        next()
        break
      case '/register':
        next()
        break
      default:
        next({ path: '/login' })
    }
  } else if(to.path === '/login') {
    next({ path: '/', replace: true})
  } else {
    if(to.matched.some(record => record.meta.requiresAuth) && store.state.userInfo.position!=='leader') {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

export default router
