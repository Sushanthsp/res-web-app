<template>
   
  <div class="nav" v-show="mobileNav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add restaurant</router-link>
    <router-link to="/update/:id">Update restaurant</router-link>
    <a @click="logout" href="#">logout</a>
  </div>
   
</template>

<script>
export default {
  name: "HeaderC",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },

  },
  data(){
    return{
      mobileNav:true,
    }
  }
};
</script>

<style scoped>
.nav {
    display: flex;
    background-color: #151D26;
    justify-content: center;
    height: 80px;
 }

.nav a {
     background-color: #0C1319;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    width: 70px;
    height: 30px;
    padding: 10px;
    font-family: inherit;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    margin-top: 10px;
}

.nav a:hover {
  background-color: #151D26;
  color: white;
}
</style>
