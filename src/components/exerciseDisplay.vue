<template>
<div class="exerciseDisplay">
  <div id="accordion container-fluid">
              <div class="card col-sm-6">
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
  name: 'exercise-display',
  props:{
    plan: Array
  },
  data(){
    return{
      showCollapsed: false
  

    }
  },
    methods:{
        startWorkout(plan){
            var planEmit = plan;
            setTimeout(function() {
                window.EventBus.$emit('workoutStarted', planEmit);
            }, 1);
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

<style lang='scss'>
.card-body{
    color:#000;
}

</style>
