<template>
  <div class="createCard">
        <li v-bind:key="workout.name"
        v-for="workout in workouts"
        class="col-sm-8 offset-2">
        <span class="eName col-3">{{workout.name}}</span>
        <span class="eSets col-3"> {{workout.sets}} sets </span>
        <span class="eReps col-3"> {{workout.reps}} reps </span> 
        <i class="smallX far fa-times-circle" @click="removeExercise(workout)"></i></li>
  </div>
</template>

<script>
export default {
  name: 'create-card',
  props:{
    workouts: Array
  },
  methods:{
    removeExercise(workout){
    var index = this.workouts.indexOf(workout);
    this.workouts.splice(index, 1);
  }
  }

}
</script>

<style  scoped lang='scss'>
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
</style>
