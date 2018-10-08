<template>
  <div>
    <div>
      choose value {{model1}}----
      <i-select v-model="model1" style="width:260px" @on-change="change1">
        <i-option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>
      <!--     {{cityList1}} -->
    </div>
    <div>
      choose value {{model2}}----
      <i-select v-model="model2" style="width:260px" @on-change="change2">
        <i-option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>
      <!--     {{cityList2}} -->
    </div>
    <div>
      choose value {{model3}}----
      <i-select v-model="model3" style="width:260px">
        <i-option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>
      <!--     {{cityList3}} -->
    </div>
    <div>
      <button @click="setDefault">init deault</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList1: [
        {
          value: 1,
          label: 'New York',
        },
        {
          value: 2,
          label: 'London',
        },
        {
          value: 3,
          label: 'Sydney',
        },
        {
          value: 4,
          label: 'Ottawa',
        },
        {
          value: 5,
          label: 'Paris',
        },
        {
          value: 6,
          label: 'Canberra',
        },
      ],
      cityList2: [
        {
          value: 1,
          label: 'New York',
        },
        {
          value: 2,
          label: 'London',
        },
        {
          value: 3,
          label: 'Sydney',
        },
        {
          value: 4,
          label: 'Ottawa',
        },
        {
          value: 5,
          label: 'Paris',
        },
        {
          value: 6,
          label: 'Canberra',
        },
      ],
      cityList3: [],

      model1: '',
      model2: '',
      model3: '',
    };
  },
  methods: {
    onClear() {
      console.log('onClear');
    },

    change1(value) {
      this.model2 = 3;
      console.log('first select change, model1=', this.model1);
    },

    change2(value) {
      console.log('first select change, model2=', this.model2);

      this.cityList3 = [];
      setTimeout(() => {
        this.cityList3 = [
          {
            value: 5,
            label: 'Paris' + Math.random(),
          },
          {
            value: 6,
            label: 'Canberra' + Math.random(),
          },
        ];
      }, 500);
    },
    setDefault() {
      setTimeout(() => {
        this.model1 = 2;
      }, 500);
    },
  },
};
</script>
