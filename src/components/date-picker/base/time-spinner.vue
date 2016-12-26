<template>
    <div :class="classes">
        <div :class="[prefixCls+ '-wrapper']">
            <ul :class="[prefixCls + '-list']">
                <li :class="getCellCls(item)" v-for="item in hoursList" v-show="!item.hide">{{ item.text }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-wrapper']">
            <ul :class="[prefixCls + '-list']">
                <li :class="getCellCls(item)" v-for="item in minutesList" v-show="!item.hide">{{ item.text }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-wrapper']" v-show="showSeconds">
            <ul :class="[prefixCls + '-list']">
                <li :class="getCellCls(item)" v-for="item in secondsList" v-show="!item.hide">{{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Options from '../time-mixins';
    import { deepCopy } from '../../../utils/assist';

    const prefixCls = 'ivu-time-picker-cells';

    export default {
        mixins: [Options],
        props: {
            hours: {
                type: Number,
                default: 0
            },
            minutes: {
                type: Number,
                default: 0
            },
            seconds: {
                type: Number,
                default: 0
            },
            showSeconds: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                prefixCls: prefixCls
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
                const hour_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 24; i++) {
                    const hour = deepCopy(hour_tmpl);
                    hour.text = i;

                    if (this.disabledHours && this.disabledHours.indexOf(i) > -1) {
                        hour.disabled = true;
                        if (this.hideDisabledOptions) hour.hide = true;
                    }
                    hours.push(hour);
                }

                return hours;
            },
            minutesList () {
                let minutes = [];
                const minute_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i++) {
                    const minute = deepCopy(minute_tmpl);
                    minute.text = i;

                    if (this.disabledMinutes && this.disabledMinutes.indexOf(i) > -1) {
                        minute.disabled = true;
                        if (this.hideDisabledOptions) minute.hide = true;
                    }
                    minutes.push(minute);
                }

                return minutes;
            },
            secondsList () {
                let seconds = [];
                const second_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i++) {
                    const second = deepCopy(second_tmpl);
                    second.text = i;

                    if (this.disabledSeconds && this.disabledSeconds.indexOf(i) > -1) {
                        second.disabled = true;
                        if (this.hideDisabledOptions) second.hide = true;
                    }
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
            }
        }
    };
</script>