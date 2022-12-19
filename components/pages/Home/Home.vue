<template>
  <div class="dash-board my-2">
    <div class="dash-board__select d-flex justify-content-between">
      <div class="dash-board__select-sort d-flex">
        <LazyTheSelect
          class="select d-flex align-items-center"
          :options="Constants.common.LIMIT_DEFAULT"
          :label="$t('select.limit')"
          :valueSelect="limit"
          @onChange="(value) => $emit('onChangeLimit', value)"
        />

        <LazyTheSelect
          class="select d-flex align-items-center"
          :options="Constants.common.SORT"
          :label="$t('select.sortByDate')"
          :valueSelect="sort"
          @onChange="(value) => $emit('onChangeSort', value)"
        />
      </div>

      <div class="dash-board__select-add">
        <LazyTheButton @click="openModalAddBlog" variant="info">{{
          $t('addBlog')
        }}</LazyTheButton>
      </div>
    </div>

    <LazyTheInput
      isSearch
      :placeholder="$t('enterHereToSearch')"
      @onChange="(value) => $emit('onSeach', value)"
    >
    </LazyTheInput>

    <LazyTheCardBlog
      v-for="(item, index) in listBlog"
      :key="index"
      :imageLink="item.image"
      :limit="limit"
      :title="item.title"
      :content="item.content"
      class="card-blog"
      isOnlineImage
      :isLoading="isLoading"
    >
      <div class="card-btn">
        <LazyTheButton
          @click="redirectDetailBlog(item.id)"
          variant="outline-primary"
          >{{ $t('btn.details') }}</LazyTheButton
        >

        <LazyTheButton @click="openModalEditBlog(item.id)" variant="success">{{
          $t('btn.edit')
        }}</LazyTheButton>
      </div>
    </LazyTheCardBlog>

    <LazyTheText v-if="!listBlog.length">
      {{ $t('emptySearch') }}
    </LazyTheText>

    <LazyThePagination
      :limit="limit"
      :currentPage="currentPage"
      :totalRow="totalRow"
      class="pagination"
      @onChange="(value) => $emit('onChangePagination', value)"
    />

    <LazyTheModal
      @ok="handleSubmitForm"
      size="lg"
      v-model="isShownModal"
      :title="$t('addBlog')"
    >
      <LazyModalAddBlog
        :isEditModal="isEditModal"
        :idBlogEdit="idBlogEdit"
        ref="modalAddBlog"
        @refreshList="handleRefreshList"
      />
    </LazyTheModal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IBlogList } from '~/entities/blog'
interface IDataProps {
  isShownModal: Boolean
  title: String
  isEditModal: Boolean
  idBlogEdit: String
}
export default Vue.extend({
  name: 'Home-Component',

  props: {
    listBlog: {
      type: Array as PropType<IBlogList[]>,
      default: () => [],
    },

    limit: {
      type: String,
      default: '',
    },

    sort: {
      type: String,
      default: '',
    },

    currentPage: {
      type: Number,
      default: 0,
    },

    totalRow: {
      type: Number,
      default: 0,
    },

    isLoading: Boolean,
  },

  data(): IDataProps {
    return {
      isShownModal: false,
      title: '',
      isEditModal: false,
      idBlogEdit: '',
    }
  },

  methods: {
    handleSubmitForm(e: any) {
      const vm = this.$refs as any
      vm.modalAddBlog.submitForm()
      e.preventDefault()
    },

    handleRefreshList() {
      this.isShownModal = false
      this.$emit('refreshList')
    },

    redirectDetailBlog(id: string) {
      this.$router.push({
        path: '/' + id,
      })
    },

    openModalAddBlog() {
      this.isEditModal = false
      this.isShownModal = !this.isShownModal
    },

    openModalEditBlog(id: string) {
      this.isEditModal = true
      this.idBlogEdit = `${id}`
      this.isShownModal = !this.isShownModal
    },
  },
})
</script>

<style lang="scss" scoped src="@/assets/styles/components/home.scss"></style>
