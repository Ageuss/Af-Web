import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home.vue'
import ListarUser from '../views/ListarUser/ListarUser.vue'
import AdicionarProduto from '../views/AdicionarProduto/AdicionarProduto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListarUser',
    name: 'ListarUser',
    component: ListarUser
  },
  {
    path: '/AdicionarProduto',
    name: 'AdicionarProduto',
    component: AdicionarProduto
  },
  {
    path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
