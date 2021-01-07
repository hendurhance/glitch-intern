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
    margin-top: 35px;
    width: 30%;
    box-shadow: 0.5rem 1rem rgba(0, 0, 0, .15),;
}
</style>