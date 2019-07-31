<template>
    
</template>

<script>
import axios from 'axios'

export default {
    _baseUrl:"http://localhost:3500",     
    getDbData(url) {
       return  axios.get(this._baseUrl + url)
        },
    getItems(){
        return this.getDbData("/all_items/")
    }
}
</script>

<style>

</style>
