<template>
  <div class="dropdownitem">
    <comsolt>
      <comsolt>
        <MyDropdownItemImpl v-bind="propsAndAttrs" @click="handleClick">
          <slot></slot>
        </MyDropdownItemImpl>
      </comsolt>
    </comsolt>
  </div>
</template>

<script>
import { computed } from 'vue'
import { dropdownItemProps } from '../dropdown/src/dropdown'
import Comsolt from './comsolt.vue'
import MyDropdownItemImpl from './mydropdownitemimpl.vue'
export default {
  name: 'MyElDropdownItem',
  components: { Comsolt, MyDropdownItemImpl },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ['click'],
  setup(props, { emit, attrs }) {
    function handleClick(i) {
      emit('click', i)
    }
    const propsAndAttrs = computed(() => {
      return { ...props, ...attrs }
    })
    return {
      handleClick,
      propsAndAttrs,
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
.dropdownitem {
  background-color: rgb(230, 233, 232);
}
</style>
