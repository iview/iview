import {createVue, destroyVM, waitForIt} from '../util';

describe('Select.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  describe('Props tests', () => {
    it('should create a Select component with passed placeholder', done => {
      const placeholder = 'Hi! Select something!';
      vm = createVue({
        template: `
          <Select placeholder="${placeholder}">
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: [{value: 1, label: 'Foo'}, {value: 2, label: 'Bar'}]
          };
        }
      });
      vm.$nextTick(() => {
        const placeholderSpan = vm.$el.querySelector('.ivu-select-placeholder');
        expect(placeholderSpan.textContent).to.equal(placeholder);
        expect(placeholderSpan.style.display).to.not.equal('none');

        expect(vm.$children[0].showPlaceholder).to.equal(true);
        done();
      });
    });

    it('should create a Select component and take a pre-selected value', done => {
      vm = createVue({
        template: `
          <Select :value="2">
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: [{value: 1, label: 'Foo'}, {value: 2, label: 'Bar'}]
          };
        }
      });
      vm.$nextTick(() => {
        const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
        expect(selectedValueSpan.textContent).to.equal('Bar');
        expect(selectedValueSpan.style.display).to.not.equal('none');
        expect(vm.$children[0].selectedSingle).to.equal('Bar');
        expect(vm.$children[0].model).to.equal(2);
        done();
      });
    });

    it('should accept normal characters', done => {
      vm = createVue({
        template: `
          <Select :value="2">
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: [{value: 1, label: '> 100$'}, {value: 2, label: '< 100$'}]
          };
        }
      });
      vm.$nextTick(() => {
        const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
        expect(selectedValueSpan.textContent).to.equal('< 100$');
        done();
      });
    });

    it('should use the value\'s label instead of placeholder when both are set', done => {
      vm = createVue({
        template: `
          <Select placeholder="Choose anything!" :value="2">
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: [{value: 1, label: 'Foo'}, {value: 2, label: 'Bar'}]
          };
        }
      });
      vm.$nextTick(() => {
        const placeholderSpan = vm.$el.querySelector('.ivu-select-placeholder');
        const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
        expect(placeholderSpan.style.display).to.equal('none');
        expect(selectedValueSpan.style.display).to.not.equal('none');
        done();
      });
    });

    it('should set different classes for different sizes', done => {
      vm = createVue(`
        <div>
          <Select placeholder="Choose anything!"><Option v-for="item in []" :value="item" :key="item">{{item}}</Option></Select>
          <Select placeholder="Choose anything!" size="large"><Option v-for="item in []" :value="item" :key="item">{{item}}</Option></Select>
          <Select placeholder="Choose anything!" size="small"><Option v-for="item in []" :value="item" :key="item">{{item}}</Option></Select>
        </div>
	  `);
      vm.$nextTick(() => {
        const [defaultSelect, largeSelect, smallSelect] = [...vm.$el.querySelectorAll('.ivu-select')];
        expect(defaultSelect.className).to.equal('ivu-select ivu-select-single');
        expect(largeSelect.classList.contains('ivu-select-large')).to.equal(true);
        expect(smallSelect.classList.contains('ivu-select-small')).to.equal(true);
        done();
      });
    });

    it('should set new options', done => {
      const laterOptions = [{value: 1, label: 'Foo'}, {value: 2, label: 'Bar'}];

      vm = createVue({
        template: `
          <Select>
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: []
          };
        },
        mounted() {
          this.$nextTick(() => (this.options = laterOptions));
        }
      });
      const condition = function() {
        return vm.$children[0].options.length > 0;
      };
      const callback = function() {
        if (vm.$children[0].options == 0) return setTimeout(waitForIt.bind(null, done), 50);
        expect(JSON.stringify(vm.$children[0].options)).to.equal(JSON.stringify(laterOptions));

        const renderedOptions = vm.$el.querySelectorAll('.ivu-select-dropdown-list li');
        expect(renderedOptions.length).to.equal(laterOptions.length);

        const labels = [...renderedOptions].map(el => el.textContent).join('<>');
        const expected = laterOptions.map(o => o.label).join('<>');
        expect(labels).to.equal(expected);
        done();
      };
      waitForIt(condition, callback);
    });
  });

  describe('Performance tests', () => {
    it('should handle big numbers of options', done => {
      const manyLaterOptions = Array.apply(null, Array(200)).map((_, i) => {
        return {
          value: i + 1,
          label: Math.random().toString(36).slice(2).toUpperCase()
        };
      });
      const start = +new Date();
      vm = createVue({
        template: `
          <Select>
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: '',
            options: []
          };
        },
        mounted() {
          this.$nextTick(() => (this.options = manyLaterOptions));
        }
      });
      const condition = function() {
        return vm.$children[0].options.length == manyLaterOptions.length;
      };
      const callback = function() {
        const end = +new Date();
        const renderedOptions = vm.$el.querySelectorAll('.ivu-select-dropdown-list li');
        expect(renderedOptions.length).to.equal(manyLaterOptions.length);
        expect(end - start).to.be.not.above(1000);
        done();
      };
      waitForIt(condition, callback);
    });
  });
});
