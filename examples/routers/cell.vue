<template>
    <div style="margin: 100px;background: #f8f8f9;padding: 100px;">
        <Card title="选项" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="标题一" label="附属内容" to="/button"></Cell>
                <Cell title="标题一" label="附属内容" extra="详细信息"></Cell>
                <Cell title="标题一" label="附属内容" extra="详细信息" to="/button"></Cell>
                <Cell title="标题一" label="附属内容" selected></Cell>
                <Cell title="标题二">
                    <Icon type="trash-a" slot="icon"></Icon>
                </Cell>
                <Cell title="标题三"></Cell>
                <Cell title="标题四" selected></Cell>
                <Cell title="标题五"></Cell>
                <Cell title="标题六" disabled></Cell>
                <Cell title="标题七" extra="详细信息"></Cell>
                <Cell title="标题七" extra="详细信息" selected></Cell>
                <Cell title="标题七" label="附属内容" extra="详细信息"></Cell>
                <Cell title="标题八"></Cell>
                <Cell title="标题九"></Cell>
            </CellGroup>
        </Card>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
