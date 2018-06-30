<template>
  <div class="selectWorkout">
        <h1>Select Your workout plan</h1>
        <exercise-display @planRemoved="removePlan(plan)" v-bind:key="plan.name" v-for="plan in workoutList" :plan = "plan"></exercise-display>
  </div>
</template>

<script>
import exerciseDisplay from "../exerciseDisplay.vue";

export default {
  name: 'selectWorkout',
  components:{
      exerciseDisplay
  },

    data(){
        return{
            workoutList: []
        }
    },
    methods:{
        removePlan(plan){
            var index = this.workoutList.indexOf(plan);
            this.workoutList.splice(index, 1);
        }
    },
    beforeUpdate(){
        if(this.workoutList != []){
            // eslint-disable-next-line
            agCookie.create("workouts",JSON.stringify(this.workoutList),30);

        }

    },
    mounted(){
        // eslint-disable-next-line
        if(agCookie.read('workouts') != null){
            // eslint-disable-next-line
            this.workoutList = JSON.parse(agCookie.read('workouts'));

        }
        window.EventBus.$on('workoutCreated', workouts => {
        this.workoutList.push(workouts);

        });
        
    },
    beforeDestroy(){
            // eslint-disable-next-line
            agCookie.create("workouts",JSON.stringify(this.workoutList),30);
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   lang='scss'>
body{
    
    ::-webkit-scrollbar {
        width: 10px;
    }

}
.selectWorkout{
    background: #333545;
    overflow-y: scroll; //Staviti kad provalis kako se hide scrollbar
    height: 650px;
    color: #fff;
    margin-top: 60px;
    margin-left: 75px;
    width: calc(100vw - 75px);
    height: calc(100vh - 60px);
    h1{
        margin: 60px 0;
        text-align: center;
        color: #2490E9;
    }
    .card{
        background-color: #333545;
        margin: 30px auto; 
        padding: 0;

        -webkit-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 34px 2px rgba(0,0,0,0.75);
    }
}
.card-body{
    color:#fff;
    font-size: 20px;
    span{
        color: #2490E9;        
    }
}
.mb-0{
    display: flex;
    justify-content: space-between;
button{
    color: #fff;
    background: transparent;
    border: none;
    text-align: right;
    .fa-play{
        margin-left: 10px;
        color: #2490E9;
    
    }
}
}

@media only screen and (max-width: 991px) {
  .selectWorkout{
    margin-left: 0;
    width: 100vw;
    
  }
  }

</style>
