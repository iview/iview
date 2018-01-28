<template>
    <div class="fixButton" :class="btnType" :style="{position: position}">{{text}}</div>
</template>

<script>
export default {
    name: 'fixButton',
    props: {
        type: String,
        text: String
    },
    computed: {
        btnType() {
            return `fixButton-${this.type}`
        }
    },
    data() {
        return {
            position: 'fixed'
        }
    },
    created() {
        let Vm = this
        let height = window.innerHeight
        window.onresize = function(event) {
            if (height !== event.target.innerHeight) {
                Vm.position = 'relative'
            } else {
                Vm.position = 'fixed'
            }
        }
    },
    destroyed() {
        window.onresize = null
    }
}
</script>

<style lang="less">
@import "../../styles/custom.less";
.fixButton {
    bottom: 0;
    height: 45px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    &-primary {
        background-color: @primary-color;
        color: #fff;
        &:active {
            background-color: darken(@primary-color, -5%);
        }
    }
    &-disable {
        background-color: @btn-disable-color;
        color: #fff;
    }
    &-error {
        background-color: #fff;
        color: @error-color;
    }
}
</style>
