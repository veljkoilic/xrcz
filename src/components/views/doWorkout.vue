<template>
  <div class="doWorkout">
    <ul >
        <li v-bind:key="exercise.name
        " v-for="exercise in workoutPlan"
        v-if="exercise.active == true">
        NAME: {{exercise.name}} REPS: {{exercise.reps}} SETS: {{exercise.sets}}  
        </li>
      </ul>
      <h1 v-text="workoutDoneMSG"></h1>
      <button @click="clickToStart()">START</button>
  </div>
</template>

<script>
export default {

  name: 'doWorkout',
  props:{
    workoutPlan : Array 
  },
  data(){
    return{
      workoutDoneMSG : ''

    }
  },
  methods:{
    clickToStart(){
      var i = 0;   
      var originalReps = this.workoutPlan[i].reps   
      const WorkoutCountdown = setInterval(()=> {
        if(i < this.workoutPlan.length){
          this.workoutPlan[i].active = true;
          if(this.workoutPlan[i].reps > 0){
            this.workoutPlan[i].reps--;

          }

          if(this.workoutPlan[i].reps == 0){
            if(this.workoutPlan[i].sets == 0){
              this.workoutPlan[i].active = false;
              i++;         
              originalReps = this.workoutPlan[i].reps   
              
            }
            if(this.workoutPlan[i].sets > 0){ 
              this.workoutPlan[i].sets --;
              this.workoutPlan[i].reps = originalReps;

            }

          }
        }
        if(i == this.workoutPlan.length){
          this.workoutDoneMSG = "WORKOUT COMPLETED";
          clearInterval(WorkoutCountdown);
          

        }
      },100);
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.doWorkout{
  h1{
    color:green;
  }
  ul{
    color: #000;
    list-style-type: none;
    padding: 0;
    li{
      font-size: 30px;
    }
  }
  button{
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: gray;
    color: #fff;
    border: none;
  }
}
</style>
