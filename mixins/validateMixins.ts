import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'

const TheValidateMixins = Vue.extend({
  mixins: [validationMixin],

  props: {
    required: Boolean,

    maxLength: {
      type: Number,
      default: undefined,
    },

    minLength: {
      type: Number,
      default: undefined,
    },
  },

  computed: {
    validateTypeList(): String[] {
      return this.$_.compact(
        Object.entries(this.$v.currentValue.$params).map(
          ([key, value]: any) => {
            return value ? key : null
          }
        )
      )
    },
  },

  validations(): any {
    return {
      currentValue: {
        required: this.required ? required : true,
        maxLength: this.maxLength ? maxLength(this.maxLength) : true,
        minLength: this.minLength ? minLength(this.minLength) : true,
      },
    }
  },

  methods: {
    validate(): any {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        return this.currentValue
      }
      return false
    },

    resetValidate() {
      this.$v.$reset()
    },
  },
})

export default TheValidateMixins
