import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TeamMembers from './views/TeamMembers.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/team-members',
      name: 'team-members',
      component: TeamMembers,
    },
  ],
});
