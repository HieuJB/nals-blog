<template>
  <div v-bind="$attrs">
    <label v-if="label.length">
      {{ label }}
    </label>

    <b-form-select
      :value="valueSelect"
      @change="(value) => $emit('onChange', value)"
      :options="options"
    ></b-form-select>

    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ITheSelect } from '~/models/index'
export default Vue.extend({
  name: 'IndexPage',

  props: {
    options: {
      type: Array as PropType<ITheSelect[]>,
      default: () => [],
    },

    label: {
      type: String,
      default: '',
    },

    valueSelect: {
      type: String,
      default: '',
    },
  },
})
</script>
