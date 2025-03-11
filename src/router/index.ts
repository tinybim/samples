import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loadscene',
      name: 'loadscene',
      component: ()=>import(`../views/LoadApp.vue`),
    },
    {
      path: '/loaddwg',
      name: 'loaddwg',
      component: ()=>import(`../views/LoadDwg.vue`),
    },
    {
      path: '/loadmulti',
      name: 'loadmulti',
      component: ()=>import(`../views/LoadMulti.vue`),
    },
    {
      path: '/label',
      name: 'label',
      component: ()=>import(`../views/AddLabel.vue`),
    },
    {
      path: '/section',
      name: 'section',
      component: ()=>import(`../views/Section.vue`),
    },
    {
      path: '/flow',
      name: 'flow',
      component: ()=>import(`../views/Flow.vue`),
    },
    {
      path: '/select',
      name: 'select',
      component: ()=>import(`../views/Selection.vue`),
    }
  ],
})

export default router
