import { ConstantsProps } from '@/constants'
import { LoDashStatic } from 'lodash'
import { UtilsProps } from '@/utils'
import { RepositoryProps } from '@/repositories'

declare module 'vue/types/vue' {
  interface Vue {
    Constants: ConstantsProps
    $_: LoDashStatic
    Utils: UtilsProps
    $repo: RepositoryProps
  }
}

declare module '@nuxt/types' {
  interface Context {
    Constants: ConstantsProps
    $_: LoDashStatic
    Utils: UtilsProps
    $repo: RepositoryProps
  }
}
