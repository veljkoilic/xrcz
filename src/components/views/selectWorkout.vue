<template>
  <div class="selectWorkout">
      <h1>SELECT A WORKOUT</h1>
      <ul v-bind:key="plan.key"
       v-for="plan in workoutList"
       @click="startWorkout(plan)">
            <li v-bind:key="workout.name"
            v-for="workout in plan">
            {{workout.name}} - {{workout.sets}} sets {{workout.reps}} reps
            <!-- <p @click="removePlan(plan)">X</p> -->
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'selectWorkout',
  props: {
      workoutList: Array
    },
    methods:{
        startWorkout(plan){
            window.EventBus.$emit('workoutStarted', plan);
            this.$router.push({path:"/do-workout"});
            

        },
        removePlan(plan){
            var index = this.workoutList.indexOf(plan);
            this.workoutList.splice(index, 1);
        }            
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   lang='scss'>
body{
    
      ::-webkit-scrollbar {
      width: 10px;
  }

  ::-webkit-scrollbar-track {
      background: #f1f1f1; 
  }
  
  ::-webkit-scrollbar-thumb {
      background: #2c3e50; 
  }

  ::-webkit-scrollbar-thumb:hover {
      background: darken(#2c3e50, 5); 
  }
}
.selectWorkout{
    background: #333545;
    overflow-y: scroll; //Staviti kad provalis kako se hide scrollbar
    height: 650px;
    color: #fff;
    width: 104%;
    margin-top: 60px;
    margin-left: 75px;
    width: calc(100vw - 75px);
    height: calc(100vh - 60px);
      
    h1{
        margin: 20px 0;
        font-size: 30px;
    }
    ul{
        padding: 10px;
        background: #2490E9;
        border-radius: 3px;
        list-style-type: none;
        text-align: left;
        margin: 10px auto;
        width: 90%;
        li{
            margin: 10px 0;
            font-size: 20px;
            p{
                position: relative;
                bottom: 30px;   
            }
        }
    }
}

</style>
