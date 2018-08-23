<template>
    <div></div>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';
    import TransferDom from '../../directives/transfer-dom';
    import ScrollbarMixins from '../modal/mixins-scrollbar';

    const prefixCls = 'ivu-drawer';

    export default {
        name: 'Drawer',
        mixins: [ ScrollbarMixins ],
        components: { Icon },
        directives: { TransferDom },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            width: {
                type: [Number, String],
                default: 256
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            mask: {
                type: Boolean,
                default: true
            },
            maskStyle: {
                type: Object
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['left', 'right']);
                },
                default: 'right'
            },
            zIndex: {
                type: Number,
                default: 1000
            },
            transfer: {
                type: Boolean,
                default () {
                    return !this.$IVIEW || this.$IVIEW.transfer === '' ? true : this.$IVIEW.transfer;
                }
            },
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: this.value,
            };
        },
        methods: {

        }
    };
</script>