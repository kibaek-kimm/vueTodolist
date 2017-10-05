import Vue from 'vue';
import App from './components/App.vue'
import store from './store/index'
import ElementUI from 'element-ui'

Vue.use(ElementUI);

new Vue({
    el : '#app',
    store,
    render : h => h(App)
})
