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
      <button @click="clickToStart()"><i class="fa" :class="[{'fa-stop': buttonClicked }, 'fa-play']"></i></button>
  </div>
</template>

<script>
export default {

  name: 'doWorkout',
  data(){
    return{
      workoutDoneMSG : '',
      buttonClicked: false,
      workoutPlan:[],
      i:0,
      paused:true

    }
  },  mounted(){
      window.EventBus.$on('workoutStarted', (plan) => {
      this.workoutPlan = plan;
      
    });
  },  
  methods:{
    clickToStart(){
      if(this.buttonClicked == true){
        this.buttonClicked = false;
      }else{
              this.buttonClicked = true;
      }

      this.i = 0;   
      var originalReps = this.workoutPlan[this.i].reps;

      if(this.paused == false){
        this.paused = true;
      }else{
        this.paused = false;

      }

      if(this.paused == true){
        clearInterval(WorkoutCountdown);
        return
      }

      clearInterval(WorkoutCountdown);
      const WorkoutCountdown = setInterval(()=> {
        if(this.paused == false){
          this.startCountdown(originalReps);
        }

        if(this.i == this.workoutPlan.length){
          this.workoutDoneMSG = "WORKOUT COMPLETED";
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
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    color:green;
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
    height: 10px;
    color: #2490E9;
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
