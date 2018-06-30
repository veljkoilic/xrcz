<template>
  <div class="doWorkout">
      <h1 v-if="workoutPlan != ''">{{workoutPlan[0].workoutName}}</h1>
      <h1 v-else>Please select a workout</h1>

      <ul>
        <li v-bind:key="exercise.name
        " v-for="exercise in workoutPlan"
        v-if="exercise.active == true">
        <span class="exerciseName">{{exercise.name}}</span>  <span class="number">{{exercise.reps}}</span> <span> REPS LEFT</span> <span class="number">{{exercise.sets}}</span> <span> SETS LEFT</span> 
        </li>
      </ul>

      <h1 class="completedWorkoutMessage" v-text="workoutDoneMSG"></h1>
      <button @click="clickToStart()" v-if="isStartButtonShown">Start Workout</button>
      <i v-if="arePlayStopButtonsShown"  
      v-bind:class="[pauseButtonClicked ? 'fa fa-play' : 'fas fa-pause']"
      @click="pauseWorkoutCountDown"></i>
  </div>
</template>

<script>
export default {

  name: 'doWorkout',
  data(){
    return{
      workoutDoneMSG : '',
      pauseButtonClicked: false,
      workoutPlan:[],
      i:0,
      paused:false,
      isStartButtonShown: true,
      arePlayStopButtonsShown:false

    }
  },  mounted(){
      window.EventBus.$on('workoutStarted', (plan) => {
      this.workoutPlan = plan;
      
    });
  },
  beforeDestroy(){
    this.workoutPlan = [];
      this.paused = true;
},  
  methods:{
    pauseWorkoutCountDown(){
      if(this.paused == true){
        this.paused = false;
        this.pauseButtonClicked = false;
      }else{
        this.paused = true;
        this.pauseButtonClicked = true;

      }
    },
    clickToStart(){
      this.paused = false;
      this.isStartButtonShown = false;
      this.arePlayStopButtonsShown = true;
      this.i = 0;   
      var originalReps = this.workoutPlan[this.i].reps;
      setInterval(()=> {
        if(this.paused == false){
          this.startCountdown(originalReps);
        }

        if(this.i == this.workoutPlan.length){
          this.workoutDoneMSG = "IS COMPLETED";
          clearInterval();
        
        }
      },1500);
      

    },
    startCountdown(originalReps){
      if(this.i < this.workoutPlan.length){
        this.workoutPlan[this.i].active = true;
        if(this.workoutPlan[this.i].reps > 0){
          this.decreaseReps();
        }
        if(this.workoutPlan[this.i].reps == 0){
          if(this.workoutPlan[this.i].sets == 1){
            this.switchExercise(originalReps);

          }
          if(this.workoutPlan[this.i].sets > 0){ 
            this.decreaseSets(originalReps)

          }
        }
      }      
    },

    decreaseReps(){
      this.workoutPlan[this.i].reps--;
      
    },
    switchExercise(originalReps){
      this.workoutPlan[this.i].active = false;
      this.i++;         
      originalReps = this.workoutPlan[this.i].reps;
      return originalReps;  
    },
    decreaseSets(originalReps){
      this.workoutPlan[this.i].sets --;
      this.workoutPlan[this.i].reps = originalReps;
      return this.workoutPlan[this.i].reps;

    }


  }
}
</script>
 
<style  scoped lang='scss'>
.doWorkout{
    margin-top: 60px;
    margin-left: 75px;
    width: calc(100vw - 75px);
    height: calc(100vh - 60px);
    background: #333545;
    display: flex;
    flex-direction: column;
    align-items: center;

  h1{
    color:#fff;
    font-size: 60px;
    margin-top: 20px;
  }
  .completedWorkoutMessage{
    color: green;
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
    background: #2490E9;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    color: #fff;
    padding: 10px;
    position: absolute;
    top: 50%;
  }
  i{
    margin-top: 50px;
    color:#fff;
    font-size: 40px;
  }
}
@media only screen and (max-width: 991px) {
  .doWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }
</style>
