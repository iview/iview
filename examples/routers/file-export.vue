<template>
    <div>
        <FileExport ref="wordExport">
            <div>123</div>
        </FileExport>
        <Button @click="handExport">导出</Button>
    </div>
</template>
<script>
  export default {
    props: {},
    data () {
      return {
        v1: 1,
        v2: 1,
        autofocus: true,
        obj: {}
      };
    },
    computed: {},
    methods: {
      handExport () {
        //  console.log(this.$refs.wordExport)
        this.$refs.wordExport.wordExport("abc", {
          size: '595.3pt 841.9pt',// 纸张大小
          margin:'36.0pt 36.0pt 36.0pt 36.0pt' // 页边距
        });
      }
    }
  };
</script>