import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatentWindow from '@/components/PatentWindow'
import Parent from '@/components/Parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/content-patent',
      name: 'PatentWindow',
      component: PatentWindow
    },
    {
      path: '/test-parent',
      name: 'ParentWindow',
      component: Parent
    }
  ]
})
