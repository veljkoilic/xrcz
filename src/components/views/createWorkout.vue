<template>
  <div class="createWorkout">
      <h1>CREATE A WORKOUT</h1>

      <div class="creatorExercise col-10 offset-1">
          <input class="col-md-10 offset-sm- col-sm-10" type="text" placeholder="Workout Plan name" v-model="newWorkoutName">
          <input class="col-md-4 col-sm-10" type="text" placeholder="Exercise name" v-model="newName">
          <input class="col-md-2 col-sm-10" type="number" placeholder="Sets" v-model="newSets">
          <input class="col-md-2 col-sm-10" type="number" placeholder="Reps" v-model="newReps">
          <button class="col-md-2  col-sm-10 fas fa-plus-circle" @click="validateExerciseAndAdd()"></button>
      </div>

    <ul class="container-fluid">
        <create-card :workouts="workouts"></create-card>
    </ul>

    <button id="createButton"  @click="workoutCreate()">Create Workout!</button>
    
  </div>
</template>

<script>
import createCard from '../createCard.vue'
export default {
    components:{
        createCard

    },
    name: 'createWorkout',
    data(){
        return{
            workouts:[
                {workoutName: "My workout", name:"Push-ups", sets: 3, reps: 5, active: false, favorite: true},
                {workoutName: "My workout", name:"Crunches", sets: 2, reps: 15, active: false, favorite: false},
                {workoutName: "My workout", name:"Squats", sets: 4, reps: 5, active: false, favorite: false}
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
            this.workouts.unshift({workoutName: this.newWorkoutName, name: this.newName, sets: parseInt(this.newSets), reps: parseInt(this.newReps), active: false, favorite:false});
            this.newName = ""
            this.newSets = 0    
            this.newReps = 0
            }
        },
        workoutCreate(){
            var workoutData = this.workouts;
            setTimeout(function(){
                window.EventBus.$emit("workoutCreated", workoutData);
                this.workouts = [];
            },1)
            
            this.$router.push({path:"/select-workout"})
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.createWorkout{
    overflow-x: hidden;
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
        font-size: 18px;
        display: inline-block;
        background: rgba($color: #fff, $alpha: .1);
        border: none;
        height: 50px;
        border-bottom: 1px solid #fff;
        &:focus{
            border-color: #fff;
        }
        
        
        &::placeholder{
            color: #fff;

        }

    }
    input[type="text"]{
        text-align: center;

    }
    
    input[type="number"]{
        text-align: center;
        -moz-appearance:textfield;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
    }
    button{
        height: 50px;
        border: 0;
        color: #2490E9;
        background: #333545;
        font-size: 30px;
        position: relative;
        top: 5px;
        padding: 5px;
            -webkit-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 0px 34px 2px rgba(0,0,0,0.75);
            box-shadow: 10px 0px 34px 2px rgba(0,0,0,0.75);

    }
    
    #createButton{
        font-size: 20px;
        display: block;
        margin: 90px auto 0 auto;
        background: #2490E9;
        color: #fff;
        border-radius: 20px;
        padding: 10px 20px;
        margin-bottom: 100px;
        
        
    }
}
@media only screen and (max-width: 991px) {
  .createWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }
</style>

