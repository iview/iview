<template>
    <div>
        我的名字叫【{{row.name}}】,今年{{row.age}}岁,家住在:{{row.address}}
    </div>
</template>
<script>
    export default {
        props: {
            row: Object,
            index: Number
        }
    };
</script>
