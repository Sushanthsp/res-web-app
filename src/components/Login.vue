<template>
  <div>
    <h2>Login</h2>
    <div class="login">
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
     <div class="button">
 <button @click="login">login</button>
      <button>
        <router-link class="router" to="/signup">Sign Up</router-link>
      </button>
     </div>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomeC" });
      }

      console.log(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
div h2{
  color: white;
}

button {
    width: 120px;
    height: 40px;
    border: 2px solid #eff6ff;
    cursor: pointer;
    margin: 5px;
    background: #151D26;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 17px;
}

.router{
  color: white;
  text-decoration: none;
}

<style scoped></style>
