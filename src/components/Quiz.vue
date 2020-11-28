<template>
  <div>
    <h2>Dilemma Quiz</h2>
    <p>{{problem()}}</p>
    <span id="answer" v-show="answer">
      <button @click="yes()">YES</button><button @click="no()">NO</button>
    </span>
    
    <p>Share your opinion</p>
    <div>
      <textarea name="comment" cols="30" rows="10" v-model="opinion"></textarea>
      <button id="send" @click="send(opinion)">Send</button>
    </div>
    <button id="result" @click="result()">Show results</button>
    <button id="next" @click="next()">next</button>
    <span v-if="number !== 0"><button id="prev" @click="prev()">prev</button></span>
    <div v-show="show">123</div>
    
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
      dilemmaList: [{
        Number: 0,
        comment: [],
        dilemma: "",
        no: 0,
        yes: 0
      }],
      number: 0,
      answer: true
    }
  },
  computed: {
   
  },
  async created() {
    db.collection('dilemmas')
      .orderBy('Number', 'desc')
      .onSnapshot(snapshot => {
        this.dilemmaList = snapshot.docs
          .map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }).reverse()
      })
  },
  methods: {
    yes() {
      db.collection('dilemmas')
        .doc(this.dilemmaList[this.number].id)
        .update({
          yes: firebase.firestore.FieldValue.increment(1)
        })
      this.answer = false
    },
    no() {
      db.collection('dilemmas')
        .doc(this.dilemmaList[this.number].id)
        .update({
          no: firebase.firestore.FieldValue.increment(1)
        })
      this.answer = false
    },
    send() {

    },
    result() {
      this.show = true
    },
    next() {
      this.number = this.number + 1
      this.answer = true
    },
    prev() {
      this.number = this.number - 1
    },
    problem() {
      return this.dilemmaList[this.number]["dilemma"]
    }
  }
}
</script>

<style>
/*
#send {
  position: absolute;
  left: 262px;
  
}
#yes {
  position: absolute;
  left: 100px;
  right: 100px;
}*/
#result {
  position: relative;
}
#answer {
  position: relative;
  left: 200px;
}
/*
#next {
  position: absolute;
  top: 200px;
}*/
</style>