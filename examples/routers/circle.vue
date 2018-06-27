<template>
    <div>
        <i-circle :percent="percent" dashboard :stroke-color="color">
            <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
            <span v-else style="font-size:24px">{{ percent }}%</span>
        </i-circle>
        <ButtonGroup size="large">
            <Button icon="ios-add" @click="add"></Button>
            <Button icon="ios-remove" @click="minus"></Button>
        </ButtonGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
