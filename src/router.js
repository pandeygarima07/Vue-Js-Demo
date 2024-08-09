import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import DemoBasic from './components/DemoBasic.vue'
import RegistrationForm from './components/RegistrationForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo-basic',
      name: 'DemoBasic',
      component: DemoBasic
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationForm
    }
  ]
})
