import InvoiceList from '../views/InvoiceListPage.vue'

const routes = [
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

export default routes
