<style>
table {
    border-collapse: collapse;
    border-spacing: 0;
}

</style>
<template>
    <div>
        <!-- <br><br><br><br><br> -->
        <!-- <Table border  :show-header='false' :columns="columns1" height="500" :data="data1"></Table> -->
        <!-- <Table border :columns="columns1" height='300'></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table width="550" height="200" border :columns="columns2" :data="data4"></Table> -->
        <!--<br><br><br><br><br>-->
        <!-- <Table border :columns="columns5" height="240" :data="data5"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border :columns="columns6" :data="data5"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border  :show-header='false' :columns="columns7"  height="200" :data="data7"></Table> -->
        <!-- <Table border :columns="columns7"  height="240" :data="data7"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border :columns="columns8"  :data="data7" height="200"></Table> -->
        <!-- <Table border :columns="columns8" height="200"></Table> -->
        <!-- <br><br><br><br><br> -->
        <c-table>
            <!-- <span slot="name" slot-scope="scope">
                <div>
                    {{scope.row.name}}
                </div>
            </span> -->
        </c-table>
    </div>
</template>
<script>
import cTable from './cTable';
export default {
    data() {
        return {}
    },
    mounted() {},
    methods: {},
    components: {
        cTable
    }
}

</script>
