<template>
  <div style="margin: 100px;width: 200px;">
    <auto-complete v-model="value" :data="data" :disabled="disabled"></auto-complete>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      disabled: false,
      data: []
    };
  },
  methods: {},
  created() {
    setTimeout(() => {
      this.value = "1.0.0.5";
      this.data = [
        "12412515",
        "123444",
        "12355",
        "12345",
        "12312",
        "1234",
        "123",
        "111",
        "5.2.3.4",
        "1.2.3.4",
        "1.2.3.4.5",
        "1.2.3.4.5.6",
        "1.2.3.4.5.6.7",
        "1.0.0.8",
        "1.0.0.5",
        "whb-03"
      ];
      //   this.disabled = true;
    }, 1000);
  }
};
</script>
