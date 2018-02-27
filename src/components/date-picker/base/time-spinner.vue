<template>
    <div :class="classes">
        <div :class="[prefixCls+ '-list']" ref="hours">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in hoursList" v-show="!item.hide" @click="handleClick('hours', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-list']" ref="minutes">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in minutesList" v-show="!item.hide" @click="handleClick('minutes', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-list']" v-show="showSeconds" ref="seconds">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in secondsList" v-show="!item.hide" @click="handleClick('seconds', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Options from '../time-mixins';
    import { deepCopy, scrollTop, firstUpperCase } from '../../../utils/assist';

    const prefixCls = 'ivu-time-picker-cells';

    export default {
        mixins: [Options],
        props: {
            hours: {
                type: [Number, String],
                default: NaN
            },
            minutes: {
                type: [Number, String],
                default: NaN
            },
            seconds: {
                type: [Number, String],
                default: NaN
            },
            showSeconds: {
                type: Boolean,
                default: true
            },
            steps: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                spinerSteps: [1, 1, 1].map((one, i) => Math.abs(this.steps[i]) || one),
                prefixCls: prefixCls,
                compiled: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-with-seconds`]: this.showSeconds
                    }
                ];
            },
            hoursList () {
                let hours = [];
                const step = this.spinerSteps[0];
                const hour_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 24; i += step) {
                    const hour = deepCopy(hour_tmpl);
                    hour.text = i;

                    if (this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
                        hour.disabled = true;
                        if (this.hideDisabledOptions) hour.hide = true;
                    }
                    if (this.hours === i) hour.selected = true;
                    hours.push(hour);
                }

                return hours;
            },
            minutesList () {
                let minutes = [];
                const step = this.spinerSteps[1];
                const minute_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i += step) {
                    const minute = deepCopy(minute_tmpl);
                    minute.text = i;

                    if (this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
                        minute.disabled = true;
                        if (this.hideDisabledOptions) minute.hide = true;
                    }
                    if (this.minutes === i) minute.selected = true;
                    minutes.push(minute);
                }
                return minutes;
            },
            secondsList () {
                let seconds = [];
                const step = this.spinerSteps[2];
                const second_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i += step) {
                    const second = deepCopy(second_tmpl);
                    second.text = i;

                    if (this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
                        second.disabled = true;
                        if (this.hideDisabledOptions) second.hide = true;
                    }
                    if (this.seconds === i) second.selected = true;
                    seconds.push(second);
                }

                return seconds;
            }
        },
        methods: {
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected,
                        [`${prefixCls}-cell-disabled`]: cell.disabled
                    }
                ];
            },
            handleClick (type, cell) {
                if (cell.disabled) return;
                const data = {};
                data[type] = cell.text;
                this.$emit('on-change', data);
                this.$emit('on-pick-click');
            },
            scroll (type, index) {
                const from = this.$refs[type].scrollTop;
                const to = 24 * this.getScrollIndex(type, index);
                scrollTop(this.$refs[type], from, to, 500);
            },
            getScrollIndex (type, index) {
                const Type = firstUpperCase(type);
                const disabled = this[`disabled${Type}`];
                if (disabled.length && this.hideDisabledOptions) {
                    let _count = 0;
                    disabled.forEach(item => item <= index ? _count++ : '');
                    index -= _count;
                }
                return index;
            },
            updateScroll () {
                const times = ['hours', 'minutes', 'seconds'];
                this.$nextTick(() => {
                    times.forEach(type => {
                        this.$refs[type].scrollTop = 24 * this[`${type}List`].findIndex(obj => obj.text == this[type]);
                    });
                });
            },
            formatTime (text) {
                return text < 10 ? '0' + text : text;
            }
        },
        watch: {
            hours (val) {
                if (!this.compiled) return;
                this.scroll('hours', this.hoursList.findIndex(obj => obj.text == val));
            },
            minutes (val) {
                if (!this.compiled) return;
                this.scroll('minutes', this.minutesList.findIndex(obj => obj.text == val));
            },
            seconds (val) {
                if (!this.compiled) return;
                this.scroll('seconds', this.secondsList.findIndex(obj => obj.text == val));
            }
        },
        mounted () {
            this.$nextTick(() => this.compiled = true);
        }
    };
</script>
