<template>
    <div :class="classes" :style="style">
        <Notice v-for="notice in notices"
            :prefix-cls="prefixCls"
            :style="notice.style"
            :content="notice.content"
            :duration="notice.duration"
            :closable="notice.closable"
            :key="notice.key"
            :transition-name="notice.transitionName"
            :on-close="notice.onClose">
        </Notice>
    </div>
</template>
<script>
    import Notice from './notice.vue';

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
            style: {
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
                notices: []
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
            }
        },
        methods: {
            add (notice) {
                const key = notice.key || getUuid();

                let _notice = Object.assign({
                    style: {
                        right: '50%'
                    },
                    content: '',
                    duration: 1.5,
                    closable: false,
                    key: key
                }, notice);

                this.notices.push(_notice);
            },
            close (key) {
                const notices = this.notices;

                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].key === key) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    };
</script>
