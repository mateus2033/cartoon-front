import { createRouter, createWebHistory } from "vue-router";

import Home from '../view/index/Home.vue';
import About from '../view/index/About.vue';
import Contact from '../view/index/Contact.vue';
import Register from '../view/session/Register.vue';
import Login from '../view/session/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/contact', component: Contact},
  { path: '/register', component: Register},
  { path: '/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  
export default router;