<template>
  <div>
  <div id="hello">
    <router-link to="/Lobby"><h1>Ethical-Dilemma</h1></router-link>
    <router-view></router-view>
  </div>
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
#hello{
  background:#f5f5f5;
  width: 100%;
  height: 100vh;
  padding-top: 1px;
}
</style>