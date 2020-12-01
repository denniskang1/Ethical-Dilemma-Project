<template>
  <div id = "menu">
    <ol>
      <li><router-link to="/Quiz">Quiz</router-link></li>
      <li><router-link to="/OfferDilemma">Offer Dilemma</router-link></li>
      <li><router-link to="/EvalDilemma">Evaluate Dilemma</router-link></li>
    </ol>
  </div>
</template>

<script>
export default {
    data(){
        return {
        }
    }
}
</script>

<style lang="css" scoped>
a{
    text-decoration: none;
    font-size: large;
    color: black;
    
}
ol{
    text-align: center;
    padding-right: 40px;
    list-style-type: none;
}
li{
    border: 2px solid gray;
    margin: 30px;
}

</style>