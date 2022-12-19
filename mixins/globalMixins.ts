import Vue from 'vue'

const TheGlobalMixins = Vue.extend({
  methods: {
    displayToast(content: string, isSucess: boolean = true) {
      this.$bvToast.toast(content, {
        title: isSucess
          ? this.$t('successful').toString()
          : this.$t('error').toString(),
        variant: isSucess ? 'primary' : 'danger',
        toaster: 'b-toaster-top-center',
      })
    },
  },
})

export default TheGlobalMixins
