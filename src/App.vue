<template>
  <div>
    <Appheader/>
    
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
import Appheader from './components/Appheader.vue'
//import db from './components/firebaseinit'

export default {
  /*computed: {
    user() {
      return this.$route
    }
  },*/
  components: {
    Appheader
  },
  methods: {
    /*
    click() {
      db.collection('candidates').add({
        dilemma: "hi",
        downvote: 10,
        upvote: 20
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }*/
  }
  
}
</script>


<style>

</style>