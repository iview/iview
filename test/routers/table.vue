<template>
    <i-button @click="down">down</i-button>
    <checkbox-group :model.sync="tableColumnsChecked" @on-change="changeTableColumns">
        <checkbox value="show">展示</checkbox>
        <checkbox value="weak">唤醒</checkbox>
        <checkbox value="signin">登录</checkbox>
        <checkbox value="click">点击</checkbox>
        <checkbox value="active">激活</checkbox>
        <checkbox value="day7">7日留存</checkbox>
        <checkbox value="day30">30日留存</checkbox>
        <checkbox value="tomorrow">次日留存</checkbox>
        <checkbox value="day">日活跃</checkbox>
        <checkbox value="week">周活跃</checkbox>
        <checkbox value="month">月活跃</checkbox>
        <checkbox value="longText">长文本</checkbox>
    </checkbox-group>
    <Switch size="small" @on-change="switchCellEllipsis"></Switch> Ellipsis
    <i-table :content="self" :data="tableData2" :columns="tableColumns2" border v-ref:table></i-table>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                tableData2: this.mockTableData2(),
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month', 'longText']
            }
        },
        methods: {
            mockTableData2 () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: '推广名称' + (i+1),
                        fav: 0,
                        show: getNum(),
                        weak: getNum(),
                        signin: getNum(),
                        click: getNum(),
                        active: getNum(),
                        day7: getNum(),
                        day30: getNum(),
                        tomorrow: getNum(),
                        day: getNum(),
                        week: getNum(),
                        month: getNum(),
                        longText: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                    })
                }
                return data;
            },
            getTable2Columns () {
                const table2ColumnList = {
                    name: {
                        title: '名称',
                        key: 'name',
                        fixed: 'left',
                        width: 200,
                        render (row, column, index) {
                            return `<Icon style="cursor: pointer" type="ios-star-outline" v-if="tableData2[${index}].fav === 0" @click="toggleFav(${index})"></Icon>
                                    <Icon style="cursor: pointer;color:#f60" type="ios-star" v-if="tableData2[${index}].fav === 1" @click="toggleFav(${index})"></Icon>
                                    <span>${row.name}</span>`;
                        }
                    },
                    show: {
                        title: '展示',
                        key: 'show',
                        width: 150,
                        sortable: true
                    },
                    weak: {
                        title: '唤醒',
                        key: 'weak',
                        width: 150,
                        sortable: true
                    },
                    signin: {
                        title: '登录',
                        key: 'signin',
                        width: 150,
                        sortable: true
                    },
                    click: {
                        title: '点击',
                        key: 'click',
                        width: 150,
                        sortable: true
                    },
                    active: {
                        title: '激活',
                        key: 'active',
                        width: 150,
                        sortable: true
                    },
                    day7: {
                        title: '7日留存',
                        key: 'day7',
                        width: 150,
                        sortable: true
                    },
                    day30: {
                        title: '30日留存',
                        key: 'day30',
                        width: 150,
                        sortable: true
                    },
                    tomorrow: {
                        title: '次日留存',
                        key: 'tomorrow',
                        width: 150,
                        sortable: true
                    },
                    day: {
                        title: '日活跃',
                        key: 'day',
                        width: 150,
                        sortable: true
                    },
                    week: {
                        title: '周活跃',
                        key: 'week',
                        width: 150,
                        sortable: true
                    },
                    month: {
                        title: '月活跃',
                        key: 'month',
                        width: 150,
                        sortable: true
                    },
                    longText: {
                        title: '长文本',
                        key: 'longText',
                        width: 150,
                        ellipsis: arguments[0] || false
                    }
                };

                let data = [table2ColumnList.name];

                this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

                return data;
            },
            changeTableColumns () {
                this.tableColumns2 = this.getTable2Columns();
            },
            switchCellEllipsis (status) {
                this.tableColumns2 = this.getTable2Columns(status);
            },
            toggleFav (index) {
                this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
            },
            down () {
                this.$refs.table.exportCsv({
                    filename: '2132',
                    original: false
                });
            }
        },
        ready () {
            this.changeTableColumns();
        }
    }
</script>
