import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/About.vue'
import Game from '../views/Game.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
