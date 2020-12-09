<template>
  <div id="top">
    <h2>Evaluate Dilemma</h2>
    <p>In this section, you can evaluate whether dilemma is intersting enough. 
      If dilemma get enough number of votes and likes, it will be enrolled in a Quiz section</p>
<<<<<<< Updated upstream
=======
      <div class="lbz-card" id="basic">
    <p id="divider">{{problem()}}</p>
    </div>
      <p></p>
      <span id="answer" >
      <lbz-button id="generic" @click="yes()">YES</lbz-button><lbz-button id="generic" @click="no()">NO</lbz-button>
      </span>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
=======
import db from './firebaseinit'
import firebase from 'firebase/app'
import '@lbzui/vue/lib/lbzui.css'
import LBZUI from '@lbzui/vue'
import Vue from 'vue'

Vue.use(LBZUI, {
  dense: false,
  ripple: true
})
>>>>>>> Stashed changes
export default {

}
</script>

<style lang="css" scoped>
#generic {
  background: #D0d0d0;
  color: #000;
}
#answer {
  position: relative;
  left: 200px;
}
#basic {
  left: 200px;
  
}
#divider{
  margin:20px;
}
#top {
  margin:20px
}
</style>