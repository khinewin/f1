import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/Welcome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :"/", 
      component: Welcome,
      name: "welcome"
    }
  ],
})

export default router
