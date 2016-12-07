<template>
    <ul :class="classes"><slot></slot></ul>
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
                type: Array
            },
            accordion: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {

            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.mode}`]: this.mode,
                        [`${prefixCls}-${this.theme}`]: this.theme
                    }
                ]
            }
        },
        methods: {
            updateActiveKey () {
                this.$children.forEach((item, index) => {
                    if (!this.activeKey && index === 0) this.activeKey = item.key;

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
                                })
                            } else {
                                if (subitem.key === this.activeKey) {
                                    subitem.active = true;
                                    subitem.$parent.active = true;
                                } else {
                                    subitem.active = false;
                                }
                            }
                        })
                    } else {
                        item.active = item.key === this.activeKey;
                    }
                })
            }
        },
        compiled () {
            this.updateActiveKey();
        },
        events: {
            'on-menu-item-select' (key) {
                this.activeKey = key;
                this.updateActiveKey();
                this.$emit('on-select', key);
            }
        }
    }
</script>