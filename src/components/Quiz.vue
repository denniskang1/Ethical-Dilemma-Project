<template>
  <div id="top">
    <h2>Dilemma Quiz</h2>
    <div class="lbz-card" id="basic">
    <p id="divider">{{problem()}}</p>
    </div>
    <p></p>
    <span id="example" v-if="stage1">
    <span id="answer" v-show="answer" >
      <lbz-button id="generic" @click="yes()">YES</lbz-button><lbz-button id="generic" @click="no()">NO</lbz-button>
    </span>
    </span>
    <span id="example2" v-if="stage2">
    <p>Share your opinion</p>
    <div>
      <textarea name="comment" cols="30" rows="10" v-model="opinion"></textarea>
      <lbz-button id="send" @click="send(opinion)">Send</lbz-button>
    </div>
    
    <lbz-button id="result" @click="result()">next</lbz-button>
    
    </span>
    <span id="example3" v-if="stage3">
    
{{stat()}}
<span id="example4" v-if="current">
      <lbz-button id="next" @click="next()">next</lbz-button>
      </span>
      <span id="example5" v-if="final">
      <li><router-link to="/Lobby">Finish</router-link></li>
      </span>
      <pre>
{{comment()}}
</pre>
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
      dilemmaList: [{
        comments: [],
        dilemma: "",
        no: 0,
        yes: 0
      }],
      number: 0,
      answer: true,
      stage1: true,
      stage2: false,
      stage3: false,
      final: false,
      current: true
    }
  },
  computed: {
   
  },
  async created() {
    db.collection('dilemmas')
      .onSnapshot(snapshot => {
        this.dilemmaList = snapshot.docs
          .map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }).reverse().sort(() => Math.random() - 0.5)
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
      this.stage1 = false
      this.stage2=true
    },
    no() {
      db.collection('dilemmas')
        .doc(this.dilemmaList[this.number].id)
        .update({
          no: firebase.firestore.FieldValue.increment(1)
        })
      this.answer = false
      this.stage1 = false
      this.stage2=true
    },
    send(form) {
      var sArray=this.dilemmaList[this.number]["comments"]
      sArray.push(form)
       db.collection('dilemmas')
        .doc(this.dilemmaList[this.number].id).update({
          comments: sArray
        })
      
    },
    result() {
      this.show = true
      this.stage2=false
      this.stage3=true
      
    },
    stat() {
      return Math.round(this.dilemmaList[this.number]["yes"]/(this.dilemmaList[this.number]["yes"]+this.dilemmaList[this.number]["no"])*100)+"% of people agree with you."
    },
    comment() {
      var string=""
      this.dilemmaList[this.number]["comments"].forEach(k=>{string=string+k+'\n'})
      return string
    },
    next() {
      this.number = this.number + 1
      this.answer = true
      this.stage1=true
      this.stage3=false
      if (this.number==9) {
        this.current=false
        this.final=true
      }
    },
    problem() {
      return this.dilemmaList[this.number]["dilemma"]
    }
  }
}
</script>

<style lang="css" scoped>
/*

#yes {
  position: absolute;
  left: 100px;
  right: 100px;
}*/

#result {
  position: relative;
  background: #D0d0d0;
  color: #000;
}
#answer {
  position: relative;
  left: 200px;
}
#generic {
  background: #D0d0d0;
  color: #000;
}
#send {
  background: #D0d0d0;
  color: #000;
}
#next {
  background: #D0d0d0;
  color: #000;
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
/*
#next {
  position: absolute;
  top: 200px;
}*/
</style>