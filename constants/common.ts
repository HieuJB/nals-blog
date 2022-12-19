const constants = {
  ACCESS_TOKEN_KEY: 'access_token',

  STATUS_CODE: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    SYSTEM_ERROR: 500,
  },

  LOCALE: 'en',

  DEFAULT_IMAGE_LINK: '/images/',

  LIMIT_DEFAULT: ['5', '10', '15', '20'],

  SORT: [
    {
      value: 'asc',
      text: 'Ascending',
    },
    {
      value: 'desc',
      text: 'Decrease',
    },
  ],

  QUERY_FILTER: {
    PAGE: '?_page=',
    LIMIT: '&_limit=',
    SORT: '&_sort=',
    ORDER: '&_order=',
    SEARCH: '&q=',
    DETAIL: '?id=',
  },

  FILE_AVAILABLE: '.jpg, .png, .gif',
}

export default constants
