<!--<template>-->
    <!--<div>-->
        <!--<Tree :data="baseData" :load-data="loadData" multiple :render="renderFunc"></Tree>-->
        <!--<Button @click="handleAdd">add</Button>-->
        <!--<Button @click="handleUpdate">update</Button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--baseData: [-->
                    <!--{-->
                        <!--expand: true,-->
                        <!--title: 'parent 1',-->
                        <!--children: [-->
                            <!--{-->
                                <!--title: 'parent 1-0',-->
                                <!--expand: false,-->
                                <!--children: [],-->
                                <!--loading: false-->
                            <!--},-->
                            <!--{-->
                                <!--title: 'parent 1-1',-->
                                <!--expand: true,-->
                                <!--checked: true,-->
                                <!--children: [-->
                                    <!--{-->
                                        <!--title: 'leaf',-->
                                        <!--render: (h, { node }) => {-->
                                            <!--return h('Button', {-->
                                                <!--props: {-->
                                                    <!--type: 'primary',-->
                                                    <!--size: 'small'-->
                                                <!--},-->
                                                <!--on: {-->
                                                    <!--click: ({target}) => {-->
                                                        <!--this.logger(target.textContent);-->
                                                    <!--}-->
                                                <!--}-->
                                            <!--}, node.title + '000');-->
                                        <!--}-->
                                    <!--}-->
                                <!--]-->
                            <!--}-->
                        <!--]-->
                    <!--}-->
                <!--]-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--handleAdd () {-->
                <!--this.baseData.push(-->
                    <!--{-->
                        <!--title: 'test name',-->
                        <!--checked: true-->
                    <!--}-->
                <!--);-->
            <!--},-->
            <!--handleUpdate () {-->
                <!--const child = this.baseData[0].children[0].children[1];-->
              <!--//  console.log(JSON.stringify(this.baseData), '\n', JSON.stringify(child));-->
                <!--if (!child) return this.$Message.error('Node is async and is not loaded yet');-->
                <!--else this.$set(child, 'checked', true);-->
            <!--},-->
            <!--logger (txt) {-->
                <!--console.log(txt);-->
            <!--},-->
            <!--loadData (item, callback) {-->
                <!--setTimeout(() => {-->
                    <!--callback([-->
                        <!--{-->
                            <!--title: 'children-1',-->
<!--//                            loading: false,-->
                            <!--children: []-->
                        <!--},-->
                        <!--{-->
                            <!--title: 'children-2',-->
<!--//                            loading: false,-->
                            <!--children: []-->
                        <!--}-->
                    <!--]);-->
                <!--}, 2000);-->
            <!--},-->
            <!--renderFunc (h, { node }) {-->
                <!--return h('Button', {-->
                    <!--props: {-->
                        <!--type: 'ghost'-->
                    <!--}-->
                <!--}, node.title)-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->


<template>
    <div style="width: 400px;">
        <Tree :data="data4" :render="renderContent"></Tree>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { node }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', node.title),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(node) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(node) }
                            }
                        })
                    ])
                ]);
            },
            append (node) {
                this.$set(node, 'children', [{
                    title: 'appended node',
                    expand: true
                }]);
            },
            remove (node) {
                const parent = node.parent;
                console.log(node);
            }
        }
    }
</script>