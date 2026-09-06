import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DetailPage from '../views/DetailPage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
