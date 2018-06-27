<template>
  <div class="selectWorkout">
        <h1>Select Your workout plan</h1>
        <div id="accordion container-fluid">
            <div class="card col-sm-6" v-bind:key="plan.name" v-for="plan in workoutList">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button @click="collapse()" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{plan[0].workoutName}}
                    </button>
                    <button @click="startWorkout(plan)">Start <i class="fa fa-play"></i></button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse" :class="{show:showCollapsed}" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" v-bind:key="workout.name" v-for="workout in plan">
                    <span>{{workout.name}}</span> : {{workout.sets}} sets, {{workout.reps}} reps
                </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'selectWorkout',

    data(){
        return{
            showCollapsed: true,
            workoutList: [
                [
              {workoutName: "My workout", name:"Push-ups", sets: 3, reps: 5, active: false},
              {workoutName: "My workout", name:"Crunches", sets: 2, reps: 15, active: false},
              {workoutName: "My workout", name:"Squats", sets: 4, reps: 5, active: false}
            ]
            ]
        }
    },
    mounted(){
        window.EventBus.$on('workoutCreated', workouts => {
        this.workoutList.push(workouts);
        console.log(workouts);
        console.log(this.workoutList);
               
        });
        console.log(this.workoutList);


    },




    methods:{
        startWorkout(plan){
            window.EventBus.$emit('workoutStarted', plan);
            this.$router.push({path:"/do-workout"});
            

        },
        removePlan(plan){
            var index = this.workoutList.indexOf(plan);
            this.workoutList.splice(index, 1);
        },
        collapse(){
            if(this.showCollapsed == false){
                this.showCollapsed = true;
                return
            }
            this.showCollapsed = false;
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
      
    //     this.changeButtonToPause(this.WorkoutCountdown)
    //   var i = 0;   
    //   var originalReps = this.workoutPlan[i].reps  

    //   const WorkoutCountdown = setInterval(()=> {
    //     if(i < this.workoutPlan.length){
    //       this.workoutPlan[i].active = true;
    //       if(this.workoutPlan[i].reps > 0){
    //         this.workoutPlan[i].reps--;

    //       }

    //       if(this.workoutPlan[i].reps == 0){
    //         if(this.workoutPlan[i].sets == 0){
    //           this.workoutPlan[i].active = false;
    //           i++;         
    //           originalReps = this.workoutPlan[i].reps   
              
    //         }
    //         if(this.workoutPlan[i].sets > 0){ 
    //           this.workoutPlan[i].sets --;
    //           this.workoutPlan[i].reps = originalReps;

    //         }

    //       }
    //     }
        // if(i == this.workoutPlan.length){
        //   this.workoutDoneMSG = "WORKOUT COMPLETED";
        //   clearInterval(WorkoutCountdown);
          

        // }
    //   },2000);
    // },
    // changeButtonToPause(WorkoutCountdown){
    //     if(this.buttonClicked == true){
    //         this.buttonClicked = false;
    //         clearInterval(WorkoutCountdown);
    //         return
    //     }
    //     this.buttonClicked = true;

    // }   



















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
