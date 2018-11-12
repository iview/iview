import { createVue, destroyVM, stringToDate, dateToString, dateToTimeString, promissedTick } from '../util';

describe('DatePicker.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create a DatePicker component and open the calendar with the current month', done => {
    vm = createVue(`
      <Date-Picker></Date-Picker>
    `);
    const picker = vm.$children[0];
    picker.$el.querySelector('input.ivu-input').focus();
    vm.$nextTick(() => {
      const calendarBody = vm.$el.querySelector('.ivu-picker-panel-body .ivu-date-picker-cells:first-of-type');
      const calendarCells = [...calendarBody.querySelectorAll('.ivu-date-picker-cells-cell')].filter(el => {
        const prevMonth = el.classList.contains('ivu-date-picker-cells-cell-prev-month');
        const nextMonth = el.classList.contains('ivu-date-picker-cells-cell-next-month');
        return !prevMonth && !nextMonth;
      });
      const today = new Date();
      const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      expect(daysInCurrentMonth).to.equal(calendarCells.length);
      done();
    });
  });

  it('should pass correct arguments to on-change event', done => {
    const now = new Date();
    const nowDate = dateToString(now);
    const nowTime = dateToTimeString(now);
    const nextHour = dateToTimeString(now.getTime() + 36e5);
    const nextWeek = new Date(now.getTime() + 6048e5);

    let dateValue, dateRangeValue, timeValue, timeRangeValue;
    vm = createVue({
      template: `
        <div>
          <date-picker type="date" @on-change="onChangeDate"></date-picker>
          <date-picker type="daterange" @on-change="onChangeDateRange"></date-picker>
          <time-picker type="time" @on-change="onChangeTime"></time-picker>
          <time-picker type="timerange" @on-change="onChangeTimeRange"></time-picker>
        </div>
      `,
      methods: {
        onChangeDate(val) {
          dateValue = val;
        },
        onChangeDateRange(val) {
          dateRangeValue = val;
        },
        onChangeTime(val) {
          timeValue = val;
        },
        onChangeTimeRange(val) {
          timeRangeValue = val;
        },
      }
    }, true);

    vm.$nextTick(() => {
      const [datePicker, dateRangePicker, timePicker, timeRangePicker] = vm.$children;

      datePicker.handleInputChange({target: {value: nowDate}});
      dateRangePicker.handleInputChange({target: {value: [
          nowDate,
          dateToString(nextWeek)
        ].join(' - ')
      }});

      timePicker.handleInputChange({target: {value: nowTime}});
      const timeRangeString = [
          nowTime,
          nextHour
      ].join(' - ');
      timeRangePicker.handleInputChange({target: {
        value: timeRangeString
      }});

      vm.$nextTick(() => {
        // DATE
        expect(typeof dateValue).to.equal('string');
        expect(dateValue).to.equal(nowDate);
        // DATERANGE
        expect(Array.isArray(dateRangeValue)).to.equal(true);
        expect(dateRangeValue[0]).to.equal(nowDate);
        expect(dateRangeValue[1]).to.equal(dateToString(nextWeek));

        // TIME
        expect(typeof timeValue).to.equal('string');
        expect(timeValue).to.equal(nowTime);
        // TIMERANGE
        expect(Array.isArray(timeRangeValue)).to.equal(true);
        expect(timeRangeValue[0]).to.equal(nowTime);
        expect(timeRangeValue[1]).to.equal(nextHour);

        done();
      });
    });
  });

  it('should create a DatePicker component of type="datetimerange"', done => {
    vm = createVue(`
      <Date-Picker type="datetimerange"></Date-Picker>
    `);
    const picker = vm.$children[0];
    expect(picker.$children.length).to.equal(2);
    expect(Array.isArray(picker.internalValue)).to.equal(true);
    done();
  });

  it('should create a datetimerange component and pick 2 dates in the current month', done => {
    vm = createVue(`
      <Date-picker type="datetimerange"></Date-picker>
    `);

    const picker = vm.$children[0];
    picker.handleFocus({type: 'focus'});
    vm.$nextTick(() => {
      const displayField = vm.$el.querySelector('.ivu-input');
      const clickableCells = vm.$el.querySelectorAll('.ivu-date-picker-cells-cell');
      const lastMonthClass = 'ivu-date-picker-cells-cell-prev-month';
      const firstDayInMonthIndex = [...clickableCells].findIndex(cell => !cell.classList.contains(lastMonthClass));

      clickableCells[firstDayInMonthIndex].firstElementChild.click();
      vm.$nextTick(() => {
        clickableCells[firstDayInMonthIndex + 4].firstElementChild.click();
        vm.$nextTick(() => {
          const dayOne = new Date();
          dayOne.setDate(1);
          dayOne.setHours(0, 0, 0, 0);
          const dayFive = new Date(dayOne.getTime());
          dayFive.setDate(5);
          dayFive.setHours(0, 0, 0, 0);

          // check pickers internal value
          const [startInternalValue, endInternalValue] = picker.internalValue; // Date Objects
          expect(Math.abs(dayOne - startInternalValue)).to.equal(0);
          expect(Math.abs(dayFive - endInternalValue)).to.equal(0);

          /*
                    const [startInternalValue, endInternalValue] = picker.internalValue; // Date Objects
          expect(dateToString(dayOne)).to.equal(dateToString(startInternalValue));
          expect(dateToString(dayFive)).to.equal(dateToString(endInternalValue));

           */

          // check pickers display value
          const [startDisplayValue, endDisplayValue] = displayField.value.split(' - ').map(stringToDate); // Date Objects
          expect(Math.abs(dayOne - startDisplayValue)).to.equal(0);
          expect(Math.abs(dayFive - endDisplayValue)).to.equal(0);

          done();
        });
      });
    });
  });

  it('should change type progamatically', done => {
    // https://jsfiddle.net/hq7cLz83/
    vm = createVue({
      template: '<Date-picker :type="dateType"></Date-picker>',
      data() {
        return {
          dateType: 'month'
        };
      }
    });

    const picker = vm.$children[0];
    picker.handleFocus({type: 'focus'});
    vm.$nextTick(() => {
      const panel = vm.$el.querySelector('.ivu-picker-panel-content');
      const dayPanel = panel.querySelector('[class="ivu-date-picker-cells"]');
      const monthPanel = panel.querySelector('.ivu-date-picker-cells-month');
      const yearPanel = panel.querySelector('.ivu-date-picker-cells-year');

      expect(dayPanel).to.equal(null);
      expect(monthPanel.style.display).to.equal('');
      expect(yearPanel).to.equal(null);

      expect(picker.type).to.equal('month');
      expect(picker.selectionMode).to.equal('month');

      vm.dateType = 'year';
      promissedTick(picker)
        .then(() => {
          const yearPanel = panel.querySelector('.ivu-date-picker-cells-year');
          const monthPanel = panel.querySelector('.ivu-date-picker-cells-month');
          expect(yearPanel.style.display).to.equal('');
          expect(monthPanel).to.equal(null);

          expect(picker.type).to.equal('year');
          expect(picker.selectionMode).to.equal('year');

          vm.dateType = 'date';
          return promissedTick(picker);
        })
        .then(() => {
          expect(picker.type).to.equal('date');
          expect(picker.selectionMode).to.equal('date');

          done();
        }).catch(err => console.log(err));
    });
  });

  it('should fire `on-change` when reseting value', done => {
    const now = new Date();
    const nowDate = dateToString(now);
    let onChangeCalled = false;
    vm = createVue({
      template: '<date-picker :value="date" type="date" @on-change="onChange"></date-picker>',
      data(){
        return { date: now };
      },
      methods: {
        onChange() {
          onChangeCalled = true;
        }
      }
    });

    vm.$nextTick(() => {
      const picker = vm.$children[0];
      const displayField = vm.$el.querySelector('.ivu-input');
      expect(displayField.value).to.equal(nowDate);

      picker.showClose = true; // to simulate mouseenter in the Input
      picker.handleIconClick(); // reset the input value
      vm.$nextTick(() => {
        expect(onChangeCalled).to.equal(true);
        expect(displayField.value).to.equal('');
        done();
      });
    });
  });

  it('should have same behavior after a reset as before the reset', done => {
    vm = createVue(`
      <Date-picker type="datetimerange"></Date-picker>
    `);

    const picker = vm.$children[0];
    picker.handleFocus({type: 'focus'});
    vm.$nextTick(() => {
      const displayField = vm.$el.querySelector('.ivu-input');
      const clickableCells = vm.$el.querySelectorAll('.ivu-date-picker-cells-cell');
      const lastMonthClass = 'ivu-date-picker-cells-cell-prev-month';
      const firstDayInMonthIndex = [...clickableCells].findIndex(cell => !cell.classList.contains(lastMonthClass));

      // choose first date
      clickableCells[firstDayInMonthIndex].firstElementChild.click();
      vm.$nextTick(() => {
        // choose second date
        clickableCells[firstDayInMonthIndex + 4].firstElementChild.click();
        vm.$nextTick(() => {
          // cache first values
          const [startInternalValue, endInternalValue] = picker.internalValue; // Date Objects
          const [startDisplayValue, endDisplayValue] = displayField.value.split(' - ').map(stringToDate); // Date Objects

          // clear picker
          picker.handleClear();
          vm.$nextTick(() => {
            // it should be closed by now
            expect(picker.visible).to.equal(false);
            // open picker again
              picker.handleFocus({type: 'focus'});
              picker.visible = true;


              vm.$nextTick(() => {
              expect(picker.visible).to.equal(true);
              expect(JSON.stringify(picker.internalValue)).to.equal('[null,null]');
              expect(displayField.value).to.equal('');

              clickableCells[firstDayInMonthIndex].firstElementChild.click();
              vm.$nextTick(() => {
                clickableCells[firstDayInMonthIndex + 4].firstElementChild.click();
                vm.$nextTick(() => {
                  // recheck internal values
                  expect(Math.abs(picker.internalValue[0] - startInternalValue)).to.equal(0);
                  expect(Math.abs(picker.internalValue[1] - endInternalValue)).to.equal(0);
                  // recheck display value
                  const [_startDisplayValue, _endDisplayValue] = displayField.value.split(' - ').map(stringToDate); // Date Objects
                  expect(Math.abs(_startDisplayValue - startDisplayValue)).to.equal(0);
                  expect(Math.abs(_endDisplayValue - endDisplayValue)).to.equal(0);

                  done();
                });
              });
            });
          });
        });
      });
    });
  });

  it('should accept a empty string as input v-model value', done => {
    vm = createVue({
      template: '<date-picker v-model="value" type="date"></date-picker>',
      data(){
        return {value: ''};
      }
    });

    vm.$nextTick(() => {
      expect(vm.value).to.equal('');
      done();
    });
  });

  it('should convert strings to Date objects', done => {
    vm = createVue({
      template: `
        <div>
          <date-picker v-model="value1" type="daterange" style="width: 200px"></date-picker>
          <date-picker v-model="value2" type="daterange" placement="bottom-end" style="width: 200px"></date-picker>
          <date-picker v-model="value3" type="datetime" placement="bottom-end" style="width: 200px"></date-picker>
          <date-picker v-model="value4" type="datetimerange" placement="bottom-end" style="width: 200px"></date-picker>
        </div>
      `,
      data() {
        return {
          value1: ['2017-10-10', '2017-10-20'],
          value2: [new Date(), new Date()],
          value3: '2017-10-10 10:00:00',
          value4: ['2027-10-10 10:00:00', '2027-10-20 10:00:00']
        };
      }
    });

    vm.$nextTick(() => {
      const {value1, value2, value3, value4} = vm;

      expect(value1[0] instanceof Date).to.equal(true);
      expect(value1[1] instanceof Date).to.equal(true);
      expect(value1.map(dateToString).join('|')).to.equal('2017-10-10|2017-10-20');

      expect(value2[0] instanceof Date).to.equal(true);
      expect(value2[1] instanceof Date).to.equal(true);
      expect(value2.map(dateToString).join('|')).to.equal([new Date(), new Date()].map(dateToString).join('|'));

      expect(dateToString(value3)).to.equal('2017-10-10');

      expect(value4[0] instanceof Date).to.equal(true);
      expect(value4[1] instanceof Date).to.equal(true);
      expect(value4.map(dateToString).join('|')).to.equal('2027-10-10|2027-10-20');
      done();
    });
  });

  it('should render date-picker label correctly in zh-CN', done => {
    vm = createVue(`
      <Date-picker type="date"></Date-picker>
    `);

    const picker = vm.$children[0];
    picker.handleFocus({type: 'focus'});
    vm.$nextTick(() => {
      const now = new Date();
      const labels = vm.$el.querySelectorAll('.ivu-picker-panel-body .ivu-date-picker-header-label');
      const labelText = [...labels].map(el => el.textContent).join(' ');
      expect(labelText).to.equal([now.getFullYear() + '年', now.getMonth() + 1 + '月'].join(' '));
      done();
    });
  });

  it('Should format labels correctly', done => {
    const formater = require('../../../src/components/date-picker/util').formatDateLabels;
    const expectedResults = require('./assets/locale-expects.js').default;
    const locales = [
      'de-DE', 'en-US', 'es-ES', 'fi-FI', 'fr-FR', 'id-ID', 'ja-JP', 'ko-KR', 'pt-BR',
      'pt-PT', 'ru-RU', 'sv-SE', 'tr-TR', 'vi-VN', 'zh-CN', 'zh-TW'
    ].reduce((obj, locale) => {
      obj[locale] = require('../../../src/locale/lang/' + locale).default;
      return obj;
    }, {});
    const testDate = new Date(2030, 9); // October 2030

    Object.keys(locales).forEach(locale => {
      const format = locales[locale].i.datepicker.datePanelLabel;
      const f = formater(locale, format, testDate);
      const labelText = f.labels.map(obj => obj.label).join(f.separator);
      expect(labelText).to.equal(expectedResults[locale]);
    });
    expect(Object.keys(locales).length > 0).to.equal(true);
    done();
  });
});
