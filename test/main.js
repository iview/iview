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
var router = new VueRouter({
    history: true
});

router.map({
    '/button': {
        component: function (resolve) {
            require(['./routers/button.vue'], resolve);
        }
    },
    '/card': {
        component: function (resolve) {
            require(['./routers/card.vue'], resolve);
        }
    },
    '/message': {
        component: function (resolve) {
            require(['./routers/message.vue'], resolve);
        }
    },
    '/more': {
        component: function (resolve) {
            require(['./routers/more.vue'], resolve);
        }
    },
    '/page': {
        component: function (resolve) {
            require(['./routers/page.vue'], resolve);
        }
    },
    '/poptip': {
        component: function (resolve) {
            require(['./routers/poptip.vue'], resolve);
        }
    },
    '/radio': {
        component: function (resolve) {
            require(['./routers/radio.vue'], resolve);
        }
    },
    '/select': {
        component: function (resolve) {
            require(['./routers/select.vue'], resolve);
        }
    },
    '/slider': {
        component: function (resolve) {
            require(['./routers/slider.vue'], resolve);
        }
    },
    '/step': {
        component: function (resolve) {
            require(['./routers/step.vue'], resolve);
        }
    },
    '/switch': {
        component: function (resolve) {
            require(['./routers/switch.vue'], resolve);
        }
    },
    '/alert': {
        component: function (resolve) {
            require(['./routers/alert.vue'], resolve);
        }
    },
    '/tag': {
        component: function (resolve) {
            require(['./routers/tag.vue'], resolve);
        }
    },
    '/input': {
        component: function (resolve) {
            require(['./routers/input.vue'], resolve);
        }
    },
    '/tooltip': {
        component: function (resolve) {
            require(['./routers/tooltip.vue'], resolve);
        }
    },
    '/cascader': {
        component: function (resolve) {
            require(['./routers/cascader.vue'], resolve);
        }
    },
    '/transfer': {
        component: function (resolve) {
            require(['./routers/transfer.vue'], resolve);
        }
    },
    '/table': {
        component: function (resolve) {
            require(['./routers/table.vue'], resolve);
        }
    },
    '/dropdown': {
        component: function (resolve) {
            require(['./routers/dropdown.vue'], resolve);
        }
    },
    '/tabs': {
        component: function (resolve) {
            require(['./routers/tabs.vue'], resolve);
        }
    },
    '/menu': {
        component: function (resolve) {
            require(['./routers/menu.vue'], resolve);
        }
    },
    '/date': {
        component: function (resolve) {
            require(['./routers/date.vue'], resolve);
        }
    },
    '/form': {
        component: function (resolve) {
            require(['./routers/form.vue'], resolve);
        }
    },
    '/carousel': {
        component: function (resolve) {
            require(['./routers/carousel.vue'], resolve);
        }
    },
    '/rate': {
        component: function (resolve) {
            require(['./routers/rate.vue'], resolve);
        }
    },
    '/upload': {
        component: function (resolve) {
            require(['./routers/upload.vue'], resolve);
        }
    },
    '/tree': {
        component: function (resolve) {
            require(['./routers/tree.vue'], resolve);
        }
    },
    '/notice': {
        component: function (resolve) {
            require(['./routers/notice.vue'], resolve);
        }
    },
});

router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.afterEach(function (transition) {

});

router.redirect({
    '*': "/button"
});
router.start(App, '#app');
