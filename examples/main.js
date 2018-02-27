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
    esModule: false,
    routes: [
        {
            path: '/layout',
            component: (resolve) => require(['./routers/layout.vue'], resolve)
        },
        {
            path: '/affix',
            component: (resolve) => require(['./routers/affix.vue'], resolve)
        },
        {
            path: '/grid',
            component: (resolve) => require(['./routers/grid.vue'], resolve)
        },
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        },
        {
            path: '/input',
            component: (resolve) => require(['./routers/input.vue'], resolve)
        },
        {
            path: '/radio',
            component: (resolve) => require(['./routers/radio.vue'], resolve)
        },
        {
            path: '/checkbox',
            component: (resolve) => require(['./routers/checkbox.vue'], resolve)
        },
        {
            path: '/steps',
            component: (resolve) => require(['./routers/steps.vue'], resolve)
        },
        {
            path: '/timeline',
            component: (resolve) => require(['./routers/timeline.vue'], resolve)
        },
        {
            path: '/switch',
            component: (resolve) => require(['./routers/switch.vue'], resolve)
        },
        {
            path: '/alert',
            component: (resolve) => require(['./routers/alert.vue'], resolve)
        },
        {
            path: '/badge',
            component: (resolve) => require(['./routers/badge.vue'], resolve)
        },
        {
            path: '/tag',
            component: (resolve) => require(['./routers/tag.vue'], resolve)
        },
        {
            path: '/input-number',
            component: (resolve) => require(['./routers/input-number.vue'], resolve)
        },
        {
            path: '/upload',
            component: (resolve) => require(['./routers/upload.vue'], resolve)
        },
        {
            path: '/progress',
            component: (resolve) => require(['./routers/progress.vue'], resolve)
        },
        {
            path: '/collapse',
            component: (resolve) => require(['./routers/collapse.vue'], resolve)
        },
        {
            path: '/carousel',
            component: (resolve) => require(['./routers/carousel.vue'], resolve)
        },
        {
            path: '/card',
            component: (resolve) => require(['./routers/card.vue'], resolve)
        },
        {
            path: '/tree',
            component: (resolve) => require(['./routers/tree.vue'], resolve)
        },
        {
            path: '/rate',
            component: (resolve) => require(['./routers/rate.vue'], resolve)
        },
        {
            path: '/circle',
            component: (resolve) => require(['./routers/circle.vue'], resolve)
        },
        {
            path: '/tabs',
            component: (resolve) => require(['./routers/tabs.vue'], resolve)
        },
        {
            path: '/tooltip',
            component: (resolve) => require(['./routers/tooltip.vue'], resolve)
        },
        {
            path: '/poptip',
            component: (resolve) => require(['./routers/poptip.vue'], resolve)
        },
        {
            path: '/slider',
            component: (resolve) => require(['./routers/slider.vue'], resolve)
        },
        {
            path: '/dropdown',
            component: (resolve) => require(['./routers/dropdown.vue'], resolve)
        },
        {
            path: '/breadcrumb',
            component: (resolve) => require(['./routers/breadcrumb.vue'], resolve)
        },
        {
            path: '/menu',
            component: (resolve) => require(['./routers/menu.vue'], resolve)
        },
        {
            path: '/spin',
            component: (resolve) => require(['./routers/spin.vue'], resolve)
        },
        {
            path: '/cascader',
            component: (resolve) => require(['./routers/cascader.vue'], resolve)
        },
        {
            path: '/select',
            component: (resolve) => require(['./routers/select.vue'], resolve)
        },
        {
            path: '/backtop',
            component: (resolve) => require(['./routers/back-top.vue'], resolve)
        },
        {
            path: '/page',
            component: (resolve) => require(['./routers/page.vue'], resolve)
        },
        {
            path: '/transfer',
            component: (resolve) => require(['./routers/transfer.vue'], resolve)
        },
        {
            path: '/date',
            component: (resolve) => require(['./routers/date.vue'], resolve)
        },
        {
            path: '/form',
            component: (resolve) => require(['./routers/form.vue'], resolve)
        },
        {
            path: '/table',
            component: (resolve) => require(['./routers/table.vue'], resolve)
        },
        {
            path: '/loading-bar',
            component: (resolve) => require(['./routers/loading-bar.vue'], resolve)
        },
        {
            path: '/modal',
            component: (resolve) => require(['./routers/modal.vue'], resolve)
        },
        {
            path: '/message',
            component: (resolve) => require(['./routers/message.vue'], resolve)
        },
        {
            path: '/notice',
            component: (resolve) => require(['./routers/notice.vue'], resolve)
        },
        {
            path: '/avatar',
            component: (resolve) => require(['./routers/avatar.vue'], resolve)
        },
        {
            path: '/color-picker',
            component: (resolve) => require(['./routers/color-picker.vue'], resolve)
        },
        {
            path: '/auto-complete',
            component: (resolve) => require(['./routers/auto-complete.vue'], resolve)
        },
        {
            path: '/scroll',
            component: (resolve) => require(['./routers/scroll.vue'], resolve)
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
