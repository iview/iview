<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="style">
        <colgroup>
            <col v-for="column in columns" :width="setCellWidth(column, $index)">
        </colgroup>
        <thead>
            <tr>
                <th v-for="column in columns" :class="alignCls(column)">
                    <div :class="[prefixCls + '-cell', {[prefixCls + '-hidden']: !fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')}]">
                        <template v-if="column.type === 'selection'"><Checkbox :checked="isSelectAll" @on-change="selectAll"></Checkbox></template>
                        <template v-else>{{{ renderHeader(column, $index) }}}</template>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</template>
<script>
    import Checkbox from '../checkbox/checkbox.vue';
    import Mixin from './mixin';
    import { deepCopy } from '../../utils/assist';

    export default {
        mixins: [ Mixin ],
        components: { Checkbox },
        props: {
            prefixCls: String,
            style: Object,
            columns: Array,
            cloneData: Array,
            fixed: Boolean
        },
        computed: {
            isSelectAll () {
                return !this.cloneData.some(data => !data._isChecked);
            }
        },
        methods: {
            setCellWidth (column, index) {
                return this.$parent.setCellWidth(column, index);
            },
            renderHeader (column, $index) {
                if ('renderHeader' in this.columns[$index]) {
                    return this.columns[$index].renderHeader(column, $index);
                } else {
                    return column.title || '#';
                }
            },
            selectAll () {
                const status = !this.isSelectAll;

                let tmpData = deepCopy(this.cloneData);
                tmpData.forEach((data) => {
                    data._isChecked = status;
                });
                this.cloneData = tmpData;

                if (status) {
                    this.$parent.selectAll();
                }
            }
        }
    }
</script>