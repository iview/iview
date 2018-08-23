<template>
    <div style="margin: 100px;">
        {{color}}
        <!--<Input placeholder="请输入..." size="large" style="width: 50px;"></Input>-->
        <color-picker
            v-model="color"
            placement="bottom-start"
            @on-change="c1"
            @on-active-change="c2"></color-picker>
        <Input value="hello" style="display: inline-block" />
        <Date-picker
            type="date"
            placeholder="选择日期"
            style="width: 200px"></Date-picker>
        <color-picker
            ref="xxx"
            v-model="color"
            :recommend="true"
            format="rgb"
            alpha
            @on-change="onChange"
            @on-active-change="onActiveChange"></color-picker>
        <color-picker
            v-model="color2"
            :alpha="true"
            :recommend="false"
            format="hsv"></color-picker>
        <!--<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <color-picker
            v-model="color"
            placement="bottom-start"
            ></color-picker>
        <Date-picker
            type="date"
            placeholder="选择日期"
            style="width: 200px"></Date-picker>
        <color-picker
            ref="yyy"
            :colors="colors"
            v-model="color"
            format="rgb"
            alpha></color-picker>
        <Button @click="setColor">set color</Button>

        <br><br><br><br>
        {{openState}}
        <ColorPicker
            v-model="color7"
            :hue="false"
            @on-open-change="onOpenChange"></ColorPicker>
        <ColorPicker
            v-model="color7"
            :hue="false"
            :hide-drop-down="hideDropDown"
            @on-open-change="onOpenChange"></ColorPicker>

        <br><br><br><br>
        <ColorPicker
            v-model="color7"
            disabled></ColorPicker>
    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            color: 'rgba(12,34,255,.85)',
            color2: '',
            color7: '#19be6b',
            openState: false,
            colors: [
                '#2d8cf0',
                '#19be6b',
                '#ff9900',
                '#ed3f14',
                '#00b5ff',
                '#19c919',
                '#f9e31c',
                '#ea1a1a',
                '#9b1dea',
                '#00c2b1',
                '#ac7a33',
                '#1d35ea',
                '#8bc34a',
                '#f16b62',
                '#ea4ca3',
                '#0d94aa',
                '#febd79',
                '#5d4037',
                '#00bcd4',
                '#f06292',
                '#cddc39',
                '#607d8b',
                '#000000',
                '#ffffff',
                '#2d8cf0',
                '#19be6b',
                '#ff9900',
                '#ed3f14',
                '#00b5ff',
                '#19c919',
                '#f9e31c',
                '#ea1a1a',
                '#9b1dea',
                '#00c2b1',
                '#ac7a33',
                '#1d35ea',
                '#8bc34a',
                '#f16b62',
                '#ea4ca3',
                '#0d94aa',
                '#febd79',
                '#5d4037',
            ],
            hideDropDown: false,
        };
    },

    computed: {},

    mounted() {
        setInterval(this.toggleShowHide, 2000);
    },

    methods: {
        setColor() {
            this.color = '#26bc77';
        },
        c1(d) {
            console.log(d);
        },
        c2(d) {
            console.log(d);
        },
        onOpenChange(state) {
            this.openState = state;
        },
        onChange(d) {
            console.log(d);
        },
        onActiveChange(d) {
            console.log(d);
        },
        toggleShowHide() {
            this.hideDropDown = !this.hideDropDown;
        },
    },
};
</script>
