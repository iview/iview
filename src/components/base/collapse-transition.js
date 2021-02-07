import { addClass, removeClass } from '../../utils/assist';

export default {
    name: 'CollapseTransition',
    functional: true,
    props: {
        appear: Boolean
    },
    render(h, { children, props, listeners }) {
        const data = {
            on: {
                beforeEnter(el) {
                    addClass(el, 'collapse-transition');
                    if (!el.dataset) el.dataset = {};

                    el.dataset.oldPaddingTop = el.style.paddingTop;
                    el.dataset.oldPaddingBottom = el.style.paddingBottom;

                    el.style.height = '0';
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                    listeners['transition-before-enter'] && listeners['transition-before-enter'](el);
                },

                enter(el) {
                    el.dataset.oldOverflow = el.style.overflow;
                    if (el.scrollHeight !== 0) {
                        el.style.height = el.scrollHeight + 'px';
                        el.style.paddingTop = el.dataset.oldPaddingTop;
                        el.style.paddingBottom = el.dataset.oldPaddingBottom;
                    } else {
                        el.style.height = '';
                        el.style.paddingTop = el.dataset.oldPaddingTop;
                        el.style.paddingBottom = el.dataset.oldPaddingBottom;
                    }

                    el.style.overflow = 'hidden';
                    listeners['transition-enter'] && listeners['transition-enter'](el);
                },

                afterEnter(el) {
                    // for safari: remove class then reset height is necessary
                    removeClass(el, 'collapse-transition');
                    el.style.height = '';
                    el.style.overflow = el.dataset.oldOverflow;
                    listeners['transition-after-enter'] && listeners['transition-after-enter'](el);
                },

                beforeLeave(el) {
                    if (!el.dataset) el.dataset = {};
                    el.dataset.oldPaddingTop = el.style.paddingTop;
                    el.dataset.oldPaddingBottom = el.style.paddingBottom;
                    el.dataset.oldOverflow = el.style.overflow;

                    el.style.height = el.scrollHeight + 'px';
                    el.style.overflow = 'hidden';
                },

                leave(el) {
                    if (el.scrollHeight !== 0) {
                        // for safari: add class after set height, or it will jump to zero height suddenly, weired
                        addClass(el, 'collapse-transition');
                        el.style.height = 0;
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                    }
                    listeners['transition-leave'] && listeners['transition-leave'](el);
                },

                afterLeave(el) {
                    removeClass(el, 'collapse-transition');
                    el.style.height = '';
                    el.style.overflow = el.dataset.oldOverflow;
                    el.style.paddingTop = el.dataset.oldPaddingTop;
                    el.style.paddingBottom = el.dataset.oldPaddingBottom;
                    listeners['transition-after-leave'] && listeners['transition-after-leave'](el);
                }
            },
            props: {
                appear: props.appear
            }
        };

        return h('transition', data, children);
    }
};
