import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthHomeView from "@/views/AuthHomeView";
import getUser from "@/composables/getUser";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter(to, from, next) {
      let user = getUser();
      if(!user.value) next();
      else next("/home");
    }
  },
  {
    path: "/home",
    name: "AuthHome",
    component: AuthHomeView,
    beforeEnter(to,from,next){
      let user = getUser();
      if(user.value) next();
      else next("/")
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
