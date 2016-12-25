<template>
    <div :class="classes" :style="style">
        <div :class="prefixCls + '-header'">
            <Checkbox :checked.sync="checkedAll" :disabled="checkedAllDisabled" @on-change="toggleSelectAll"></Checkbox>
            <span>{{ title }}</span>
            <span :class="prefixCls + '-header-count'">{{ count }}</span>
        </div>
        <div :class="bodyClasses">
            <div :class="prefixCls + '-body-search-wrapper'" v-if="filterable">
                <Search
                    :prefix-cls="prefixCls + '-search'"
                    :query.sync="query"
                    :placeholder="filterPlaceholder"></Search>
            </div>
            <ul :class="prefixCls + '-content'">
                <li
                    v-for="item in showItems | filterBy filterData"
                    :class="itemClasses(item)"
                    @click.prevent="select(item)">
                    <Checkbox :checked="isCheck(item)" :disabled="item.disabled"></Checkbox>
                    <span>{{ showLabel(item) }}</span>
                </li>
                <li :class="prefixCls + '-content-not-found'">{{ notFoundText }}</li>
            </ul>
        </div>
        <div :class="prefixCls + '-footer'" v-if="showFooter" v-el:footer><slot></slot></div>
    </div>
</template>
<script>
    import Search from './search.vue';
    import Checkbox from '../checkbox/checkbox.vue';

    export default {
        components: { Search, Checkbox },
        props: {
            prefixCls: String,
            data: Array,
            renderFormat: Function,
            checkedKeys: Array,
            style: Object,
            title: [String, Number],
            filterable: Boolean,
            filterPlaceholder: String,
            filterMethod: Function,
            notFoundText: String,
            validKeysCount: Number
        },
        data () {
            return {
                showItems: [],
                query: '',
                showFooter: true
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.prefixCls}-with-footer`]: this.showFooter
                    }
                ];
            },
            bodyClasses () {
                return [
                    `${this.prefixCls}-body`,
                    {
                        [`${this.prefixCls}-body-with-search`]: this.filterable,
                        [`${this.prefixCls}-body-with-footer`]: this.showFooter
                    }
                ];
            },
            count () {
                const validKeysCount = this.validKeysCount;
                return (validKeysCount > 0 ? `${validKeysCount}/` : '') + `${this.data.length}`;
            },
            checkedAll () {
                return this.data.filter(data => !data.disabled).length === this.validKeysCount && this.validKeysCount !== 0;
            },
            checkedAllDisabled () {
                return this.data.filter(data => !data.disabled).length <= 0;
            }
        },
        methods: {
            itemClasses (item) {
                return [
                    `${this.prefixCls}-content-item`,
                    {
                        [`${this.prefixCls}-content-item-disabled`]: item.disabled
                    }
                ];
            },
            showLabel (item) {
                return this.renderFormat(item);
            },
            isCheck (item) {
                return this.checkedKeys.some(key => key === item.key);
            },
            select (item) {
                if (item.disabled) return;
                const index = this.checkedKeys.indexOf(item.key);
                index > -1 ? this.checkedKeys.splice(index, 1) : this.checkedKeys.push(item.key);
            },
            updateFilteredData () {
                this.showItems = this.data;
            },
            toggleSelectAll (status) {
                this.checkedKeys = status ?
                        this.data.filter(data => !data.disabled || this.checkedKeys.indexOf(data.key) > -1).map(data => data.key) :
                        this.data.filter(data => data.disabled && this.checkedKeys.indexOf(data.key) > -1).map(data => data.key);
            },
            filterData (value) {
                return this.filterMethod(value, this.query);
            }
        },
        created () {
            this.updateFilteredData();

        },
        compiled () {
            this.showFooter = this.$els.footer.innerHTML !== '';
        },
        watch: {
            data () {
                this.updateFilteredData();
            }
        }
    };
</script>
