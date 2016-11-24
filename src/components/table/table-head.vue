<template>
    <thead>
        <tr>
            <th v-for="column in columns" :class="alignCls(column)">
                <div :class="[prefixCls + '-cell']">
                    <template v-if="column.type === 'selection'"><Checkbox :checked="isSelectAll" @on-change="selectAll"></Checkbox></template>
                    <template v-else>{{{ renderHeader(column, $index) }}}</template>
                </div>
            </th>
        </tr>
    </thead>
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
            columns: Array,
            cloneData: Array
        },
        data () {
            return {
            
            }
        },
        computed: {
            isSelectAll () {
                return !this.cloneData.some(data => !data._isChecked);
            }
        },
        methods: {
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