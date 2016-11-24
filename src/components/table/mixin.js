export default {
    methods: {
        alignCls (column) {
            return column.align ? `${this.prefixCls}-column-${column.align}` : '';
        }
    }
}