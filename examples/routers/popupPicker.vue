<template>
    <div>
        <popupPicker :title="title2" :data="list2" v-model="value2" cancelText="取消" confirmText="确定"></popupPicker>
    </div>
</template>

<script>
export default {
    name: 'popup-picker',
    data() {
        return {
            title2: '详细机型',
            list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
            value2: ['iPhone', '华为3'],
        }
    }
}
</script>

<style>

</style>
