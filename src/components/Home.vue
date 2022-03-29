<template>
  <div>
    <h1>Hello {{ name }}</h1>
  </div>

  <table  >
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>update</td>
      <td>Delete</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><button><router-link class="button" :to="'/update/'+item.id">update</router-link></button></td>
      <td><button @click="delete(item.id)">delete</button></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeC",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {
    async delete(id) {
      let result = await axios.delete("http://localhost:3000/restaurants/" + id);
      if (result.status === 200) {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        if (!user) {
          this.$router.push({ name: "SignUp" });
        }

        let result = await axios.get("http://localhost:3000/restaurants");
        this.restaurants = result.data;
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;
  },
};
</script>

<style scoped>
 
td {
  width: 160px;
  height: 40px;
  border:  2px solid #787879;
}

button, .button{
  text-decoration: none;
  background: #151D26;
    border-radius: 5px;
    color: white;
    font-weight: 300;
    font-size: 15px;
    padding: 5px;
}

table{
  margin: auto;
}
</style>
