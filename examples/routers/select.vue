<template>
    <div style="width: 200px;margin: 100px;">
        {{ model }}
        <i-select v-model="model" filterable remote :remote-method="remoteMethod" :loading="loading" clearable style="width:200px">
            <i-option v-for="option in options" :value="option.value" :key="option">{{option.label}}</i-option>
        </i-select>
        <!--<Button @click="handleAdd">+</Button>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                model: '',
                options: [

                ],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
            }
        },
        mounted () {
            this.options = [
//                {
//                    label: '全部',
//                    value: 0
//                },{
//                    label: '苹果',
//                    value: 1
//                },{
//                    label: '香蕉',
//                    value: 2
//                },{
//                    label: '西瓜',
//                    value: 3
//                }
            ];
        },
        methods: {
            handleAdd () {
                this.options = [
                    {
                        label: '全部',
                        value: 0
                    },{
                        label: '苹果',
                        value: 1
                    },{
                        label: '香蕉',
                        value: 2
                    },{
                        label: '西瓜',
                        value: 3
                    }
                ]
            },
            remoteMethod (query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                    .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 500);
                } else {
                    this.options = [];
                }
            }
        },
        mounted () {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        }
    }
</script>