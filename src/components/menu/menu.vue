<template>
    <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
    import { oneOf, findComponentsDownward, findBrothersComponents } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'Menu',
        mixins: [ Emitter ],
        props: {
            mode: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'vertical'
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            activeName: {
                type: [String, Number]
            },
            openNames: {
                type: Array,
                default () {
                    return [];
                }
            },
            accordion: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                currentActiveName: this.activeName
            };
        },
        computed: {
            classes () {
                let theme = this.theme;
                if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

                return [
                    `${prefixCls}`,
                    `${prefixCls}-${theme}`,
                    {
                        [`${prefixCls}-${this.mode}`]: this.mode
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.mode === 'vertical') style.width = this.width;

                return style;
            }
        },
        methods: {
            updateActiveName () {
                if (this.currentActiveName === undefined) {
                    this.currentActiveName = -1;
                }
                this.broadcast('Submenu', 'on-update-active-name', false);
                this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
            },
            updateOpenKeys (name) {
                const index = this.openNames.indexOf(name);
                if (index > -1) {
                    this.openNames.splice(index, 1);
                } else {
                    this.openNames.push(name);
                    if (this.accordion) {
                        let currentSubmenu = {};
                        findComponentsDownward(this, 'Submenu').forEach(item => {
                            if (item.name === name) currentSubmenu = item;
                        });
                        findBrothersComponents(currentSubmenu, 'Submenu').forEach(item => {
                            let index = this.openNames.indexOf(item.name);
                            this.openNames.splice(index, index >= 0 ? 1 : 0);
                        });
                        this.openNames.push(name);
                    }
                }
            },
            updateOpened () {
                const items = findComponentsDownward(this, 'Submenu');

                if (items.length) {
                    items.forEach(item => {
                        if (this.openNames.indexOf(item.name) > -1) item.opened = true;
                    });
                }
            }
        },
        mounted () {
            this.updateActiveName();
            this.updateOpened();
            this.$on('on-menu-item-select', (name) => {
                this.currentActiveName = name;
                this.$emit('on-select', name);
            });
        },
        watch: {
            openNames () {
                this.$emit('on-open-change', this.openNames);
            },
            activeName (val) {
                this.currentActiveName = val;
            },
            currentActiveName () {
                this.updateActiveName();
            }
        }
    };
</script>
