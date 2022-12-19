<template>
  <div class="container">
    <LazyHome
      :listBlog="listBlog"
      :limit="limitDefault"
      :sort="sortDefault"
      :currentPage="currentPage"
      :totalRow="totalRow"
      :isLoading="isLoading"
      @onChangeLimit="(value) => (limitDefault = value)"
      @onChangeSort="(value) => (sortDefault = value)"
      @onChangePagination="(value) => (currentPage = value)"
      @onSeach="handleSearch"
      @refreshList="() => getListBlog()"
    />
  </div>
</template>

<script lang="ts">
import { IBlogList } from '~/entities/blog'
import TheGlobalMixins from '~/mixins/globalMixins'
import mixins from 'vue-typed-mixins'
import _ from 'lodash'

interface IDataProps {
  listBlog: IBlogList[]
  limitDefault: String
  sortDefault: String
  currentPage: Number
  totalRow: Number
  searchText: String
  isLoading: Boolean
}
export default mixins(TheGlobalMixins).extend({
  name: 'IndexPage',

  data(): IDataProps {
    return {
      listBlog: [],
      limitDefault: this.Constants.common.LIMIT_DEFAULT[0].toString(),
      sortDefault: this.Constants.common.SORT[0].value,
      currentPage: 1,
      totalRow: 0,
      sortType: 'id',
      searchText: '',
      isLoading: false,
    }
  },

  computed: {
    changeData() {
      const { limitDefault, sortDefault, currentPage, searchText } = this
      return {
        limitDefault,
        sortDefault,
        currentPage,
      }
    },
  },

  async fetch() {
    await this.getListBlog()
  },

  methods: {
    async getListBlog(): void {
      this.isLoading = true

      const obj = {
        currentPage: this.currentPage,
        limitDefault: this.limitDefault,
        sortType: this.sortType,
        sortDefault: this.sortDefault,
        searchText: this.searchText,
      }

      const response = await this.$repo.blog.getListBlog(obj)

      this.isLoading = false

      if (response.success) {
        this.handleSetPagination(response)

        this.listBlog = response.data.data

        if (!response.data.data.length) {
          this.currentPage = 1
        }

        return
      }

      this.displayToast(response.data, (isSucess = false))
    },

    handleSetPagination(response): void {
      const pagination = response.data.pagination
      this.totalRow = pagination.totalRows
      this.currentPage = pagination.page
      this.limit = pagination.limitDefault
    },

    handleSearch: _.debounce(function (value: string) {
      this.searchText = value
      this.getListBlog()
    }, 500),
  },

  watch: {
    changeData() {
      this.getListBlog()
    },
  },
})
</script>
