import { NuxtAxiosInstance } from '@nuxtjs/axios'
import Constants from '~/constants'

export interface ApiResponse<T = any> {
  meta: {
    [key: string]: any
  }
  data: T & { message?: string }
  success: boolean
}

let $axios: NuxtAxiosInstance

export const initializeAxios = (
  axiosInstance: NuxtAxiosInstance,
  { store, redirect, app }: any
) => {
  $axios = axiosInstance

  $axios.interceptors.request.use(
    (config: any): any => {
      store.commit('common/SET_PAGE_LOADING', true)
      return config
    },
    (error: any): any => {
      store.commit('common/SET_PAGE_LOADING', false)
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (res: any): ApiResponse<any> => {
      store.commit('common/SET_PAGE_LOADING', false)
      return {
        data: res,
        meta: {},
        success: true,
      }
    },
    (error: any): ApiResponse<any> => {
      store.commit('common/SET_PAGE_LOADING', false)
      const { response } = error
      const currentRoute = app.router.currentRoute.path

      // if (
      //   currentRoute !== Constants.routePage.HOME &&
      //   response?.status === Constants.common.STATUS_CODE.UNAUTHORIZED
      // ) {
      //   store.commit('auth/SET_ACCESS_TOKEN', null)
      //   store.commit('auth/SET_REFRESH_TOKEN', null)

      //   redirect(Constants.routePage.HOME)
      // }

      return {
        data: { data: response?.data, status: response?.status },
        meta: {},
        success: false,
      }
    }
  )
}

export { $axios }
