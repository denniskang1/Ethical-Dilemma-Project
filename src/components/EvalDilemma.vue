<template>
  <div>
    <h2>Evaluate Dilemma</h2>
    <p>In this section, you can evaluate whether dilemma is intersting enough. 
      If dilemma get enough number of votes and likes, it will be enrolled in a Quiz section</p>
      <p>{{problem()}}</p>
      <button @click="yes()">UPVOTE</button><button @click="no()">DOWNVOTE</button>
  </div>
</template>

<script>
import db from './firebaseinit'
import firebase from 'firebase/app'
export default {
  data() {
    return {
      opinion: "",
      show: false,
      candList: [{
        total:0,
        dilemma: "",
        upvote: 0
      }],
      number: 0,
      answer: true,
    }
  },
  async created() {
    db.collection('candidates')
      .onSnapshot(snapshot => {
        this.candList = snapshot.docs
          .map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }).reverse()
      })
  },
  methods: {
    problem() {
      return this.candList[this.number]["dilemma"]
    },
    yes() {
      db.collection('candidates')
        .doc(this.candList[this.number].id)
        .update({
          upvote: firebase.firestore.FieldValue.increment(1),
          total: firebase.firestore.FieldValue.increment(1)
        })
      if (this.candList[this.number]["total"]==99) {
        if (this.candList[this.number]["upvote"]>=49) {
          db.collection('dilemmas').add({
            dilemma: this.candList[this.number]["dilemma"],
            yes: 0,
            no: 0,
            comments: []
          }
          )
        }
        db.collection('candidates').doc(this.candList[this.number].id).delete()
      }
      this.number = this.number + 1
    },
    no() {
      db.collection('candidates')
        .doc(this.candList[this.number].id)
        .update({
          total: firebase.firestore.FieldValue.increment(1)
        })
      if (this.candList[this.number]["total"]==99) {
        if (this.candList[this.number]["upvote"]>=50) {
          db.collection('dilemmas').add({
            dilemma: this.candList[this.number]["dilemma"],
            yes: 0,
            no: 0,
            comments: []
          }
          )
        }
        db.collection('candidates').doc(this.candList[this.number].id).delete()
      }
      this.number = this.number + 1
    }
  }
}
</script>

<style>

</style>