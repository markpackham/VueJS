// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//install via npm install vue-resource --save
import vueResource from 'vue-resource'

Vue.config.productionTip = false
//Need to do this to import external library
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})
