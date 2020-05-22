import Vue from 'vue'
import VueRouter from 'vue-router'
import authGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    beforeEnter: authGuard,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
      },
      {
        path: '/incomes',
        name: 'Incomes',
        component: () => import('../views/Incomes.vue'),
        props: true,
      },
      {
        path: '/expenses',
        name: 'Expenses',
        component: () => import('../views/Expenses.vue'),
        props: true,
      },
      {
        path: '/expense_types',
        name: 'ExpenseTypes',
        component: () => import('../views/ExpenseTypes.vue'),
        props: true,
      },
      {
        path: '/expensesSummary',
        name: 'ExpensesSummary',
        component: () => import('../views/ExpensesSummary.vue')
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },      
    ]
  }, 
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
