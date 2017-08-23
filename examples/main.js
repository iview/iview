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
        },
        {
            path: '/button',
            component: require('./routers/button.vue')
        },
        {
            path: '/input',
            component: require('./routers/input.vue')
        },
        {
            path: '/radio',
            component: require('./routers/radio.vue')
        },
        {
            path: '/checkbox',
            component: require('./routers/checkbox.vue')
        },
        {
            path: '/steps',
            component: require('./routers/steps.vue')
        },
        {
            path: '/timeline',
            component: require('./routers/timeline.vue')
        },
        {
            path: '/switch',
            component: require('./routers/switch.vue')
        },
        {
            path: '/alert',
            component: require('./routers/alert.vue')
        },
        {
            path: '/badge',
            component: require('./routers/badge.vue')
        },
        {
            path: '/tag',
            component: require('./routers/tag.vue')
        },
        {
            path: '/input-number',
            component: require('./routers/input-number.vue')
        },
        {
            path: '/upload',
            component: require('./routers/upload.vue')
        },
        {
            path: '/progress',
            component: require('./routers/progress.vue')
        },
        {
            path: '/collapse',
            component: require('./routers/collapse.vue')
        },
        {
            path: '/carousel',
            component: require('./routers/carousel.vue')
        },
        {
            path: '/card',
            component: require('./routers/card.vue')
        },
        {
            path: '/tree',
            component: require('./routers/tree.vue')
        },
        {
            path: '/rate',
            component: require('./routers/rate.vue')
        },
        {
            path: '/circle',
            component: require('./routers/circle.vue')
        },
        {
            path: '/tabs',
            component: require('./routers/tabs.vue')
        },
        {
            path: '/tooltip',
            component: require('./routers/tooltip.vue')
        },
        {
            path: '/poptip',
            component: require('./routers/poptip.vue')
        },
        {
            path: '/slider',
            component: require('./routers/slider.vue')
        },
        {
            path: '/dropdown',
            component: require('./routers/dropdown.vue')
        },
        {
            path: '/breadcrumb',
            component: require('./routers/breadcrumb.vue')
        },
        {
            path: '/menu',
            component: require('./routers/menu.vue')
        },
        {
            path: '/spin',
            component: require('./routers/spin.vue')
        },
        {
            path: '/cascader',
            component: require('./routers/cascader.vue')
        },
        {
            path: '/select',
            component: require('./routers/select.vue')
        },
        {
            path: '/backtop',
            component: require('./routers/back-top.vue')
        },
        {
            path: '/page',
            component: require('./routers/page.vue')
        },
        {
            path: '/transfer',
            component: require('./routers/transfer.vue')
        },
        {
            path: '/date',
            component: require('./routers/date.vue')
        },
        {
            path: '/form',
            component: require('./routers/form.vue')
        },
        {
            path: '/table',
            component: require('./routers/table.vue')
        },
        {
            path: '/loading-bar',
            component: require('./routers/loading-bar.vue')
        },
        {
            path: '/modal',
            component: require('./routers/modal.vue')
        },
        {
            path: '/message',
            component: require('./routers/message.vue')
        },
        {
            path: '/notice',
            component: require('./routers/notice.vue')
        },
        {
            path: '/avatar',
            component: require('./routers/avatar.vue')
        },
        {
            path: '/color-picker',
            component: require('./routers/color-picker.vue')
        },
        {
            path: '/auto-complete',
            component: require('./routers/auto-complete.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
