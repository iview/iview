<template>
    <div class="ivu-cell-item">
        <div class="ivu-cell-icon">
            <slot name="icon"></slot>
        </div>
        <div class="ivu-cell-main">
            <div class="ivu-cell-title"><slot>{{ title }}</slot></div>
            <div class="ivu-cell-label"><slot name="label">{{ label }}</slot></div>
        </div>
        <div class="ivu-cell-footer">
            <span class="ivu-cell-extra"><slot name="extra">{{ extra }}</slot></span>
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
    };
</script>