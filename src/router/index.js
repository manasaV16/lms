import { createRouter, createWebHistory } from 'vue-router'
import HomePageComponent from '../components/HomePageComponent.vue'
import 'bootstrap/dist/css/bootstrap.css';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
