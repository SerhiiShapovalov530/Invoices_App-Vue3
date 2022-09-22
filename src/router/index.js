import { createRouter, createWebHistory } from 'vue-router'
import InvoiceList from '../views/InvoiceListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'invoice-list',
      component: InvoiceList
    },
    {
      path: '/invoices/:id',
      name: 'invoice-detail',
      component: () => import('@/views/InvoiceViewPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
