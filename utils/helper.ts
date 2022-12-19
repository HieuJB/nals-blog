import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { i18n } from './i18n'
import Constants from '~/constants'

const toCamelCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        camelCase(key),
        toCamelCase(val),
      ])
    )
  } else {
    return obj.map((el) => toCamelCase(el))
  }
}

const toSnakeCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        snakeCase(key),
        toSnakeCase(val),
      ])
    )
  } else {
    return obj.map((el) => toSnakeCase(el))
  }
}

const getValidationMessage = (
  label: string,
  type: string,
  minLength: number,
  maxLength: number
): string => {
  switch (type) {
    case 'required':
      return i18n.t('validate.required', [label])

    case 'minLength':
      return i18n.t('validate.minLength', [label, minLength])

    case 'maxLength':
      return i18n.t('validate.maxLength', [label, maxLength])

    default:
      return ''
  }
}

export const buildQueryFilter = (
  payload: Record<string, string> | string
): string => {
  const { currentPage, limitDefault, sortType, sortDefault, searchText } =
    payload as Record<string, string>
  const { PAGE, LIMIT, SORT, ORDER, SEARCH } = Constants.common.QUERY_FILTER
  let result = ''

  if (typeof payload === 'string') {
    result = Constants.common.QUERY_FILTER.DETAIL + payload
  } else {
    result = [
      PAGE,
      currentPage,
      LIMIT,
      limitDefault,
      SORT,
      sortType,
      ORDER,
      sortDefault,
      SEARCH,
      searchText,
    ]
      .toString()
      .replace(/,/g, '')
  }

  return result
}

const fileToBase64 = (files: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader() as any
    reader.readAsDataURL(files[0])
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error: any) => reject(error)
  })
}

export interface UtilHelperProps {
  toCamelCase: (obj: object) => any
  toSnakeCase: (obj: object) => any
  getValidationMessage: (
    label: string,
    type: string,
    minLength: number,
    maxLength: number
  ) => string
  buildQueryFilter: typeof buildQueryFilter
  fileToBase64: typeof fileToBase64
}

const helper: UtilHelperProps = {
  toCamelCase,
  toSnakeCase,
  getValidationMessage,
  buildQueryFilter,
  fileToBase64,
}

export default helper
