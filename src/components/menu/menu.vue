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
                type: Array,
                default () {
                    return []
                }
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
                        [`${prefixCls}-${this.theme}`]: this.mode === 'horizontal' || (this.mode === 'vertical' && this.theme !== 'primary')
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
                    } else if (item.$options.name === 'MenuGroup') {
                        item.$children.forEach(groupItem => {
                            groupItem.active = groupItem.key === this.activeKey;
                        })
                    } else {
                        item.active = item.key === this.activeKey;
                    }
                })
            },
            updateOpenKeys (key) {
                const index = this.openKeys.indexOf(key);
                if (index > -1) {
                    this.openKeys.splice(index, 1);
                } else {
                    this.openKeys.push(key);
                }
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
        },
        watch: {
            openKeys () {
                this.$emit('on-open-change', this.openKeys);
            }
        }
    }
</script>