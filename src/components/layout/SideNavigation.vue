<template>
  <ul>
      <li>
          <base-button :href="'https://instagram.com/' + Insta">
            <img :src="Instagram" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="'https://instagram.com/' + Twi">
            <img :src="Twitter" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="'https://instagram.com/' + Snap">
            <img :src="Snapchat" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="'mailto:' + eMail">
            <img :src="Mail" alt="">
          </base-button>
      </li>
  </ul>
</template>

<script>
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Snapchat from '../../assets/snapchat.svg'
import Mail from '../../assets/mail.svg'

export default {
    data(){
        return{
            Instagram: Instagram,
            Twitter: Twitter,
            Snapchat: Snapchat,
            Mail: Mail,
            Insta: null,
            Twi: null,
            Snap: null,
            eMail: null
        }
    },
    created(){
      fetch('https://hirng-x2021.glitch.me/api').then((response) =>  {
              if (response.ok) {
                  return response.json();
              }
          }).then((data) => {
            const socialLink = data.social_media
            // console.log(socialLink)
            this.eMail = socialLink.email
            this.Insta = socialLink.instagram
            this.Snap = socialLink.snapchat
            this.Twi = socialLink.twitter
           })
    }
}
</script>

<style scoped>
ul{
    position: fixed;
    left: 97%;
    top: 40%;
    /* padding-left: 2em; */
}

li{
    list-style: none;
    padding-bottom: 1em;
}

a{
    text-transform: lowercase !important;
}
img{
    width: 25px;
}
</style>