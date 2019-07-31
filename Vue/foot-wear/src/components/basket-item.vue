<template>
  <div class="product-cart d-flex">
        <div class="one-forth">
            <div class="product-img" v-bind:style="{ backgroundImage: 'url(' + photo + ')' }" >
          
            </div>
            <div class="display-tc">
                <h3>{{name}}</h3>
            </div>
        </div>
        <div class="one-eight text-center">
            <div class="display-tc">
                <span class="price">{{price}}</span>
            </div>
        </div>
        <div class="one-eight text-center">
            <div class="display-tc">
            <input type="text" class="form-control input-number text-center" v-on:input="changeValue" v-model=value onChange={this.handleChange} />
            </div>
        </div>
        <div class="one-eight text-center">
            <div class="display-tc">
                <span class="price"> {{total}}</span>
            </div>
        </div>
        <div class="one-eight text-center">
            <div class="display-tc">
                <a href="#" v-on:click.prevent=removeFromBasket class="closed"></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
 name: 'basket-item',
     props: {
         item: Object,
     },
  components: {
     
  
  },
  methods: {
      changeValue() {
          this.total = this.value * this.price;
          this.$forceUpdate();
      },
      removeFromBasket(event) {
          event.preventDefault();
          console.log("preventDefault",event);
           this.$store.dispatch('DELETE_FROM_BASKET', this.item);
      }
  },
   created() {

       console.log("bbbbbbbbbb",this)
       const {name,price,photo} = this.item;
       this.name = name;
        this.price = price;
         this.photo = photo;
         this.value = 1;
         this.total =  this.price * this.value;
          console.log("this333",name,price,photo)
    }
}
</script>

<style>

</style>
