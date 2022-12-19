import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ redirect, Constants, route }) => {
  // if (!$cookies.get(Constants.common.ACCESS_TOKEN_KEY)) {
  //   redirect(Constants.routePage.HOME)
  // }
}

export default auth
