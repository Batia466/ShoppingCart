import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
import Basket from './components/Basket.vue';
import cards from './components/cards.vue';
Vue.use(VueRouter)
import {store} from './store';

console.log("App",App)
const router = new VueRouter({
  routes: [
    { path: '/', component: cards, props: { }},

    {
      path: '/basket',
      component: Basket, 
      props: { }
     
    }
  ]
})


// const router = new VueRouter({routes});
new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
