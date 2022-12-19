<template>
  <div class="container my-2">
    <TheSpinner class="mt-2">
      <div v-if="!isShownPage">
        <TheImageLazy
          class="w-100"
          height="400"
          :src="blog.image"
          isOnlineImage
        />
        <TheHeadingBlog class="font-weight-bold h2 my-2 text-success">{{
          blog.title
        }}</TheHeadingBlog>
        <TheText>{{ blog.content }}</TheText>
        <TheButton variant="outline-primary" @click="$router.push('/')"
          >Home</TheButton
        >
      </div>
    </TheSpinner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IBlogList } from '~/entities/blog'
interface IDataProps {
  blog: IBlogList
  slug: Number
}
export default Vue.extend({
  data(): IDataProps {
    return {
      blog: {},
    }
  },

  computed: {
    isShownPage(): Boolean {
      return this.$store.state.common.isLoading
    },
  },

  async created() {
    const { data } = await this.$repo.blog.getListBlog(
      this.$router.currentRoute.params.slug
    )
    this.blog = data[0]
  },
})
</script>
