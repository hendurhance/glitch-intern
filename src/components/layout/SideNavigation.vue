<template>
  <ul>
      <li>
          <base-button :href="Insta">
            <img :src="Instagram" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="Twi">
            <img :src="Twitter" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="Snap">
            <img :src="Snapchat" alt="">
          </base-button>
      </li>
      <li>
          <base-button :href="eMail">
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
    inject: ['resultObj'],
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
    created() {
    // console.log(`Injected property: ${this.resultObj}`)
    for(const id in `${this.resultObj}`){
        this.Insta = id.instagram
        this.Twi = id.twitter
        this.Snap = id.snapchat
        this.eMail = id.email
    }
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