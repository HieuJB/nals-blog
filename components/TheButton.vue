<template>
  <b-button v-bind="$attrs" v-on="$listeners">
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheButton',
})
</script>
