import { createVue, destroyVM } from '../util';

describe('TimePicker.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create a TimePicker component with hours, minutes and seconds', done => {
    vm = createVue(`
      <Time-Picker></Time-Picker>
    `);
    const picker = vm.$children[0];
    picker.handleIconClick(); // open the picker panels

    vm.$nextTick(() => {
      const spiners = picker.$el.querySelectorAll('.ivu-time-picker-cells-list');
      expect(spiners.length).to.equal(3); // hh:mm:ss
      expect(spiners[0].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(24);
      expect(spiners[1].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(60);
      expect(spiners[2].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(60);
      done();
    });
  });

  it('should create a TimePicker component with only hours and minutes', done => {
    vm = createVue(`
      <Time-Picker format="HH:mm"></Time-Picker>
    `);
    const picker = vm.$children[0];
    picker.handleIconClick(); // open the picker panels

    vm.$nextTick(() => {
      const spiners = picker.$el.querySelectorAll('.ivu-time-picker-cells-list');
      expect([...spiners].filter(el => el.style.display != 'none').length).to.equal(2); // hh:mm
      expect(spiners[0].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(24);
      expect(spiners[1].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(60);
      done();
    });
  });

  it('should create a TimePicker component with steps of 15 minutes', done => {
    vm = createVue(`
	    <Time-Picker :steps="[1, 15]"></Time-Picker>
	  `);
    const picker = vm.$children[0];
    picker.handleIconClick(); // open the picker panels

    vm.$nextTick(() => {
      const spiners = picker.$el.querySelectorAll('.ivu-time-picker-cells-list');
      const minutesList = [...spiners[1].querySelectorAll('.ivu-time-picker-cells-cell')];

      expect(spiners[0].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(24);
      expect(minutesList.map(el => el.textContent).join(',')).to.equal('00,15,30,45');
      expect(spiners[1].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(4);
      expect(spiners[2].querySelectorAll('.ivu-time-picker-cells-cell').length).to.equal(60);
      done();
    });
  });
});
