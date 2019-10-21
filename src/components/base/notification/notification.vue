<template>
    <div :class="classes" :style="wrapStyles">
        <Notice
            v-for="notice in notices"
            :key="notice.name"
            :prefix-cls="prefixCls"
            :styles="notice.styles"
            :type="notice.type"
            :content="notice.content"
            :duration="notice.duration"
            :render="notice.render"
            :has-title="notice.hasTitle"
            :withIcon="notice.withIcon"
            :closable="notice.closable"
            :name="notice.name"
            :transition-name="notice.transitionName"
            :background="notice.background"
            :msg-type="notice.msgType"
            :on-close="notice.onClose">
        </Notice>
    </div>
</template>
<script>
    import Notice from './notice.vue';

    import { transferIndex, transferIncrease } from '../../../utils/transfer-queue';

    const prefixCls = 'ivu-notification';
    let seed = 0;
    const now = Date.now();

    function getUuid () {
        return 'ivuNotification_' + now + '_' + (seed++);
    }

    export default {
        components: { Notice },
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            },
            styles: {
                type: Object,
                default: function () {
                    return {
                        top: '65px',
                        left: '50%'
                    };
                }
            },
            content: {
                type: String
            },
            className: {
                type: String
            }
        },
        data () {
            return {
                notices: [],
                tIndex: this.handleGetIndex()
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            wrapStyles () {
                let styles = Object.assign({}, this.styles);
                styles['z-index'] = 1010 + this.tIndex;

                return styles;
            }
        },
        methods: {
            add (notice) {
                const name = notice.name || getUuid();

                let _notice = Object.assign({
                    styles: {
                        right: '50%'
                    },
                    content: '',
                    duration: 1.5,
                    closable: false,
                    name: name
                }, notice);

                this.notices.push(_notice);
                this.tIndex = this.handleGetIndex();
            },
            close (name) {
                const notices = this.notices;
                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].name === name) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            },
            closeAll () {
                this.notices = [];
            },
            handleGetIndex () {
                transferIncrease();
                return transferIndex;
            },
        }
    };
</script>
