<template>
  <div class="the-upload">
    <label>{{ label }}</label>

    <b-form-file
      v-model="currentValue"
      v-bind="$attrs"
      v-on="$listeners"
      @change="(value) => $emit('onChange', value)"
    ></b-form-file>

    <div v-if="isUploadValidate && $v.$error">
      <b-form-invalid-feedback
        v-for="(item, index) in validateTypeList"
        :key="index"
        :state="$v.currentValue[`${item}`]"
      >
        {{
          Utils.helper.getValidationMessage(label, item, minLength, maxLength)
        }}
      </b-form-invalid-feedback>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import TheValidateMixins from '~/mixins/validateMixins'
export default mixins(TheValidateMixins).extend({
  name: 'TheUpload',
  mixins: [TheValidateMixins],

  model: {
    prop: 'inputValue',
    event: 'input',
  },

  props: {
    label: {
      type: String,
      default: '',
    },

    inputValue: {
      type: File,
      default: null,
    },

    isUploadValidate: Boolean,
  },

  computed: {
    currentValue: {
      get(): any {
        return this.inputValue
      },

      set(value: any): void {
        this.$emit('input', value)
      },
    },
  },
})
</script>
