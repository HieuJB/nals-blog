<template>
  <b-img-lazy v-bind="$attrs" :src="getImageUrl()"></b-img-lazy>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheImageLazy',

  props: {
    isOnlineImage: Boolean,
  },

  methods: {
    getImageUrl(): String {
      if (this.isOnlineImage) {
        return this.$attrs.src
      }

      return `${this.Constants.common.DEFAULT_IMAGE_LINK + this.$attrs.src}`
    },
  },
})
</script>
