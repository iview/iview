<template>
    <div :class="prefixCls + '-operation'">
        <template v-if="reverseOperation">
            <i-button type="primary" size="small" :disabled="!leftActive" @click.native="moveToRight">
                <span>{{ operations[1] }}</span> <Icon type="ios-arrow-forward"></Icon>
            </i-button>
            <i-button type="primary" size="small" :disabled="!rightActive" @click.native="moveToLeft">
                <Icon type="ios-arrow-back"></Icon> <span>{{ operations[0] }}</span>
            </i-button>
        </template>
        <template v-else>
            <i-button type="primary" size="small" :disabled="!rightActive" @click.native="moveToLeft">
                <Icon type="ios-arrow-back"></Icon> <span>{{ operations[0] }}</span>
            </i-button>
            <i-button type="primary" size="small" :disabled="!leftActive" @click.native="moveToRight">
                <span>{{ operations[1] }}</span> <Icon type="ios-arrow-forward"></Icon>
            </i-button>
        </template>
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
            rightActive: Boolean,
            reverseOperation: Boolean
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
