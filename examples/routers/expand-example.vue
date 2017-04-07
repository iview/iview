<template>
    <div>
        我的名字叫【{{data.name}}】,今年{{data.age}}岁,家住在:{{data.address}}
    </div>
</template>
<script>
    export default {
        props: {
            data: Object
        }
    };
</script>
