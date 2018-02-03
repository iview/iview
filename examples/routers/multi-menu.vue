<template>
    <div>
        <MultiMenu :config="config" :data="data" @on-select="handleSelect" @on-open-change="handleOpen">
        </MultiMenu>
        <br>
        <p>切换主题</p>
        <Radio-group v-model="config.theme">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </Radio-group>
        <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                config: {
                    theme: 'dark',
                    'active-name': '1',
                    accordion: true,
                    'open-names': ['3', '3-3', '3-3-3'],
                },
                data: [
                    { name: '1', icon: 'ios-paper', title: '一级1', },
                    { name: '2', icon: 'ios-people', title: '一级2', },
                    { 
                        name: '3', icon: 'ios-people', title: '一级2', 
                        children: [
                            { name: '3-1', title: '二级1', },
                            { name: '3-2', title: '二级2', },
                            {
                                name: '3-3', icon: 'stats-bars', title: '二级3',
                                children: [
                                    { name: '3-3-1', title: '三级1', },
                                    { name: '3-3-2', title: '三级2', },
                                    {
                                        name: '3-3-3', icon: 'stats-bars', title: '三级3',
                                        children: [
                                            { name: '3-3-3-1', title: '四级1', },
                                            { name: '3-3-3-2', title: '四级2', },
                                            {
                                                title: 'Menu-Group',
                                                groups: [
                                                    { name: '3-3-3-3-1', icon: 'document-text', title: 'Group-item1', },
                                                    { name: '3-3-3-3-2', icon: 'chatbubbles', title: 'Group-item2', },
                                                    { 
                                                        name: '3-3-3-3-3',
                                                        // icon: 'chatbubbles',
                                                        title: 'Group-item3',
                                                        children: [
                                                            { name: '3-3-3-3-3-1', title: 'Group-item2 1'}
                                                        ]
                                                    },
                                                ]
                                            }
                                        ]
                                    }, {
                                        name: '3-3-4', icon: 'stats-bars', title: '三级4',
                                        children: [
                                            { name: '3-3-4-1', title: '四级1', },
                                            { name: '3-3-4-2', title: '四级2', },
                                        ]
                                    }
                                ]
                            }, {
                                name: '3-4', icon: 'stats-bars', title: '二级4',
                                children: [
                                    { name: '3-4-1', title: '三级1', },
                                    { name: '3-4-2', title: '三级2', },
                                ]
                            }
                        ]
                    },
                    { name: '4', icon: 'settings', title: '一级4', },
                ],
                theme1: 'dark',
                value4: '',
                openArr: ['3', '3-3', '3-3-3']
            };
        },
        methods: {
            handleSelect (name) {
                console.log(name);
                return name;
            },
            handleOpen (openArr) {
                console.log(openArr);
                return openArr;
            }
        }
    };
</script>
