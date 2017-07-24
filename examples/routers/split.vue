<template>
    <div>
        普通
        <Split></Split>
        dashed
        <Split dashed></Split>
        transparent
        <Split transparent></Split>
        small
        <Split small></Split>
        large
        <Split large></Split>

    </div>
</template>
<script>
    import {Alert, Icon} from 'iview';
    export default {
        components: {Alert, Icon}
    };

</script>
