<template>
  <div class="createWorkout">
      <h1>CREATE A WORKOUT</h1>

      <div class="creatorExercise col-10 offset-1">
          <input class="col-sm-2" type="text" placeholder="Workout name" v-model="newWorkoutName">
          <input class="col-sm-2" type="text" placeholder="Exercise name" v-model="newName">
          <input class="col-sm-2" type="number" placeholder="Sets" v-model="newSets">
          <input class="col-sm-2" type="number" placeholder="Reps" v-model="newReps">
          <button class="col-sm-2 fas fa-plus-circle" @click="validateExerciseAndAdd()"></button>
      </div>

    <ul class="container-fluid">
        <li v-bind:key="workout.name"
        v-for="workout in workouts"
        class="col-sm-8 offset-2">
        <span class="eName col-3">{{workout.name}}</span>
        <span class="eSets col-3"> {{workout.sets}} sets </span>
        <span class="eReps col-3"> {{workout.reps}} reps </span> 
        <i class="smallX far fa-times-circle" @click="removeExercise(workout)"></i> </li>
    </ul>

    <button id="createButton" class="col-2 offset-5" @click="workoutCreate()">Create Workout!</button>
    
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
          newReps: "",
          
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
    overflow: hidden;
  margin-top: 60px;
  margin-left: 75px;
  width: calc(100vw - 75px);
  height: calc(100vh - 60px);
  background: #333545;
  text-align: center;
  padding-top: 50px;
    
    .creatorExcersise{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
    h1{
        color: #fff;
        font-size: 30px;
        margin: 20px 0 60px 0;
    }
    input{
        color: #fff;
        font-size: 25px;
        display: inline-block;
        background: rgba($color: #fff, $alpha: .1);
        border: none;
        &::placeholder{
            color: #fff;

        }

    }
    input[type="text"]{
        text-align: center;

    }
    
    input[type="number"]{
        text-align: center;
        
    }
    button{
        border: 0;
        color: #2490E9;
        background: #333545;
        font-size: 30px;
        position: relative;
        top: 2px;
        padding: 5px;
            -webkit-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 0px 34px 2px rgba(0,0,0,0.75);
            box-shadow: 10px 0px 34px 2px rgba(0,0,0,0.75);

    }
    
    ul{
        overflow: scroll;
        padding: 0;
        margin: 50px 0 0 0;
        list-style-type: none;
        height: 400px;
        li{
            padding: 30px 20px;
            margin-top: 20px;
            background: #333545;
            text-align: left;
            -webkit-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
            display: flex;
            justify-content: space-between;
            .eName{
                color: #2490E9;
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
            .smallX{
                color: #2490E9;
                font-size: 23px;
                cursor: pointer;


            }


        }
    }
    #createButton{
        display: block;
        margin-top: 90px;
        background: #2490E9;
        color: #fff;
        border-radius: 20px;
        padding: 10px 20px;
        
        
    }
}
@media only screen and (max-width: 991px) {
  .createWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }
</style>

