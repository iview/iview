<template>
    <div id="editor"></div>
</template>

<script>
//    const Editor = require('wangeditor')
    import Editor from 'wangeditor'

    export default {
        name: 'Editor',
        props:{
          defaultContent:{
              type:String
          }
        },
        mounted () {
            const e = new Editor('#editor')
            e.customConfig.onchange = (html) => {
                this.$emit('on-change', html)
            }
            // 自定义菜单配置
            e.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
//        'quote',  // 引用
                'emoticon',  // 表情
//        'image',  // 插入图片
                'table',  // 表格
//        'video',  // 插入视频
//        'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            e.create()
            e.txt.html(this.defaultContent)
        }
    }
</script>

<style lang="less">
    .w-e-text{
        ol{
            list-style: decimal;
        }

        ul{
            list-style: disc;
        }
    }
</style>