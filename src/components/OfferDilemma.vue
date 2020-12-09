<template>
  <div id="top">
    <h2>Offer Dilemma</h2>
    <p>In this section, you can suggest your dilemma, if it is determined to be interesting enough, 
      your question will be enrolled in a Quiz session.
    </p>
    <div>
      <h3>Suggest Dilemma</h3>
      <textarea name="offer" cols="30" rows="10" v-model="offer"></textarea>
      <p></p>
      <lbz-button id="next" @click="submit(offer)">submit</lbz-button>
    </div>
  </div>
</template>

<script>
import db from './firebaseinit'
import '@lbzui/vue/lib/lbzui.css'
import LBZUI from '@lbzui/vue'
import Vue from 'vue'

Vue.use(LBZUI, {
  dense: false,
  ripple: true
})
export default {
  data() {
    return {
      offer: ""
    }
  },
  methods: {
    submit(offer) {
      db.collection('candidates').add({
        dilemma: offer,
        downvote: 0,
        upvote: 0
      })
      this.$alert("Successfully submitted",'','success');
      this.offer = ""
    }
  }
}
</script>

<style lang="css" scoped>
#next {
  background: #D0d0d0;
  color: #000;
}
#top {
  margin:20px
}
</style>