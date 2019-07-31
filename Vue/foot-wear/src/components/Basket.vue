<template>
       <div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="product-name d-flex">
							<div class="one-forth text-left px-4">
								<span>Product Details</span>
							</div>
							<div class="one-eight text-center">
								<span>Price</span>
							</div>
							<div class="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div class="one-eight text-center">
								<span>Total</span>
							</div>
							<div class="one-eight text-center px-4">
								<span>Remove</span>
							</div>
						</div>
				
          <basket-item v-for="item in itemsList"  v-bind:key="item.id"  :item="item"/>

						
					</div>
				</div>
</template>

<script>
import basketItem from './basket-item.vue'
export default {
 name: 'Basket',

  components: {
   basketItem
  
  },
	computed: {
  itemsList() {
    return this.$store.getters.BasketArr;
  },
  },
   created() {

console.log("this.B",this)
console.log("this.B",this.itemsList)
}
}

</script>

<style>

</style>
