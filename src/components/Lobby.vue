<template>
  <div id="menu">
    <radial-menu
      style="margin: auto; margin-top: 300px; background-color: white"
      :itemSize="50"
      :radius="120"
      :angle-restriction="180">
        <radial-menu-item 
          v-for="(item, index) in items" 
          :key="index" 
          style="background-color: white" 
          @click="() => handleClick(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'menu',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['Quiz', 'Offer Dilemma', 'Evaluate Dilemma'],
    }
  },
  methods: {
    handleClick (item) {
      if (item == 'Quiz'){
        this.$router.push('/Quiz')
      }
      else if(item == 'Offer Dilemma'){
        this.$router.push('/OfferDilemma')
      }
      else{
        this.$router.push('/EvalDilemma')
      }
    }
  }
}
</script>