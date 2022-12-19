<template>
  <b-modal v-model="currentValue" v-bind="$attrs" v-on="$listeners">
    <slot />
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  model: {
    prop: 'inputValue',
    event: 'input',
  },

  props: {
    inputValue: Boolean,
  },

  computed: {
    currentValue: {
      get(): Boolean {
        return this.inputValue
      },

      set(value: any): void {
        this.$emit('input', value)
      },
    },
  },
})
</script>
