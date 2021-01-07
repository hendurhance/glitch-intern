<template>
  <ul>
      <li>
        <base-button href="#">Home</base-button>
      </li>
      <li>
        <base-button href="#">About</base-button>
      </li>
       <!-- Image start-->
       <li class="mainpic">
        <base-button href="#"><img :src="ProfilePic" class="pic" alt=""></base-button>
       </li>
      <!-- Image end -->
      <li>
        <base-button href="#">Gallery</base-button>
      </li>
      <li>
        <base-button href="#">Contact</base-button>
      </li>
  </ul>
</template>

<script>
import ProfilePic from '../../assets/profilepic.png'
export default {
    data(){
        return{
            ProfilePic: ProfilePic
        }
    }
}
</script>

<style>
ul{
    text-align: center;
}

li{
    list-style: none;
    display: inline-flex;
    padding: 1rem;
    margin-top: 1rem !important;
}
.pic{
    width: 4rem;
    border-radius: 100%;
    margin-block: -2.4rem;
}
</style>