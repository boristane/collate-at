import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import Map from './components/Map.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Home from './components/Home.vue';
import Emergency from './components/Emergency.vue';
import Vote from './components/Vote.vue';
import Report from './components/Report.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'landing',
        component: LandingPage,
      },
      {
        path: '/map',
        name: 'map',
        component: Map,
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/emergency',
        name: 'emergency',
        component: Emergency,
      },
      {
        path: '/vote',
        name: 'vote',
        component: Vote,
      },
      {
        path: '/report',
        name: 'report',
        component: Report,
      },
    ]
});