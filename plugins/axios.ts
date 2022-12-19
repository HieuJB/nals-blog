import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/axios'
import Utils from '~/utils'

const axios: Plugin = ({ $axios, Constants, $_, store, redirect, app }) => {
  $axios.onRequest((config) => {
    // const accessToken = $cookies.get(Constants.common.ACCESS_TOKEN_KEY)

    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    // }

    if (!$_.isEmpty(config.data)) {
      config.data = Utils.helper.toSnakeCase(config.data)
    }

    if (!$_.isEmpty(config.params)) {
      config.params = Utils.helper.toSnakeCase(config.params)
    }
  })

  $axios.onResponse((res) => {
    return Utils.helper.toCamelCase(res.data)
  })

  initializeAxios($axios, { store, redirect, app })
}

export default axios
