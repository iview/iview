import { createVue, destroyVM, stringToDate, promissedTick } from '../util';

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
    picker.showPicker();
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

  it('should create a DatePicker component of type="datetimerange"', done => {
    vm = createVue(`
      <Date-Picker type="datetimerange"></Date-Picker>
    `);
    const picker = vm.$children[0];
    expect(picker.$children.length).to.equal(2);
    expect(Array.isArray(picker.currentValue)).to.equal(true);
    done();
  });

  it('should create a datetimerange component and pick 2 dates in the current month', done => {
    vm = createVue(`
      <Date-picker type="datetimerange"></Date-picker>
    `);

    const picker = vm.$children[0];
    picker.handleIconClick();
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
          const [startInternalValue, endInternalValue] = picker.currentValue; // Date Objects
          expect(Math.abs(dayOne - startInternalValue)).to.equal(0);
          expect(Math.abs(dayFive - endInternalValue)).to.equal(0);

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
    vm = createVue({
      template: '<Date-picker :type="dateType"></Date-picker>',
      data() {
        return {
          dateType: 'month'
        };
      }
    });

    const picker = vm.$children[0];
    picker.handleIconClick();
    vm.$nextTick(() => {
      const panel = vm.$el.querySelector('.ivu-picker-panel-content');
      const dayPanel = panel.querySelector('[class="ivu-date-picker-cells"]');
      const monthPanel = panel.querySelector('.ivu-date-picker-cells-month');
      const yearPanel = panel.querySelector('.ivu-date-picker-cells-year');

      expect(dayPanel.style.display).to.equal('none');
      expect(monthPanel.style.display).to.equal('');
      expect(yearPanel.style.display).to.equal('none');

      expect(picker.type).to.equal('month');
      expect(picker.selectionMode).to.equal('month');

      vm.dateType = 'year';
      promissedTick(picker)
		.then(() => {
          expect(picker.type).to.equal('year');
          expect(picker.selectionMode).to.equal('year');

          vm.dateType = 'date';
          return promissedTick(picker);
        })
		.then(() => {
          expect(picker.type).to.equal('date');
          expect(picker.selectionMode).to.equal('day');

          done();
        });
    });
  });

  it('should have same behavior after a reset as before the reset', done => {
    vm = createVue(`
      <Date-picker type="datetimerange"></Date-picker>
    `);

    const picker = vm.$children[0];
    picker.handleIconClick();
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
          const [startInternalValue, endInternalValue] = picker.currentValue; // Date Objects
          const [startDisplayValue, endDisplayValue] = displayField.value.split(' - ').map(stringToDate); // Date Objects

          // clear picker
          picker.handleClear();
          vm.$nextTick(() => {
            // it should be closed by now
            expect(picker.visible).to.equal(false);
            // open picker again
            picker.handleIconClick();

            vm.$nextTick(() => {
              expect(picker.visible).to.equal(true);
              expect(JSON.stringify(picker.currentValue)).to.equal('[null,null]');
              expect(displayField.value).to.equal('');

              clickableCells[firstDayInMonthIndex].firstElementChild.click();
              vm.$nextTick(() => {
                clickableCells[firstDayInMonthIndex + 4].firstElementChild.click();
                vm.$nextTick(() => {
                  // recheck internal values
                  expect(Math.abs(picker.currentValue[0] - startInternalValue)).to.equal(0);
                  expect(Math.abs(picker.currentValue[1] - endInternalValue)).to.equal(0);
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
});
