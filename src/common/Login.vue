<template>
  <div class="login-component">
    <section class="login-block d-flex align-items-center" style="height: 100vh;width: 100% !important;">
      <div class="container">
        <div class="row">
          <div class="col-md-4 login-sec">
            <h2 class="text-center">Login Now</h2>
            <div class="form-group">
              <label for="exampleInputEmail1"  class="text-uppercase">Username</label>
              <input type="text" v-model="username" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase">Password</label>
              <input type="password" v-model="password" class="form-control" placeholder="">
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
              <button @click="login" class="btn btn-login float-right">LOGIN</button>
            </div>
            <div class="copy-text">Created with <i class="fa fa-heart"></i> by Grafreez</div>
          </div>
          <div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>This is Heaven</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>This is Heaven</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>This is Heaven</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UrlPath from "../constans/path/urlPath.js";
export default {
  name: "Login",
  data: function () {
    return {
      username: null,
      password: null
    }
  },
  watch: {
    username: {
      handler: function () {
        console.log("ban da thay doi user name !")
      },
      deep: true
    },
  },
  methods: {
    login : function () {
      const vm = this
      if (vm.username === 'admin' && vm.password === 'admin') {
        if (vm.$route.fullPath !== UrlPath.LIST_PRODUCT) {
          localStorage.setItem('username',vm.username);
          localStorage.setItem('password',vm.password);
          vm.username = null
          vm.password = null
          vm.$router.push(UrlPath.LIST_PRODUCT)
        }
      }
    }
  }
}
</script>

<style scoped>
.login-component{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.login-block{
  background: #DE6262;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float:left;
  width:100%;
  padding : 50px 0;
}

.banner-sec {
  background-size: cover;
  min-height: 500px;
  border-radius: 0 10px 10px 0;
  padding: 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  border-radius: 0 10px 10px 0;
}

.carousel-caption {
  text-align: left;
  left: 5%;
}

.login-sec {
  padding: 50px 30px;
  position: relative;
}

.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}

.login-sec .copy-text i {
  color: #FEB58A;
}

.login-sec .copy-text a {
  color: #E36262;
}

.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #DE6262;
}

.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #FEB58A;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto
}

.btn-login {
  background: #DE6262;
  color: #fff;
  font-weight: 600;
}

.banner-text {
  width: 70%;
  position: absolute;
  bottom: 40px;
  padding-left: 20px;
}

.banner-text h2 {
  color: #fff;
  font-weight: 600;
}

.banner-text h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #FFF;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
}

.banner-text p {
  color: #fff;
}
</style>