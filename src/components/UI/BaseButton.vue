<template>
  <a :href="href" :class="mode">
      <slot></slot>
  </a>
</template>

<script>
export default {
    props: ['mode', 'href']
}
</script>

<style>
a{
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    color: #efe4e8;
}

</style>