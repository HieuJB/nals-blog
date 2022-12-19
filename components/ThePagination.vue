<template>
  <div class="overflow-auto">
    <b-pagination
      v-bind="$attrs"
      :value="currentPage"
      :total-rows="totalRow"
      :per-page="limit"
      @change="(value) => $emit('onChange', value)"
    ></b-pagination>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    totalRow: {
      type: Number,
      default: 0,
    },

    limit: {
      type: Number,
      default: 0,
    },

    currentPage: {
      type: Number,
      default: 0,
    },
  },
})
</script>
