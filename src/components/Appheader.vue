<template>
  
  <div>
    <router-link to="/Lobby"><h1>Ethical-Dilemma</h1></router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
a{
  color: black;
  text-decoration: none;
  text-align: center;
}
h1{
  background: linear-gradient(to right, yellow, green);
}
</style>