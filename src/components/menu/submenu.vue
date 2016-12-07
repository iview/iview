<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-title']" v-el:reference>
            <span><slot name="title"></slot></span>
            <Icon type="ios-arrow-down"></Icon>
        </div>
        <ul :class="[prefixCls]" v-if="mode === 'vertical'"></ul>
        <Drop v-else v-show="opened" placement="bottom" transition="slide-up" v-ref:drop><slot></slot></Drop>
    </li>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    const prefixCls = 'ivu-menu';

    export default {
        name: 'Submenu',
        components: { Icon, Drop },
        props: {
            key: {
                type: [String, Number],
                required: true
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                active: false,
                opened: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-opened`]: this.opened
                    }
                ]
            },
            mode () {
                return this.$parent.mode;
            }
        },
        methods: {
            handleMouseenter () {
                if (this.mode === 'vertical') return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.opened = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.mode === 'vertical') return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.opened = false;
                }, 150);
            }
        },
        watch: {
            mode (val) {
                if (val === 'horizontal') {
                    this.$refs.drop.update();
                }
            },
            opened (val) {
                if (this.mode === 'vertical') return;
                if (val) {
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        events: {
            'on-menu-item-select' () {
                this.opened = false;
                return true;
            }
        }
    }
</script>