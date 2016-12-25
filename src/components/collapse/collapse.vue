<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-collapse';

    export default {
        props: {
            accordion: {
                type: Boolean,
                default: false
            },
            activeKey: {
                type: [Array, String]
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        compiled () {
            this.setActive();
        },
        methods: {
            setActive () {
                const activeKey = this.getActiveKey();

                this.$children.forEach((child, index) => {
                    const key = child.key || index.toString();
                    let isActive = false;

                    if (self.accordion) {
                        isActive = activeKey === key;
                    } else {
                        isActive = activeKey.indexOf(key) > -1;
                    }

                    child.isActive = isActive;
                    child.index = index;
                });
            },
            getActiveKey () {
                let activeKey = this.activeKey || [];
                const accordion = this.accordion;

                if (!Array.isArray(activeKey)) {
                    activeKey = [activeKey];
                }

                if (accordion && activeKey.length > 1) {
                    activeKey = [activeKey[0]];
                }

                for (let i = 0; i < activeKey.length; i++) {
                    activeKey[i] = activeKey[i].toString();
                }

                return activeKey;
            },
            toggle (data) {
                const key = data.key.toString();
                let newActiveKey = [];

                if (this.accordion) {
                    if (!data.isActive) {
                        newActiveKey.push(key);
                    }
                } else {
                    let activeKey = this.getActiveKey();
                    const keyIndex = activeKey.indexOf(key);

                    if (data.isActive) {
                        if (keyIndex > -1) {
                            activeKey.splice(keyIndex, 1);
                        }
                    } else {
                        if (keyIndex < 0) {
                            activeKey.push(key);
                        }
                    }

                    newActiveKey = activeKey;
                }

                this.activeKey = newActiveKey;
                this.$emit('on-change', newActiveKey);
            }
        },
        watch: {
            activeKey () {
                this.setActive();
            }
        }
    };
</script>
