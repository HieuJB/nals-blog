<template>
  <div v-bind="$attrs">
    <b-skeleton-wrapper :loading="isLoading">
      <template #loading>
        <div class="blog-skeleton d-flex align-items-center" v-if="isLoading">
          <LazyTheSkeleton type="avatar" animation="fade" />
          <div class="w-100 ml-1">
            <LazyTheSkeleton animation="fade" width="85%" />
            <LazyTheSkeleton animation="fade" width="55%" />
            <LazyTheSkeleton animation="fade" width="70%" />
          </div>
        </div>
      </template>

      <div class="blog-content" v-if="!isLoading">
        <LazyTheImageLazy
          isOnlineImage
          :class="styleClass.classImage"
          width="100"
          height="100"
          :src="imageLink"
        />
        <div>
          <LazyTheHeadingBlog :class="styleClass.classHeading">
            {{ title }}
          </LazyTheHeadingBlog>
          <LazyTheText :class="styleClass.classText">
            {{ content }}
          </LazyTheText>
        </div>
        <slot />
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ITheCardBlog } from '~/models/index'
export default Vue.extend({
  props: {
    styleClass: {
      type: Object as PropType<ITheCardBlog>,
      default: (): ITheCardBlog => ({
        classImage: '',
        classHeading: '',
        classText: '',
      }),
    },

    imageLink: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    content: {
      type: String,
      default: '',
    },

    limit: {
      type: Number,
      default: 0,
    },

    isLoading: Boolean,

    isOnlineImage: Boolean,
  },
})
</script>
