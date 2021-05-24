<template>
    <div :class="classes" @mousedown.prevent>
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="panelBodyClasses">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']" v-show="!isTime">
                <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                    <span
                        :class="iconBtnCls('prev', '-double')"
                        @click="prevYear('left')"><Icon type="ios-arrow-back"></Icon></span>
                    <span
                        v-if="leftPickerTable === 'date-table'"
                        :class="iconBtnCls('prev')"
                        @click="prevMonth('left')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-back"></Icon></span>
                    <date-panel-label
                        :date-panel-label="leftDatePanelLabel"
                        :current-view="leftDatePanelView"
                        :date-prefix-cls="datePrefixCls"></date-panel-label>
                    <span
                        v-if="splitPanels || leftPickerTable !== 'date-table'"
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('left')"><Icon type="ios-arrow-forward"></Icon></span>
                    <span
                        v-if="splitPanels && leftPickerTable === 'date-table'"
                        :class="iconBtnCls('next')"
                        @click="nextMonth('left')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-forward"></Icon></span>
                </div>
                <component
                    :is="leftPickerTable"
                    ref="leftYearTable"
                    v-if="currentView !== 'time'"
                    :table-date="leftPanelDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    :range-state="rangeState"
                    :show-week-numbers="showWeekNumbers"
                    :value="preSelecting.left ? [dates[0]] : dates"
                    :focused-date="focusedDate"

                    @on-change-range="handleChangeRange"
                    @on-pick="panelPickerHandlers.left"
                    @on-pick-click="handlePickClick"
                ></component>
            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']" v-show="!isTime">
                <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                    <span
                        v-if="splitPanels || rightPickerTable !== 'date-table'"
                        :class="iconBtnCls('prev', '-double')"
                        @click="prevYear('right')"><Icon type="ios-arrow-back"></Icon></span>
                    <span
                        v-if="splitPanels && rightPickerTable === 'date-table'"
                        :class="iconBtnCls('prev')"
                        @click="prevMonth('right')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-back"></Icon></span>
                    <date-panel-label
                        :date-panel-label="rightDatePanelLabel"
                        :current-view="rightDatePanelView"
                        :date-prefix-cls="datePrefixCls"></date-panel-label>
                    <span
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('right')"><Icon type="ios-arrow-forward"></Icon></span>
                    <span
                        v-if="rightPickerTable === 'date-table'"
                        :class="iconBtnCls('next')"
                        @click="nextMonth('right')"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-forward"></Icon></span>
                </div>
                <component
                    :is="rightPickerTable"
                    ref="rightYearTable"
                    v-if="currentView !== 'time'"
                    :table-date="rightPanelDate"
                    selection-mode="range"
                    :range-state="rangeState"
                    :disabled-date="disabledDate"
                    :show-week-numbers="showWeekNumbers"
                    :value="preSelecting.right ? [dates[dates.length - 1]] : dates"
                    :focused-date="focusedDate"

                    @on-change-range="handleChangeRange"
                    @on-pick="panelPickerHandlers.right"
                    @on-pick-click="handlePickClick"></component>
            </div>
            <div :class="[prefixCls + '-content']" v-show="isTime">
                <time-picker
                    ref="timePicker"
                    v-if="currentView === 'time'"
                    :value="dates"
                    :format="format"
                    :time-disabled="timeDisabled"
                    v-bind="timePickerOptions"
                    @on-pick="handleRangePick"
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
                :time-disabled="timeDisabled"
                @on-pick-toggle-time="handleToggleTime"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import Icon from '../../../icon/icon.vue';
    import DateTable from '../../base/date-table.vue';
    import YearTable from '../../base/year-table.vue';
    import MonthTable from '../../base/month-table.vue';
    import TimePicker from '../Time/time-range.vue';
    import Confirm from '../../base/confirm.vue';

    import { toDate, initTimeDate, formatDateLabels } from '../../util';
    import datePanelLabel from './date-panel-label.vue';

    import Mixin from '../panel-mixin';
    import DateMixin from './date-panel-mixin';
    import Locale from '../../../../mixins/locale';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    const dateSorter = (a, b) => {
        if (!a || !b) return 0;
        return a.getTime() - b.getTime();
    };

    export default {
        name: 'RangeDatePickerPanel',
        mixins: [ Mixin, Locale, DateMixin ],
        components: { Icon, DateTable, YearTable, MonthTable, TimePicker, Confirm, datePanelLabel },
        props: {
            // more props in the mixin
            splitPanels: {
                type: Boolean,
                default: false
            },
        },
        data(){
            const [minDate, maxDate] = this.value.map(date => date || initTimeDate());
            const leftPanelDate = this.startDate ? this.startDate : minDate;

            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                dates: this.value,
                rangeState: {from: this.value[0], to: this.value[1], selecting: minDate && !maxDate},
                currentView: this.selectionMode || 'range',
                leftPickerTable: `${this.selectionMode}-table`,
                rightPickerTable: `${this.selectionMode}-table`,
                leftPanelDate: leftPanelDate,
                rightPanelDate: new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1)
            };
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}-body-wrapper`,
                    `${datePrefixCls}-with-range`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length,
                        [`${datePrefixCls}-with-week-numbers`]: this.showWeekNumbers
                    }
                ];
            },
            panelBodyClasses(){
                return [
                    prefixCls + '-body',
                    {
                        [prefixCls + '-body-time']: this.showTime,
                        [prefixCls + '-body-date']: !this.showTime,
                    }
                ];
            },
            leftDatePanelLabel(){
                return this.panelLabelConfig('left');
            },
            rightDatePanelLabel(){
                return this.panelLabelConfig('right');
            },
            leftDatePanelView(){
                return this.leftPickerTable.split('-').shift();
            },
            rightDatePanelView(){
                return this.rightPickerTable.split('-').shift();
            },
            timeDisabled(){
                return !(this.dates[0] && this.dates[1]);
            },
            preSelecting(){
                const tableType = `${this.currentView}-table`;

                return {
                    left: this.leftPickerTable !== tableType,
                    right: this.rightPickerTable !== tableType,
                };
            },
            panelPickerHandlers(){
                return {
                    left: this.preSelecting.left ? this.handlePreSelection.bind(this, 'left') : this.handleRangePick,
                    right: this.preSelecting.right ? this.handlePreSelection.bind(this, 'right') : this.handleRangePick,
                };
            }
        },
        watch: {
            value(newVal) {
                const minDate = newVal[0] ? toDate(newVal[0]) : null;
                const maxDate = newVal[1] ? toDate(newVal[1]) : null;
                this.dates = [minDate, maxDate].sort(dateSorter);

                this.rangeState = {
                    from: this.dates[0],
                    to: this.dates[1],
                    selecting: false
                };


                // set panels positioning
                this.setPanelDates(this.startDate || this.dates[0] || new Date());
            },
            currentView(currentView){
                const leftMonth = this.leftPanelDate.getMonth();
                const rightMonth = this.rightPanelDate.getMonth();
                const isSameYear = this.leftPanelDate.getFullYear() === this.rightPanelDate.getFullYear();

                if (currentView === 'date' && isSameYear && leftMonth === rightMonth){
                    this.changePanelDate('right', 'Month', 1);
                }
                if (currentView === 'month' && isSameYear){
                    this.changePanelDate('right', 'FullYear', 1);
                }
                if (currentView === 'year' && isSameYear){
                    this.changePanelDate('right', 'FullYear', 10);
                }
            },
            selectionMode(type){
                this.currentView = type || 'range';
            },
            focusedDate(date){
                this.setPanelDates(date || new Date());
            }
        },
        methods: {
            reset(){
                this.currentView = this.selectionMode;
                this.leftPickerTable = `${this.currentView}-table`;
                this.rightPickerTable = `${this.currentView}-table`;
            },
            setPanelDates(leftPanelDate){
                this.leftPanelDate = leftPanelDate;
                const rightPanelDate = new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1);
                const splitRightPanelDate = this.dates[1]? this.dates[1].getTime() : this.dates[1];
                this.rightPanelDate = this.splitPanels ? new Date(Math.max(splitRightPanelDate, rightPanelDate.getTime())) : rightPanelDate;
            },
            panelLabelConfig (direction) {
                const locale = this.t('i.locale');
                const datePanelLabel = this.t('i.datepicker.datePanelLabel');
                const handler = type => {
                    const fn = type == 'month' ? this.showMonthPicker : this.showYearPicker;
                    return () => fn(direction);
                };

                const date = this[`${direction}PanelDate`];
                const { labels, separator } = formatDateLabels(locale, datePanelLabel, date);

                return {
                    separator: separator,
                    labels: labels.map(obj => ((obj.handler = handler(obj.type)), obj))
                };
            },
            prevYear (panel) {
                const increment = this.currentView === 'year' ? -10 : -1;
                this.changePanelDate(panel, 'FullYear', increment);
            },
            nextYear (panel) {
                const increment = this.currentView === 'year' ? 10 : 1;
                this.changePanelDate(panel, 'FullYear', increment);
            },
            prevMonth(panel){
                this.changePanelDate(panel, 'Month', -1);
            },
            nextMonth(panel){
                this.changePanelDate(panel, 'Month', 1);
            },
            changePanelDate(panel, type, increment, updateOtherPanel = true){
                const current = new Date(this[`${panel}PanelDate`]);
                // fix https://github.com/view-design/ViewUI/issues/418
                // 强行把左视图日期设置为1号
                current[`set${type}`](current[`get${type}`]() + increment, 1);
                this[`${panel}PanelDate`] = current;

                if (!updateOtherPanel) return;

                if (this.splitPanels){
                    // change other panel if dates overlap
                    const otherPanel = panel === 'left' ? 'right' : 'left';
                    if (panel === 'left' && this.leftPanelDate >= this.rightPanelDate){
                        this.changePanelDate(otherPanel, type, 1);
                    }
                    if (panel === 'right' && this.rightPanelDate <= this.leftPanelDate){
                        this.changePanelDate(otherPanel, type, -1);
                    }
                } else {
                    // keep the panels together
                    const otherPanel = panel === 'left' ? 'right' : 'left';
                    const currentDate = this[`${otherPanel}PanelDate`];
                    const temp = new Date(currentDate);

                    if (type === 'Month') {
                        const nextMonthLastDate = new Date(
                            temp.getFullYear(), temp.getMonth() + increment + 1, 0
                        ).getDate();
                        temp.setDate(Math.min(nextMonthLastDate, temp.getDate()));
                    }

                    temp[`set${type}`](temp[`get${type}`]() + increment);
                    this[`${otherPanel}PanelDate`] = temp;
                }
            },
            showYearPicker (panel) {
                this[`${panel}PickerTable`] = 'year-table';
            },
            showMonthPicker (panel) {
                this[`${panel}PickerTable`] = 'month-table';
            },
            handlePreSelection(panel, value){
                this[`${panel}PanelDate`] = value;
                const currentViewType = this[`${panel}PickerTable`];
                if (currentViewType === 'year-table') this[`${panel}PickerTable`] = 'month-table';
                else this[`${panel}PickerTable`] = `${this.currentView}-table`;

                if (!this.splitPanels){
                    const otherPanel = panel === 'left' ? 'right' : 'left';
                    this[`${otherPanel}PanelDate`] = value;

                    const increment = otherPanel === 'left' ? -1 : 1; // #3973

                    this.changePanelDate(otherPanel, 'Month', increment, false);
                }
            },
            handleRangePick (val, type) {
                if (this.rangeState.selecting || this.currentView === 'time'){
                    if (this.currentView === 'time'){
                        this.dates = val;
                    } else {
                        const [minDate, maxDate] = [this.rangeState.from, val].sort(dateSorter);
                        this.dates = [minDate, maxDate];
                        this.rangeState = {
                            from: minDate,
                            to: maxDate,
                            selecting: false
                        };
                    }
                    this.handleConfirm(false, type || 'date');
                } else {
                    this.rangeState = {
                        from: val,
                        to: null,
                        selecting: true
                    };
                }
            },
            handleChangeRange (val) {
                this.rangeState.to = val;
            },
        },
    };
</script>
