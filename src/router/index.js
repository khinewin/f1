import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/Welcome.vue"
import Create from "@/Create.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :"/", 
      component: Welcome,
      name: "welcome"
    },
    {
      path: '/products/create',
      component: Create,
      name: "createProduct"
    }
  ],
})

export default router
