<template>
    <div class="ivu-cell-item">
        <div class="ivu-cell-icon">
            <slot name="icon"></slot>
        </div>
        <div class="ivu-cell-main">
            <div class="ivu-cell-title" v-if="title !== ''">{{ title }}</div>
            <div class="ivu-cell-label" v-if="label !== ''">{{ label }}</div>
            <slot></slot>
        </div>
        <div class="ivu-cell-footer">
            <span class="ivu-cell-extra" v-if="extra !== ''">{{ extra }}</span>
            <slot name="extra" v-else></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            extra: {
                type: String,
                default: ''
            },
        }
    }
</script>