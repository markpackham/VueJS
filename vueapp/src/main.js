// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import Users from './components/Users'
import Test from './components/Test'

//install via npm install vue-resource --save
import vueResource from 'vue-resource'
//npm install vue-router --save
import vueRouter from 'vue-router'


Vue.config.productionTip = false
//Need to do this to import external library
Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', components: Users},
        {path: '/test', components: Test}
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    //el: '#app',
    //components: {App},
    //template: '<App/>'
    template: `<div id="app">
<ul>
<li>
<router-link to="/">Users</router-link>
</li>
<li>
<router-link to="/test">Test</router-link>
</li>
</ul>
<!-- output content in router-view -->
<router-view>
</router-view>
</div>
`,
}).$mount('#app')
