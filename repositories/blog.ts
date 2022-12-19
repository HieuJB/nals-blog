import { $axios, ApiResponse } from '~/utils/axios'
import RouteApi from '~/constants/route-api'
import { IBlogList } from '~/entities/blog'
import { IBlogModel } from '~/models/index'
import Utils from '~/utils/index'

const getListBlog = async (
  payload: Record<string, string> | string
): Promise<ApiResponse<IBlogList[]>> => {
  const filters = Utils.helper.buildQueryFilter(payload)

  return await $axios.get(`${RouteApi.BLOG.BASE}${filters}`)
}

const addBlog = async (
  payload: IBlogModel
): Promise<ApiResponse<IBlogList>> => {
  return await $axios.post(RouteApi.BLOG.BASE, payload)
}

const updateBlog = async (
  id: string,
  payload: Record<string, string>
): Promise<ApiResponse<IBlogList>> => {
  return await $axios.put(`${RouteApi.BLOG.BASE}/${id}`, payload)
}

export interface RepoBlogProps {
  getListBlog: (
    payload: Record<string, string>
  ) => Promise<ApiResponse<IBlogList[]>>
  addBlog: (payload: IBlogModel) => Promise<ApiResponse<IBlogList>>
  updateBlog: (
    id: string,
    payload: Record<string, string>
  ) => Promise<ApiResponse<IBlogList>>
}

const Blog: RepoBlogProps = {
  getListBlog,
  addBlog,
  updateBlog,
}

export default Blog
