<template>
  <h1>About Page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      v-model="restaurants.name"
      placeholder="enter name"
    />
    <input
      type="text"
      name="address"
      v-model="restaurants.address"
      placeholder="enter address"
    />
    <input
      type="text"
      name="contact"
      v-model="restaurants.contact"
      placeholder="enter contact"
    />
    <button @click="update"  type="button">update</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateRes",
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = axios.get(
      "http://localhost:3000/restaurants/"+this.$route.params.id
    );
    this.restaurants = result.data;
  },
  methods: {
    async update() {
      const result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
         name : this.restaurants.name,
            address : this.restaurants.address,
            contact : this.restaurants.contact
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomeC" });
      }
    },
  },
};
</script>
