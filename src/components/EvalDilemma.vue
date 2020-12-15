<template>
  <div id="top">
    <h2>Evaluate Dilemma</h2>
    <p>In this section, you can evaluate whether dilemma is intersting enough. 
      If dilemma get enough number of votes and likes, it will be enrolled in a Quiz section</p>
      <div class="lbz-card" id="basic">
    <p id="divider">{{problem()}}</p>
    </div>
      <p></p>
      <span id="answer" >
      <lbz-button id="generic" @click="yes()">AGREE</lbz-button><lbz-button id="generic" @click="no()">DISAGREE</lbz-button>
      </span>
  </div>
</template>

<script>
import db from './firebaseinit'
import firebase from 'firebase/app'
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