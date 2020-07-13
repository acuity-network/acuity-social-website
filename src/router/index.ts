import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Features from '../views/Features.vue'
import TechStack from '../views/TechStack.vue'
//import Comparison from '../views/Comparison.vue'
import Roadmap from '../views/Roadmap.vue'
import Support from '../views/Support.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Features,
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
  },
  {
    path: '/tech-stack',
    name: 'tech-stack',
    component: TechStack,
  },
  {
    path: '/comparison',
    name: 'comparison',
//    component: Comparison,
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: Roadmap,
  },
  {
    path: '/support',
    name: 'support',
    component: Support,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
