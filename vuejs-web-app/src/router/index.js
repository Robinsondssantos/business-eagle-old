import Vue from 'vue'
import Router from 'vue-router'
import authGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
      beforeEnter: authGuard,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
        },
        {
          path: 'incomes',
          name: 'Incomes',
          component: () => import('../views/Incomes.vue'),
          props: true,
        },
        {
          path: 'create_income',
          name: 'CreateIncome',
          component: () => import('../views/CreateIncome.vue'),
          props: true,
        },
        {
          path: 'income_types',
          name: 'IncomeTypes',
          component: () => import('../views/IncomeTypes.vue'),
          props: true,
        },
        {
          path: 'create_income_type',
          name: 'CreateIncomeType',
          component: () => import('../views/CreateIncomeType.vue'),
        },        
        {
          path: 'expenses',
          name: 'Expenses',
          component: () => import('../views/Expenses.vue'),
          props: true,
        },
        {
          path: 'create_expense',
          name: 'CreateExpense',
          component: () => import('../views/CreateExpense.vue'),
          props: true,
        },
        {
          path: 'expense_types',
          name: 'ExpenseTypes',
          component: () => import('../views/ExpenseTypes.vue'),
          props: true,
        },
        {
          path: 'create_expense_type',
          name: 'CreateExpenseType',
          component: () => import('../views/CreateExpenseType.vue'),
          props: true,
        },        
        {
          path: 'expensesSummary',
          name: 'ExpensesSummary',
          component: () => import('../views/ExpensesSummary.vue')
        },
        {
          path: 'providers',
          name: 'Providers',
          component: () => import('../views/Providers.vue')
        },
        {
          path: 'create_provider',
          name: 'CreateProvider',
          component: () => import('../views/CreateProvider.vue'),
          props: true,
        },        
        {
          path: 'customers',
          name: 'Customers',
          component: () => import('../views/Customers.vue')
        },
        {
          path: 'create_customer',
          name: 'CreateCustomer',
          component: () => import('../views/CreateCustomer.vue'),
          props: true,
        },                  
        {
          path: 'about',
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
  ],
  mode: 'history',
})

