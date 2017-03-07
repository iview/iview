<template>
    <div :class="prefixCls + '-operation'">
        <i-button type="primary" size="small" :disabled="!rightActive" @click.native="moveToLeft">
            <Icon type="ios-arrow-left"></Icon> {{ operations[0] }}
        </i-button>
        <i-button type="primary" size="small" :disabled="!leftActive" @click.native="moveToRight">
            {{ operations[1] }} <Icon type="ios-arrow-right"></Icon>
        </i-button>
    </div>
</template>
<script>
    import iButton from '../button/button.vue';
    import Icon from '../icon/icon.vue';

    export default {
        name: 'Operation',
        components: { iButton, Icon },
        props: {
            prefixCls: String,
            operations: Array,
            leftActive: Boolean,
            rightActive: Boolean
        },
        methods: {
            moveToLeft () {
                this.$parent.moveTo('left');
            },
            moveToRight () {
                this.$parent.moveTo('right');
            }
        }
    };
</script>
