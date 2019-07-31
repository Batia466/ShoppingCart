<template>
    <div class="row row-pb-md">
          <card-item  v-for="item in itemsList" :cb="cb"   v-bind:key="item.id"  class="col-lg-3 mb-4 text-center" :item="item"/>
    </div>
</template>

<script>
import cardItem from './card-item.vue'
export default {
 name: 'cards',
  props: {
    items: Array,
    cb: Function
  },
  components: {
    cardItem
  
  },
  computed: {
  itemsList() {
    return this.$store.getters.Items;
  },
  },
  methods: {
      addToBasket(item) {
          console.log("item",item)
      }
  },
   created() {
          console.log("this333",this)
        },
}
</script>

<style>

</style>
