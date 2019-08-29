<template>
    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
</template>
<script>
    //验证bug #6139
    export default {
        data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            };
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const isSet = Math.ceil(Math.random()*10)%2;
                    let data = [];
                    if( isSet ){
                        data = [
                            {
                                title: 'children-1',
                                loading: false,
                                children: []
                            }
                        ];
                    }
                    callback(data);
                }, 1000);
            }
        }
    };
</script>

<!--<template>-->
<!--    <Tree :data="data2" check-directly show-checkbox></Tree>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                data2: [-->
<!--                    {-->
<!--                        title: 'parent 1',-->
<!--                        expand: true,-->
<!--                        children: [-->
<!--                            {-->
<!--                                title: 'parent 1-1',-->
<!--                                expand: true,-->
<!--                                children: [-->
<!--                                    {-->
<!--                                        title: 'leaf 1-1-1'-->
<!--                                    },-->
<!--                                    {-->
<!--                                        title: 'leaf 1-1-2'-->
<!--                                    }-->
<!--                                ]-->
<!--                            },-->
<!--                            {-->
<!--                                title: 'parent 1-2',-->
<!--                                expand: true,-->
<!--                                children: [-->
<!--                                    {-->
<!--                                        title: 'leaf 1-2-1'-->
<!--                                    },-->
<!--                                    {-->
<!--                                        title: 'leaf 1-2-1'-->
<!--                                    }-->
<!--                                ]-->
<!--                            }-->
<!--                        ]-->
<!--                    }-->
<!--                ]-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
