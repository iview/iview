<template>
    <thead>
        <tr>
            <th v-for="column in columns">{{{ renderHeader(column, $index) }}}</th>
        </tr>
    </thead>
</template>
<script>
    export default {
        props: {
            prefixCls: String,
            columns: Array
        },
        data () {
            return {
            
            }
        },
        computed: {
        
        },
        methods: {
            renderHeader (column, $index) {
                if ('renderHeader' in this.columns[$index]) {
                    return this.columns[$index].renderHeader(column, $index);
                } else {
                    return column.title || '#';
                }
            }
        }
    }
</script>