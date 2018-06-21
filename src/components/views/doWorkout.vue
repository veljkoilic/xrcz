<template>
  <div class="doWorkout">
    <ul >
        <li v-bind:key="exercise.name
        " v-for="exercise in workoutPlan"
        v-if="exercise.active == true">
        <span class="exerciseName">{{exercise.name}}</span>  <span class="number">{{exercise.reps}}</span> <span> REPS LEFT</span> <span class="number">{{exercise.sets}}</span> <span> SETS LEFT</span> 
        </li>
      </ul>
      <h1 v-text="workoutDoneMSG"></h1>
      <button @click="clickToStart()"><i class="fa" :class="[{ 'fa-stop': buttonClicked }, 'fa-play']"></i></button>
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
      workoutDoneMSG : '',
      buttonClicked: false

    }
  },  
  methods:{
    clickToStart(){
        this.changeButtonToPause(this.WorkoutCountdown)
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
      },2000);
    },
    changeButtonToPause(WorkoutCountdown){
        if(this.buttonClicked == true){
            this.buttonClicked = false;
            clearInterval(WorkoutCountdown);
            return
        }
        this.buttonClicked = true;

    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.doWorkout{
    margin-top: 60px;
    margin-left: 75px;
    width: calc(100vw - 75px);
    height: calc(100vh - 60px);
    background: #333545;
  h1{
    color:green;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    font-size: 60px;
  }
  ul{
    color: #fff;
    list-style-type: none;
    padding: 0;
    li{
        font-size: 40px;
        span{
            display: block;
            text-align: center;
        }
         //   OVDE
        .exerciseName{
            color:#2490E9;
            font-size: 90px;
            margin-bottom: 40px;  
        }
        .number{
            font-size: 80px;
        }
    }
  }
  button{
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    border: none;
    font-size: 50px;
    background: transparent;
  }
}
@media only screen and (max-width: 991px) {
  .doWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }
</style>
