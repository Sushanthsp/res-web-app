<template>
<HeaderComponent/>
  <router-view />
</template>

<script>
  import HeaderComponent from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent
   }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
 }

 .logo{
  width: 70px;
  height: 70px;
  display: flex;
  align-items:  start;
 }

 .register input, .login input, .add input{
  width: 300px;
    height: 40px;
    margin: 0 auto 20px auto;
    border: 2px solid #151D26;
    display: block;
    padding-left: 20px;
    font-size: 20px;
    background-color: #181A1B;
    color: white;
}
  
.add button {
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
 

body{
  padding: 0;
  margin: 0;
}
</style>
