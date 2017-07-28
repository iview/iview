<template>
    <div>
        <FileExp ref="wordExport">
            <div>123</div>
        </FileExp>
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
        this.$refs.wordExport.wordExport("abc");
      }
    }
  };
</script>