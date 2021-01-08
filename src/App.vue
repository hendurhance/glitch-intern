<template>
  <section>
    <the-header :title="this.name"></the-header>
    <photo-card></photo-card>
    <side-nav></side-nav>
    <the-navigation></the-navigation>
  </section>
</template>

<script>

export default {
    data(){
      return{
        name: null,
        results: [],
      }
    },
    created(){
      fetch('https://hirng-x2021.glitch.me/api').then((response) =>  {
              if (response.ok) {
                  return response.json();
              }
          }).then((data) => {
            const nameData = data.name
            this.name = nameData
            const linkData = data.social_media
            console.log(linkData)
            const email = linkData.email
            const instagram = linkData.instagram
            const snapchat = linkData.snapchat
            const twitter = linkData.twitter
            const obj = [email, snapchat, twitter, instagram]
            this.results = obj
           })
    },
    provide (){
      return{
        resultObj: this.results
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
*{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

section{
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #bd0f4d 0%,#bd0f4d 50%,#bd0f4d 50%,#cb2964 50%,#cb2964 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

</style>
