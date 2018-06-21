<template>
  <div class="createWorkout">
      <h1>CREATE A WORKOUT</h1>

      <div class="creatorExercise">
          <input type="text" placeholder="Workout name" v-model="newWorkoutName">
          <input type="text" placeholder="Exercise name" v-model="newName">
          <input type="number" placeholder="Sets" v-model="newSets">
          <input type="number" placeholder="Reps" v-model="newReps">
          <button class="fas fa-plus-circle" @click="validateExerciseAndAdd()"></button>
      </div>

    <ul>
        <li v-bind:key="workout.name"
        v-for="workout in workouts">
        <span class="eName">{{workout.name}} - </span>
        <span class="eSets"> {{workout.sets}} sets </span>
        <span class="eReps"> {{workout.reps}} reps </span> 
        <span @click="removeExercise(workout)">X</span> </li>
    </ul>

    <button class="createButton" @click="workoutCreate()">Create Workout!</button>
    
  </div>
</template>

<script>
export default {
  name: 'createWorkout',
  data(){
      return{
          workouts:[
              {workoutName: "My workout", name:"Push-ups", sets: 3, reps: 5, active: false},
              {workoutName: "My workout", name:"Crunches", sets: 2, reps: 15, active: false},
              {workoutName: "My workout", name:"Squats", sets: 4, reps: 5, active: false}
            ],
          newWorkoutName: "",
          newName: "",
          newSets: "",
          newReps: ""
        }
    },
  methods:{
      validateExerciseAndAdd(){
          if(this.newName == "" || this.newSets == 0 || this.newReps == 0){
              alert("Please enter all of the values");
              return
          }
          else if(this.newSets <= 0 || this.newReps <= 0){
              alert("You cant use negative values...");
              return
          }
          
          else{
            this.workouts.push({workoutName: this.newWorkoutName, name: this.newName, sets: parseInt(this.newSets), reps: parseInt(this.newReps), active: false});
            this.newName = ""
            this.newSets = 0    
            this.newReps = 0
          }
      },
      workoutCreate(){
            window.EventBus.$emit("workoutCreated", this.workouts);
            this.workouts = [];
            this.$router.push({path:"/select-workout"})
        },
        removeExercise(workout){
            var index = this.workouts.indexOf(workout);
            this.workouts.splice(index, 1);
        }    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.createWorkout{
  margin-top: 60px;
  margin-left: 75px;
  width: calc(100vw - 75px);
  height: calc(100vh - 60px);
  background: #333545;
    
    .creatorExcersise{
        width: 100%;
        
        
    }
    h1{
        color: #fff;
        font-size: 30px;
        margin: 20px 0 60px 0;
    }
    input{
        display: inline-block;
    }
    input[type="text"]{
        width: 150px;
        text-align: center;

    }
    
    input[type="number"]{
        width: 60px;
        text-align: center;
        
    }
    button{
        background: transparent;
        border: 0;
        color: #C3F73A;
        font-size: 23px;
        position: relative;
        top: 5px;

    }
    
    ul{
        padding: 0;
        margin: 50px 0 0 0;
        list-style-type: none;
        li{
            color: #C3F73A;
            margin-bottom: 5px;
            background: #403D39;
            text-align: left;
            .eName{
                color: #C3F73A;
                font-size: 20px;
                margin-left: 15px;
            }
            .eReps{
                color: #FFFCF2;
                margin-left: 15px;
            }
            .eSets{
                color: #FFFCF2;
                margin-left: 15px;
            }


        }
    }
    .createButton{
        margin-top: 30px;
        background: #C3F73A;
        color: #fff;
        border-radius: 20px;
        padding: 5px 20px;
        
    }
}
@media only screen and (max-width: 991px) {
  .createWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }
</style>

