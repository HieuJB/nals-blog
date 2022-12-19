<template>
  <div class="container">
    <h1 v-if="error.statusCode === Constants.common.STATUS_CODE.PAGE_NOT_FOUND">
      Page not found
    </h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink :to="Constants.routePage.HOME">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
