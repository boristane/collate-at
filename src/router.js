import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import Map from './components/Map.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
          path: '/',
          name: 'home',
          component: HomePage,
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
    ]
});