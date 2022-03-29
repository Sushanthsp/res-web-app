<template>
  <h1>About Page</h1>
  <form  class="add">
    <input type="text" name="name"  v-model="restaurants.name" placeholder="enter name" >
     <input type="text" name="address" v-model="restaurants.address" placeholder="enter address" >
      <input type="text" name="contact"  v-model="restaurants.contact" placeholder="enter contact" >
  <button type="button" @click="addrestaurants">add</button>
  </form>
</template>

<script>
 import axios from "axios";


export default {
    name : "AddRes",
    data(){
      return{
        restaurants:{
          name:'',
          address : '',
          contact : ''
        }
      }},
      methods : {
       async addrestaurants()
        {
          const result =await axios.post("http://localhost:3000/restaurants",{
            name : this.restaurants.name,
            address : this.restaurants.address,
            contact : this.restaurants.contact
          })
          if(result.status === 201)
          {
            this.$router.push({name : "HomeC"})
          }
        }
      }
    }

</script>

 