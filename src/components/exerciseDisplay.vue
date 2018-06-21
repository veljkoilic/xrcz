<template>
<div class="exerciseDisplay">
          <div id="accordion">
            <div class="card" v-bind:key="plan.name" v-for="plan in exerciseProp">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button @click="collapse()" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{plan[0].workoutName}}
                    </button>
                    <slot></slot>
                </h5>
                </div>

                <div id="collapseOne" class="collapse" :class="{show:showCollapsed}" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" v-bind:key="workout.name" v-for="workout in plan">
                    {{workout.name}} - {{workout.sets}} sets {{workout.reps}} reps
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
    exerciseProp: Array
  },
  data(){
    return{
      showCollapsed: false


    }
  },
  methods:{
    collapse(){
      if(this.showCollapsed == true){
          this.showCollapsed = false;
          return
      }
      this.showCollapsed = true;
    }
  }
}

</script>

<style lang='scss'>
.card-body{
    color:#000;
}

</style>
