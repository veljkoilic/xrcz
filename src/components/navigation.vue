<template>
  <div class="navigation">
    <nav class="d-lg-block d-sm-none desknav">
      <ul class="container">
        <li class="col-sm-12"> <router-link to="/"> <i class="fas fa-home"></i> </router-link></li>
        <li class="col-sm-12"> <router-link to="/create-workout"><i class="fas fa-plus"></i></router-link> </li>
        <li class="col-sm-12"> <router-link to="/select-workout"><i class="fas fa-play"></i></router-link></li>
      </ul>
    </nav>

  <nav class="menu d-lg-none d-sm-block" v-bind:class="{ active: hamburgerActive }">
  <div class="menu-container">
    <ul class="menu-list">
      <li class="menu-item"><router-link class="menu-link" to="/"> <i class="fas fa-home"></i> </router-link></li>
      <li class="menu-item"><router-link class="menu-link" to="/create-workout"> <i class="fas fa-plus"></i> </router-link></li>
      <li class="menu-item"><router-link class="menu-link" to="/select-workout"> <i class="fas fa-play"></i> </router-link></li>
    </ul>
  </div>

  <a class="menu-toggle" @click="toggleHamburger()">
    <div class="menu-hamburger"></div>
  </a>
</nav>



  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      hamburgerActive: false

    }
  },
  methods:{
    toggleHamburger(){
      if(this.hamburgerActive == true){
        this.hamburgerActive = false;
        return

      }
      this.hamburgerActive = true;



    }
  }
}

</script>

<style lang='scss'>
.navigation{
  width: 75px;
  margin: 0;
  position: fixed;
  top: 60px;
  .desknav{
    background: darken(#333545,1);
    width: 75px;
    height: calc(100vh - 60px) ;
    ul{
      padding: 0;
      margin: 0;
      list-style-type: none;
      li{
        text-align: center;
        display: block;
        padding: 25px 0 25px 0;
        margin: 0 auto 0 auto;
        &:hover{
          background: darken(#333545,3)

        }
        a{
          color: #fff;
        }
      }
    }
  }
}
.menu{
  height: calc(100vh - 60px) ;
  position: relative;
      ul{
      padding: 0;
      margin: 0;
      list-style-type: none;
      li{
        text-align: center;
        display: block;
        padding: 25px 0 25px 0;
        margin: 0 auto 0 auto;
        &:hover{
          background: darken(#333545,3)

        }
        a{
          color: #fff;
        }
      }
    }
  }

.menu-container {
  will-change: transform, height;
  width: 200px;
  height: 500px;
  background-color: #333545;
  padding-left: 100px;
  box-sizing: border-box;
  transform: translate3d(-330px, -210px, 0px)  rotate(45deg);
  margin: 0;
  position: relative;
  transition: all .3s ease-in-out;
  padding-top: 40px;
  margin-left: 0px;
}

nav.active .menu-container {
  height: calc(100vh - 60px) ;
  transform: translate3d(-100px, 0px, 0px)  rotate(0deg);
}

.menu-list{
  margin: 0;
  padding: 50px 20px 20px 50px;
  list-style: none;
}

.menu-item{
  padding: .5rem 0;
}

.menu-link{
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity .3s;
}

nav.active .menu-link{
  opacity: 1;
  transition-delay: .3s;
}

.menu-toggle{
  display: block;
  position: absolute;
  height: 15px;
  width: 20px;
  top: -40px;
  left: 10px;
  background: transparent;
  cursor: pointer;
}

.menu-hamburger, .menu-hamburger:before, .menu-hamburger:after{
  background-color: #fff;
  height: 3px;
  width: 20px;
  display: block;
  transition: all .3s;
}

.menu-hamburger {
  position: relative;
  top: 5px;
  left: 0px;
}

.menu-hamburger:before{
  content:"";
  position: absolute;
  top: -6px;
}
.menu-hamburger:after{
  content: "";
  position: absolute;
  bottom: -6px;
}

.menu.active .menu-hamburger{
  background: transparent;
}

.menu.active .menu-hamburger:before{
  transform: rotate(-45deg);
  top: 0px;
}
.menu.active .menu-hamburger:after{
  transform: rotate(45deg);
  bottom: 0px;
}

</style>
