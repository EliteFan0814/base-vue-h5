import BaseHeader from './baseComponents/BaseHeader'
import BaseButton from './baseComponents/BaseButton'
import BaseTabbar from './baseComponents/BaseTabbar'

export default (Vue) => {
  Vue.component('BaseHeader', BaseHeader)
  Vue.component('BaseButton', BaseButton)
  Vue.component('BaseTabbar', BaseTabbar)
}
