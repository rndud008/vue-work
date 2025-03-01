import NewsView from '../views/NewsView.vue' 
import JobsView from '../views/JobsView.vue' 
import AskView from '../views/AskView.vue' 
import ItemView from '../views/ItemView.vue' 
import UserView from '../views/UserView.vue' 
import { createRouter, createWebHistory } from "vue-router"
import { store } from '@/store'
// import createListView from '@/views/CreateListView'



const routes = [
  {
    path:'/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter: (to, from, next) =>{
      store.dispatch("START_SPINNER", true);
      store
      .dispatch("FETCH_LIST", to.name)
      .then(() => {
        // store.dispatch("END_SPINNER", false)
        next()
      })
      .catch((error) => console.log(error));
    },
    // component: createListView('NewsView')
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter:(to, from, next) =>{
      store.dispatch("START_SPINNER", true);
      store
      .dispatch("FETCH_LIST", to.name)
      .then(() => {
        // store.dispatch("END_SPINNER", false)
        next()
      })
      .catch((error) => console.log(error));
    },
    // component: createListView('AskView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter: (to, from, next) =>{
      store.dispatch("START_SPINNER", true);
      store
      .dispatch("FETCH_LIST", to.name)
      .then(() => {
        // store.dispatch("END_SPINNER", false)
        next()
      })
      .catch((error) => console.log(error));
    },
    // component: createListView('JobsView')
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  },
]

const router = createRouter({
  history: createWebHistory(), // url 의 .../#/ 이렇게 시작되는것을 지워줌
  routes,
})

export default router