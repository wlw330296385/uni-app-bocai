import Vue from 'vue'
import App from './App'
import snoopyHttp from '@/common/vmeitime-http'

Vue.config.productionTip = false
Vue.prototype.$shoopyHttp = snoopyHttp
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
