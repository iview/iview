export default {
    methods: {
        alignCls (column) {
            return [
                {
                    [`${this.prefixCls}-column-${column.align}`]: column.align,
                    [`${this.prefixCls}-hidden`]: (this.fixed === 'left' && column.fixed !== 'left') || (this.fixed === 'right' && column.fixed !== 'right') || (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
                }
            ]
        },
        isPopperShow (column) {
            return column.filters && ((!this.fixed && !column.fixed) || (this.fixed === 'left' && column.fixed === 'left') || (this.fixed === 'right' && column.fixed === 'right'));
        },
        setCellWidth (column, index) {
            // return column.width ? column.width : this.columnsWidth[index];
            let width = '';
            if (column.width) {
                width = column.width;
            } else if (this.columnsWidth[column._index]) {
                width = this.columnsWidth[column._index].width
            }
            // return this.columnsWidth[column._index] ? this.columnsWidth[column._index].width : '';
            return width;
        }
    }
}