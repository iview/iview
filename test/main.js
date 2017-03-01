/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView, { locale });

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/affix',
            component: require('./routers/affix.vue')
        },
        {
            path: '/grid',
            component: require('./routers/grid.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
