<template>
    <div style="margin: 50px;width: 300px;">
        <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            multiple
            type="drag"
            :max-size="10000"
            :default-file-list="defaultFileList">
            <div style="padding: 40px 100px">
                <i-button>上传</i-button>
            </div>
            <!--<div slot="tip">只能上传 jpg/png 格式的文件</div>-->
        </Upload>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                defaultFileList: [
                    {
                        'name': 'Vue.js权威指南.zip',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': 'Vue.js权威指南.doc',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': '套马的汉子.mp3',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': '风景.jpg',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': 'Vue.js权威指南.mp4',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': '套马的汉子.csv',
                        'url': 'http://www.baidu.com'
                    },
                    {
                        'name': '风景.ppt',
                        'url': 'http://www.baidu.com'
                    },
                ]
            };
        },
        computed: {},
        methods: {}
    };
</script>