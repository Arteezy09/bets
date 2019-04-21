<template>
  <v-footer
    dark
    height="120px"
  >
    <v-container>
      <v-layout>
        <a class="btn1" href="#!">
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a class="btn2 hidden-sm-and-down" href="#!">
          <i class="fab fa-google"></i>
        </a>
        <a class="btn3" href="#!">
          <i class="fab fa-vk"></i>
        </a>
        <a class="btn4 hidden-sm-and-down" href="#!">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="btn5" href="#!">
          <i class="fab fa-youtube"></i>
        </a>
        <a class="btn6 hidden-sm-and-down" href="#!">
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

.btn1{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #3498db;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn1 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn1:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn1::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #3498db;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn1:hover::before{
  top: -10%;
  left: -10%;
}


.btn2{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #FBC02D;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn2 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn2:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn2::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #FBC02D;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn2:hover::before{
  top: -10%;
  left: -10%;
}


.btn3{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #1976D2;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn3 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn3:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn3::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #1976D2;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn3:hover::before{
  top: -10%;
  left: -10%;
}


.btn4{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #8E24AA;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn4 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn4:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn4::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #8E24AA;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn4:hover::before{
  top: -10%;
  left: -10%;
}


.btn5{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #D32F2F;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn5 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn5:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn5::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #D32F2F;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn5:hover::before{
  top: -10%;
  left: -10%;
}


.btn6{
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #000000;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.btn6 i{
  line-height: 45px;
  font-size: 16px;
  transition: 0.2s linear;
}
.btn6:hover i{
  transform: scale(1.5);
  color: #f1f1f1;
}
.btn6::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #000000;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.btn6:hover::before{
  top: -10%;
  left: -10%;
}

</style>