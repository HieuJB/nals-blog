<template>
  <b-overlay :show="isLoading" v-bind="$attrs" rounded="sm">
    <slot></slot>
  </b-overlay>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isLoading(): Boolean {
      return this.$store.state.common.isLoading
    },
  },
})
</script>
