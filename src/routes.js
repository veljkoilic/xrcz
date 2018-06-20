import VueRouter from 'vue-router';

import welcome from './components/views/welcome.vue';
import createWorkout from './components/views/createWorkout.vue';
import selectWorkout from './components/views/selectWorkout.vue';



export default new VueRouter({
    routes: [
      { path: '/', component: welcome },
      { path: '/create-workout', component: createWorkout },
      { path: '/select-workout', component: selectWorkout }


    ]
});