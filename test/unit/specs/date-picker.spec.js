import { createVue, destroyVM } from '../util';

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
});
