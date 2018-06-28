<template>
  <div id="app">
    <app-header></app-header>
    <navigation></navigation>
    <router-view></router-view>
  </div>
  
</template>

<script>
import welcome from './components/views/welcome.vue'
import navigation from './components/navigation.vue'
import appHeader from './components/header.vue'
import createWorkout from './components/views/createWorkout.vue'
import selectWorkout from './components/views/selectWorkout.vue'
import doWorkout from './components/views/doWorkout.vue'




export default {
  name: 'app',
  components: {
    welcome,
    navigation,
    appHeader,
    createWorkout,
    selectWorkout,
    doWorkout
  },
    data(){
    return{
      plan:[]

    }
  },  
}
</script>

<style  lang='scss'>

#app{
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  button{
    &:hover{
      background-color: darken($color: #333545, $amount:8);
      cursor: pointer;
    }
  }

}

</style>
