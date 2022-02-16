<template>
  <div>-----</div>
  <div class="dropdownitemimpl" @click="(e) => $emit('click', e)">
    <slot></slot>
  </div>
  <div>-----</div>
</template>

<script>
export default {
  name: 'MyDropdownItemImpl',
  emits: ['click'],
  data() {
    return {}
  },
}
</script>

<style></style>
