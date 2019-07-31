import Basket from './components/Basket.vue';
import cards from './components/cards.vue';
import Main from './components/Main.vue';
const routes = [
    { path: '/', component: cards },
    { path: '/basket', component: Basket },

];

export default routes;