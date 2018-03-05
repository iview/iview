<template>
    <div :class="classes" @mousedown.prevent>
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                <span
                    :class="iconBtnCls('prev', '-double')"
                    @click="changeYear(-1)"><Icon type="ios-arrow-left"></Icon></span>
                <span
                    v-if="pickerTable === 'date-table'"
                    :class="iconBtnCls('prev')"
                    @click="changeMonth(-1)"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-left"></Icon></span>
                <date-panel-label
                    :date-panel-label="datePanelLabel"
                    :current-view="pickerTable.split('-').shift()"
                    :date-prefix-cls="datePrefixCls"></date-panel-label>
                <span
                    :class="iconBtnCls('next', '-double')"
                    @click="changeYear(+1)"><Icon type="ios-arrow-right"></Icon></span>
                <span
                    v-if="pickerTable === 'date-table'"
                    :class="iconBtnCls('next')"
                    @click="changeMonth(+1)"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
            </div>
            <div :class="[prefixCls + '-content']">
                <component
                    :is="pickerTable"
                    ref="pickerTable"
                    v-if="currentView !== 'time'"
                    :table-date="panelDate"
                    :show-week-numbers="showWeekNumbers"
                    :value="dates"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="panelPickerHandlers"
                    @on-pick-click="handlePickClick"
                ></component>
            </div>
            <div :class="[prefixCls + '-content']" v-show="isTime">
                <time-picker
                    ref="timePicker"
                    v-if="currentView === 'time'"
                    :value="dates"
                    :format="format"
                    :time-disabled="timeDisabled"
                    v-bind="timePickerOptions"
                    @on-pick="handlePick"
                    @on-pick-click="handlePickClick"
                    @on-pick-clear="handlePickClear"
                    @on-pick-success="handlePickSuccess"
                    @on-pick-toggle-time="handleToggleTime"
                ></time-picker>
            </div>
            <Confirm
                v-if="confirm"
                :show-time="showTime"
                :is-time="isTime"
                @on-pick-toggle-time="handleToggleTime"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"
            ></Confirm>
        </div>
    </div>
</template>
<script>
    import Icon from '../../../icon/icon.vue';
    import DateTable from '../../base/date-table.vue';
    import YearTable from '../../base/year-table.vue';
    import MonthTable from '../../base/month-table.vue';
    import TimePicker from '../Time/time.vue';
    import Confirm from '../../base/confirm.vue';
    import datePanelLabel from './date-panel-label.vue';

    import Mixin from '../panel-mixin';
    import DateMixin from './date-panel-mixin';
    import Locale from '../../../../mixins/locale';

    import { siblingMonth, formatDateLabels } from '../../util';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        name: 'DatePickerPanel',
        mixins: [ Mixin, Locale, DateMixin ],
        components: { Icon, DateTable, YearTable, MonthTable, TimePicker, Confirm, datePanelLabel },
        props: {
            // more props in the mixin
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data () {
            const {selectionMode, value} = this;

            const dates = value.slice().sort();
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                currentView: selectionMode || 'date',
                pickerTable: this.getTableType(selectionMode),
                dates: dates,
                panelDate: this.startDate || dates[0] || new Date()
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ];
            },
            panelPickerHandlers(){
                return this.pickerTable === `${this.currentView}-table` ? this.handlePick : this.handlePreSelection;
            },
            datePanelLabel () {
                const locale = this.t('i.locale');
                const datePanelLabel = this.t('i.datepicker.datePanelLabel');
                const date = this.panelDate;
                const { labels, separator } = formatDateLabels(locale, datePanelLabel, date);

                const handler = type => {
                    return () => this.pickerTable = this.getTableType(type);
                };

                return {
                    separator: separator,
                    labels: labels.map(obj => ((obj.handler = handler(obj.type)), obj))
                };
            },
            timeDisabled(){
                return !this.dates[0];
            }
        },
        watch: {
            value (newVal) {
                this.dates = newVal;
                this.panelDate = this.startDate || (this.multiple ? this.dates[this.dates.length - 1] : this.dates[0]) || new Date();
            },
            currentView (currentView) {
                this.$emit('on-selection-mode-change', currentView);
                this.pickertable = this.getTableType(currentView);
            },
            selectionMode(type){
                this.currentView = type;
                this.pickerTable = this.getTableType(type);
            }
        },
        methods: {
            reset(){
                this.currentView = this.selectionMode;
                this.pickerTable = this.getTableType(this.currentView);
            },
            changeYear(dir){
                if (this.selectionMode === 'year' || this.pickerTable === 'year-table'){
                    this.panelDate = new Date(this.panelDate.getFullYear() + dir * 10, 0, 1);
                } else {
                    this.panelDate = siblingMonth(this.panelDate, dir * 12);
                }
            },
            getTableType(currentView){
                return currentView.match(/^time/) ? 'time-picker' : `${currentView}-table`;
            },
            changeMonth(dir){
                this.panelDate = siblingMonth(this.panelDate, dir);
            },
            handlePreSelection(value){
                this.panelDate = value;
                if (this.pickerTable === 'year-table') this.pickerTable = 'month-table';
                else this.pickerTable = this.getTableType(this.currentView);

            },
            handlePick (value) {
                const {selectionMode, panelDate} = this;
                if (selectionMode === 'year') value = new Date(value.getFullYear(), 0, 1);
                else if (selectionMode === 'month') value = new Date(panelDate.getFullYear(), value.getMonth(), 1);
                else value = new Date(value);

                this.$emit('on-pick', value);
            },
        },
    };
</script>
