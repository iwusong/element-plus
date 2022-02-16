<template>
  <div class="dropdown">
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyElDropdown',
  components: {},
  data() {
    return {}
  },
  methods: {
    log(i) {
      console.log(i)
    },
  },
}
</script>

<style>
.dropdown {
  width: 10vw;
  height: 15vh;

  background-color: rgb(159, 228, 219);
  margin: 30px;
}
</style>
