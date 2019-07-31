<template>
    <div>
        <div class="product-entry border">
                <a href="#" class="prod-img">
                    <img :src="item.photo" class="img-fluid" alt="Free html5 bootstrap 4 template">
                </a>
                <div class="desc">
                    <h2><a href="#">{{item.name}}</a></h2>
                    <span class="price">{{item.price}}</span>
                </div>
                    <button v-if="!show" type="button" v-on:click="clickBuyBtn" class="btn btn-info">Buy</button>
                    <button v-else type="button" v-on:click="clicktoCartBtn" class="btn btn-info">Go to basket</button>
                </div>
        </div>
</template>

<script>

export default {
 name: 'card-item',
  props: {
    item: Object,
    cb: Function
  },
  data() {
      return {
          show: false
      }
  },
  
   methods: {
    clickBuyBtn: function (event) {
       
        this.show =true;
        this.$store.dispatch('SAVE_TO_BASKET', this.item);
        // this.item.name = !this.item.name;
    },
    clicktoCartBtn: function (event) {

    }
}
}
</script>

<style>

</style>
