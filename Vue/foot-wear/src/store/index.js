import Vue from 'vue';
import Vuex from 'vuex';
import { platform } from 'os';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [
        
        ],
    basketArr: []
  },
  getters: {
    Items: state => {
      return state.items;
    },
    BasketArr: state => {
        return state.basketArr;
      },
  },
  mutations: {
    ADD_TO_BASKET: (state, payload) => {
        state.basketArr.push(payload);
      },
      DELETE_FROM_BASKET: (state, payload) => {
        state.basketArr = state.basketArr.filter((e)=> { return e.key != payload.key} );
      },  
      SET_ITEMS: (state, payload) => {
        state.items = payload;
      },
  },
  actions: {
    DELETE_FROM_BASKET: async (context, payload) => {
        context.commit('DELETE_FROM_BASKET', payload);
      },
  
      SAVE_TO_BASKET: async (context, payload) => {
        context.commit('ADD_TO_BASKET', payload);
      },

      SET_ITEMS: async (context, payload) => {
        context.commit('SET_ITEMS', payload);
      },
  },
});