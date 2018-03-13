<template>
    <div :class="prefixCls + '-operation'" v-if="type === 'horizontal'">
        <i-button type="primary" size="small" :disabled="!rightActive" @click.native="moveToLeft">
            <Icon type="ios-arrow-left"></Icon> {{ operations[0] }}
        </i-button>
        <i-button type="primary" size="small" :disabled="!leftActive" @click.native="moveToRight">
            {{ operations[1] }} <Icon type="ios-arrow-right"></Icon>
        </i-button>
    </div>

    <div :class="prefixCls + '-operation'" v-else-if="type === 'vertical'">
        <i-button type="primary" size="small" :disabled="!upActive" @click.native="moveToUp">
            <Icon type="ios-arrow-up"></Icon> {{ operations[2] }}
        </i-button>
        <i-button type="primary" size="small" :disabled="!downActive" @click.native="moveToDown">
            {{ operations[3] }} <Icon type="ios-arrow-down"></Icon>
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
            type: String,
            prefixCls: String,
            operations: Array,
            leftActive: Boolean,
            rightActive: Boolean,
            upActive: Boolean,
            downActive: Boolean
        },
        methods: {
            moveToLeft () {
                this.$parent.moveTo('left');
            },
            moveToRight () {
                this.$parent.moveTo('right');
            },
            moveToUp () {
                this.$parent.moveTo('up');
            },
            moveToDown () {
                this.$parent.moveTo('down');
            }
        }
    };
</script>
