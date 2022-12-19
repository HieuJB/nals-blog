<template>
  <TheSpinner>
    <LazyTheInput
      required
      ref="title"
      placeholder="Enter Title"
      isInputValidate
      v-model="form.title"
      :label="$t('title')"
    />
    <LazyTheInput
      required
      ref="content"
      placeholder="Enter Content"
      isInputValidate
      v-model="form.content"
      :label="$t('content')"
      isTextArea
    />
    <LazyTheUpload
      required
      ref="image"
      v-model="form.image"
      isUploadValidate
      :label="$t('uploadImage')"
      :placeholder="$t('chooseFile')"
      :accept="Constants.common.FILE_AVAILABLE"
      @change="onChangeImage"
      required
    />
  </TheSpinner>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import TheGlobalMixins from '~/mixins/globalMixins'
import TheValidateMixins from '~/mixins/validateMixins'
interface IDataProps {
  form: Record<string, string | null>
}
export default mixins(TheGlobalMixins, TheValidateMixins).extend({
  name: 'ModalAddBlog',
  mixins: [TheGlobalMixins, TheValidateMixins],

  props: {
    isEditModal: {
      type: Boolean,
      default: false,
    },

    idBlogEdit: {
      type: String,
      default: '',
    },
  },

  data(): IDataProps {
    return {
      form: {
        title: '',
        content: '',
        image: null,
      },
    }
  },

  async mounted() {
    this.getBlogDetail()
  },

  methods: {
    async submitForm(): void {
      const refs = ['title', 'content', 'image']
      let isSucess = true
      for (const value of refs) {
        const isValidateSucess = this.$refs[value].validate()

        if (!isValidateSucess) {
          isSucess = isValidateSucess
        }
      }

      if (!isSucess) {
        return
      }

      const response = !this.idBlogEdit
        ? await this.$repo.blog.addBlog(this.form)
        : await this.$repo.blog.updateBlog(this.idBlogEdit, this.form)

      if (response.success) {
        this.displayToast(!this.idBlogEdit ? 'Added' : 'Edited')
        this.$emit('refreshList')
        return
      }
    },

    async getBlogDetail(): void {
      if (this.isEditModal) {
        const { data } = await this.$repo.blog.getListBlog(`${this.idBlogEdit}`)
        this.form.title = data[0].title
        this.form.content = data[0].content
        this.form.image = data[0].image
      }
    },

    async onChangeImage(event: any): void {
      const files = event.target.files
      if (!files.length) {
        return
      }

      if (!files[0].type.includes('image')) {
        return
      }

      this.form.image = await this.Utils.helper.fileToBase64(files)
    },
  },
})
</script>
