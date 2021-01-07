<template>
    <div>
        <img :src="Picture" alt="Picture">
    </div>
</template>

<script>
import Picture from '../../assets/picture.png'
export default {
    data(){
        return{
            Picture: Picture
        }
    }
}
</script>

<style scoped>
div{
    margin: 0 auto;
    text-align: center;
}
img{
    margin-top: 2rem;
    width: 30%;
    box-shadow: 0px 0px 20px 20px rgba(3, 3, 3, 0.164);
}
</style>