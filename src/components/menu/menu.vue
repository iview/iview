<template>
    <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-menu';

    export default {
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
            activeKey: {
                type: [String, Number]
            },
            openKeys: {
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
            updateActiveKey () {
                this.$children.forEach((item, index) => {
                    if (!this.activeKey && index === 0) {
                        this.activeKey = -1;
                    }

                    if (item.$options.name === 'Submenu') {
                        item.active = false;
                        item.$children.forEach(subitem => {
                            if (subitem.$options.name === 'MenuGroup') {
                                subitem.$children.forEach(groupItem => {
                                    if (groupItem.key === this.activeKey) {
                                        groupItem.active = true;
                                        groupItem.$parent.$parent.active = true;
                                    } else {
                                        groupItem.active = false;
                                    }
                                });
                            } else if (subitem.$options.name === 'MenuItem') {
                                if (subitem.key === this.activeKey) {
                                    subitem.active = true;
                                    subitem.$parent.active = true;
                                } else {
                                    subitem.active = false;
                                }
                            }
                        });
                    } else if (item.$options.name === 'MenuGroup') {
                        item.$children.forEach(groupItem => {
                            groupItem.active = groupItem.key === this.activeKey;
                        });
                    } else if (item.$options.name === 'MenuItem') {
                        item.active = item.key === this.activeKey;
                    }
                });
            },
            updateOpenKeys (key) {
                const index = this.openKeys.indexOf(key);
                if (index > -1) {
                    this.openKeys.splice(index, 1);
                } else {
                    this.openKeys.push(key);
                }
            },
            updateOpened () {
                this.$children.forEach(item => {
                    if (item.$options.name === 'Submenu') {
                        if (this.openKeys.indexOf(item.key) > -1) item.opened = true;
                    }
                });
            }
        },
        compiled () {
            this.updateActiveKey();
            this.updateOpened();
        },
        events: {
            'on-menu-item-select' (key) {
                this.activeKey = key;
                this.updateActiveKey();
                this.$emit('on-select', key);
            }
        },
        watch: {
            openKeys () {
                this.$emit('on-open-change', this.openKeys);
            }
        }
    };
</script>
