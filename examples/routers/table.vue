<!--<template>-->
    <!--<Table border :columns="columns6" :data="data5"></Table>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--columns6: [-->
                    <!--{-->
                        <!--title: 'Date',-->
                        <!--key: 'date'-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Name',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Gender',-->
                        <!--key: 'gender'-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Age',-->
                        <!--key: 'age',-->
                        <!--fixed: 'left',-->
<!--//                        fixed: 'right',-->
                        <!--filters: [-->
                            <!--{-->
                                <!--label: 'Greater than 25',-->
                                <!--value: 1-->
                            <!--},-->
                            <!--{-->
                                <!--label: 'Less than 25',-->
                                <!--value: 2-->
                            <!--}-->
                        <!--],-->
                        <!--filterMultiple: false,-->
                        <!--filterMethod (value, row) {-->
                            <!--if (value === 1) {-->
                                <!--return row.age > 25;-->
                            <!--} else if (value === 2) {-->
                                <!--return row.age < 25;-->
                            <!--}-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Address',-->
                        <!--key: 'address',-->
                        <!--fixed: 'left',-->
                        <!--filters: [-->
                            <!--{-->
                                <!--label: 'New York',-->
                                <!--value: 'New York'-->
                            <!--},-->
                            <!--{-->
                                <!--label: 'London',-->
                                <!--value: 'London'-->
                            <!--},-->
                            <!--{-->
                                <!--label: 'Sydney',-->
                                <!--value: 'Sydney'-->
                            <!--}-->
                        <!--],-->
                        <!--filterMethod (value, row) {-->
                            <!--return row.address.indexOf(value) > -1;-->
                        <!--}-->
                    <!--}-->
                <!--],-->
                <!--data5: [-->
                    <!--{-->
                        <!--name: 'John Brown',-->
                        <!--age: 18,-->
                        <!--gender: 'male',-->
                        <!--address: 'New York No. 1 Lake Park',-->
                        <!--date: '2016-10-03'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Jim Green',-->
                        <!--age: 24,-->
                        <!--gender: 'female',-->
                        <!--address: 'London No. 1 Lake Park',-->
                        <!--date: '2016-10-01'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Joe Black',-->
                        <!--age: 30,-->
                        <!--gender: 'male',-->
                        <!--address: 'Sydney No. 1 Lake Park',-->
                        <!--date: '2016-10-02'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Jon Snow',-->
                        <!--age: 26,-->
                        <!--gender: 'male',-->
                        <!--address: 'Ottawa No. 2 Lake Park',-->
                        <!--date: '2016-10-04'-->
                    <!--}-->
                <!--],-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <Table border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        fixed: 'right',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
