<template>
  <div>
    <h2>Sign up</h2>
    <div class="register">
      <input type="text" placeholder="Enter Name" v-model="name" />
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />

      <div class="button">
<button @click="sign">Sign Up</button>
      
       <button> <router-link class="router" to="/login">Login</router-link></button>
      </div>
      
       
    </div>
  </div>

 
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async sign() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("Sign up successful");
        localStorage.setItem("user-info",JSON.stringify(result.data) )
        this.$router.push({ name: "HomeC" });
      }
    },
  },
  mounted(){
      let user = localStorage.getItem("user-info");
      if(!user)
      {
          this.$router.push({ name: "SignUp" });
      }
  }
};
</script>

<style scoped>
div h2{
  color: white;
}

.button
{
      display: flex;
    justify-content: center;
}

.button :hover {
  background-color: #151D26;
  color: white;
}


button {
    width: 120px;
    height: 40px;
    border: 2px solid #eff6ff;
    cursor: pointer;
    margin: 5px;
    background: #0C1319;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 17px;
}


.router{
  color: white;
  text-decoration: none;
}
</style>
