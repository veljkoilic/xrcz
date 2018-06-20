<template>
  <div class="welcome">
    <h1>Only <span>I</span> can change my life.</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',

}
</script>

<style  scoped lang='scss'>
.welcome{
  margin-top: 60px;
  margin-left: 75px;
  width: calc(100vw - 75px);
  height: calc(100vh - 60px);

  display: inline-block;
  background-image: url('../../assets/workoutman.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  h1{
    margin-top: 50px;
    margin-left: 15%;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 6vw;
    width: 100px;
    span{
      color: #2490E9;
    }
  }
}
@media only screen and (max-width: 991px) {
  .welcome{
    margin-left: 0;
    width: 100vw;
    
  }
}
</style>
