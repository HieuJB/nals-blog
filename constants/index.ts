import common from './common'
import routePage from './route-page'
import routeApi from './route-api'

export interface ConstantsProps {
  common: typeof common
  routePage: typeof routePage
  routeApi: typeof routeApi
}

const constants: ConstantsProps = {
  common,
  routePage,
  routeApi,
}

export default constants
