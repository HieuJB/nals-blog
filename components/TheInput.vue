<template>
  <b-form-group
    class="example-input-group"
    :label="label"
    label-for="example-input"
  >
    <b-form-input
      v-if="!isTextArea"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="$v.currentValue.$model"
      @input="(value) => $emit('onChange', value)"
      :state="isInputValidate && $v.currentValue.$dirty ? !$v.$error : null"
    >
    </b-form-input>

    <b-form-textarea
      v-else
      v-bind="$attrs"
      v-on="$listeners"
      v-model="$v.currentValue.$model"
      @input="(value) => $emit('onChange', value)"
      :state="isInputValidate && $v.currentValue.$dirty ? !$v.$error : null"
    ></b-form-textarea>

    <div v-if="isInputValidate && $v.$error">
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
  </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue'
import mixins from 'vue-typed-mixins'
import TheValidateMixins from '~/mixins/validateMixins'
export default mixins(TheValidateMixins).extend({
  name: 'TheInput',
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
      type: String || Number,
      default: '',
    },

    isInputValidate: Boolean,

    isTextArea: Boolean,
  },

  computed: {
    currentValue: {
      get(): String {
        return this.inputValue
      },

      set(value: any): void {
        this.$emit('input', value)
      },
    },
  },
})
</script>
