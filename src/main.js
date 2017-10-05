import Vue from 'vue';
import App from './components/App.vue'
import store from './store/index'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'

Vue.use(ElementUI , {locale});

new Vue({
    el : '#app',
    store,
    render : h => h(App)
})
