<template>
  <div>
    <h2>Offer Dilemma</h2>
    <p>In this section, you can suggest your dilemma, if it is determined to be interesting enough, 
      your question will be enrolled in a Quiz session.
    </p>
    <div>
      <h3>Suggest Dilemma</h3>
      <textarea name="offer" cols="30" rows="10" v-model="offer"></textarea>
      <button @click="submit(offer)">submit</button>
    </div>
  </div>
</template>

<script>
import db from './firebaseinit'
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
        total: 0,
        upvote: 0
      })
      alert("your offer is successfully submitted")
      this.offer = ""
    }
  }
}
</script>

<style>

</style>