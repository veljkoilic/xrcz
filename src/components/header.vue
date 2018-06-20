<template>
  <div class="header container-fluid" >
    <h1 class="col-sm-12 d-flex justify-content-sm-center justify-content-lg-start" ><span>X</span>- R C Z</h1>
  </div>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<style lang='scss'>
.header{
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: #333545;
  -webkit-box-shadow: -7px 6px 17px 0px rgba(0,0,0,0.48);
  -moz-box-shadow: -7px 6px 17px 0px rgba(0,0,0,0.48);
  box-shadow: -7px 6px 17px 0px rgba(0,0,0,0.48);
  color: #fff;
  display: flex;
  align-items: center;
  h1{
    font-size: 25px;
    margin-left: 20px;
    span{
      &:before{
        content: 'X';
        color: #2490E9;
        position: relative;
        left: 13px;
        font-weight: bolder;
        z-index: 0;
        margin: 0;
        padding: 0;

        
      }
    }
  }
}
</style>
