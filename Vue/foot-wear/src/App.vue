<template>
  <div id="app">

    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/basket'>basket</router-link>
      
    </nav>
    <router-view />
    <!-- <cards :cb="cb" :items="items"/> -->
  </div>
</template>

<script>
  var that = this;
import cards from './components/cards.vue'
import service from './services/db-service.vue'
export default {
 
  name: 'app',
  components: {
   
    cards
  },

   props: {
     items: [
      { "name": "Women's Boots Shoes Maca", "price": "139.00", "photo": "./images/item-1.jpg", "key": "1" },
      { "name": "Boots Shoes ", "price": "2239.00", "photo": "./images/item-2.jpg", "key": "2" },
      { "name": " Maca", "price": "549.00", "photo": "./images/item-3.jpg", "key": "3" }
      ],
      basketArr: []
    
  },
  methods: {
              cb(item) {
               console.log("this.basketArr",item)
                  console.log("this.basketArr",this)
                if (this.basketArr && this.basketArr.length > 0) {
                  if (this.basketArr.findIndex((obj) => { return obj.key === item.key }) < 0) {
                  
                    this.basketArr.push(item)
                  }
                }
                else {
                  if(!this.basketArr) {
                    this.basketArr=[];
                  }
          
                  this.basketArr.push(item)
                }

                console.log("this.basketArr",this.basketArr)
              }
  },

  created() {
    service.getItems().then(resp => {
          const items = resp.data;
          this.$store.dispatch('SET_ITEMS', items);
    })
   
  }
  
   
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
