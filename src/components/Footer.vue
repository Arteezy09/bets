<template>
  <v-footer
    dark
    height="120px"
  >
    <v-container>
      <v-layout>
        <a class="btn btn1" href="#!">
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a class="btn btn2 hidden-sm-and-down" href="#!">
          <i class="fab fa-google"></i>
        </a>
        <a class="btn btn3" href="#!">
          <i class="fab fa-vk"></i>
        </a>
        <a class="btn btn4 hidden-sm-and-down" href="#!">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="btn btn5" href="#!">
          <i class="fab fa-youtube"></i>
        </a>
        <a class="btn btn6 hidden-sm-and-down" href="#!">
          <i class="fab fa-github"></i>
        </a>
        <v-spacer></v-spacer>
        <v-btn
          icon      
          title="Go to top"
          color="white black--text"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>expand_less</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<style> 
.btn{
  display: inline-block;
  width: 45px;
  height: 45px;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn:hover i{
  transform: scale(1.5);
}
.btn::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn:hover::before{
  top: -10%;
  left: -10%;
}
.btn1{
  background: #f1f1f1;
  color: #3498db;
}

.btn1:hover i{
  color: #f1f1f1;
}
.btn1::before{
  background: #3498db;
}
.btn2{
  background: #f1f1f1;
  color: #FBC02D;
}

.btn2:hover i{
  color: #f1f1f1;
}
.btn2::before{
  background: #FBC02D;
}
.btn3{
  background: #f1f1f1;
  color: #1976D2;
}
.btn3:hover i{
  color: #f1f1f1;
}
.btn3::before{
  background: #1976D2;
}
.btn4{
  background: #f1f1f1;
  color: #8E24AA;
}
.btn4:hover i{
  color: #f1f1f1;
}
.btn4::before{
  background: #8E24AA;
}
.btn5{
  background: #f1f1f1;
  color: #D32F2F;
}
.btn5:hover i{
  color: #f1f1f1;
}
.btn5::before{
  background: #D32F2F;
}
.btn6{
  background: #f1f1f1;
  color: #000000;
}
.btn6:hover i{
  color: #f1f1f1;
}
.btn6::before{
  background: #000000;
}
</style>