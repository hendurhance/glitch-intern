<template>
   <header>
       <h1> {{title}} </h1>
   </header>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
header{
    padding-top: 2rem;

}

h1{
    color: #efe4e8;
    text-align: center;
    word-spacing: 1rem;
    font-size: 2.5rem;
    letter-spacing: 5px;
}
</style>