import {createVue, destroyVM, waitForIt, promissedTick} from '../util';

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
        done();
      });
    });

    it('should create a Select component and take a pre-selected value', done => {
      vm = createVue({
          template: `
              <Select :value="value">
                <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
           `,
          data() {
              return {
                  value: 2,
                  options: [{value: 1, label: 'Foo'}, {value: 2, label: 'Bar'}]
              };
          }
      });
      waitForIt(
          () => {
              const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
              return selectedValueSpan && selectedValueSpan.textContent === 'Bar';
          },
          () => {
              const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
              const {label, value} = vm.$children[0].values[0];

              expect(selectedValueSpan.textContent).to.equal('Bar');
              expect(selectedValueSpan.style.display).to.not.equal('none');
              expect(label).to.equal('Bar');
              expect(value).to.equal(2);
              done();
          }
      );
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

    it('should display normal characters in input when in filterable mode', done => {
      vm = createVue({
        template: `
          <Select v-model="value" filterable>
            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        `,
        data() {
          return {
            value: 2,
            options: [{value: 1, label: '> 100$'}, {value: 2, label: '< 100$'}]
          };
        }
      });
      vm.$nextTick(() => {
        const input = vm.$el.querySelector('.ivu-select-input');
        expect(input.value).to.equal('< 100$');
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
        waitForIt(
            () => {
                const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
                return selectedValueSpan && selectedValueSpan.textContent === 'Bar';
            },
            () => {
                const placeholderSpan = vm.$el.querySelector('.ivu-select-placeholder');
                const selectedValueSpan = vm.$el.querySelector('.ivu-select-selected-value');
                expect(placeholderSpan).to.equal(null);
                expect(!!selectedValueSpan.style.display).to.not.equal('none');
                expect(selectedValueSpan.textContent).to.equal('Bar');
                done();
            }
        );
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
        expect(defaultSelect.className).to.equal('ivu-select ivu-select-single ivu-select-default');
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
        const componentOptions = vm.$children[0].flatOptions;
        return componentOptions && componentOptions.length > 0;
      };
      const callback = function() {
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

  describe('Behavior tests', () => {
      it('should create different and independent instances', done => {
          const options = [
              {value: 'beijing', label: 'Beijing'},
              {value: 'stockholm', label: 'Stockholm'},
              {value: 'lisboa', label: 'Lisboa'}
          ];

          vm = createVue({
              template: `
      <div>
        <i-select v-model="modelA" multiple style="width:260px">
          <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select v-model="modelB" multiple style="width:260px">
          <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
        </i-select>
      </div>
    `,
              data() {
                  return {
                      cityList: [],
                      modelA: [],
                      modelB: []
                  };
              },
              mounted() {
                  setTimeout(() => (this.cityList = options), 200);
              }
          });
          const [SelectA, SelectB] = vm.$children;
          SelectA.toggleMenu(null, true);
          SelectB.toggleMenu(null, true);

          new Promise(resolve => {
              const condition = function() {
                  const optionsA = SelectA.$el.querySelectorAll('.ivu-select-item');
                  const optionsB = SelectB.$el.querySelectorAll('.ivu-select-item');
                  return optionsA.length > 0 && optionsB.length > 0;
              };
              waitForIt(condition, resolve);
          })
              .then(() => {
                  // click in A options
                  const optionsA = SelectA.$el.querySelectorAll('.ivu-select-item');
                  optionsA[0].click();
                  return promissedTick(SelectA);
              })
              .then(() => {
                  expect(SelectA.value[0]).to.equal(options[0].value);
                  expect(SelectA.value.length).to.equal(1);
                  expect(SelectB.value.length).to.equal(0);

                  // click in B options
                  const optionsB = SelectB.$el.querySelectorAll('.ivu-select-item');
                  optionsB[1].click();
                  optionsB[2].click();
                  return promissedTick(SelectB);
              })
              .then(() => {
                  // lets check the values!
                  const getSelections = component => {
                      const tags = component.$el.querySelectorAll('.ivu-select-selection .ivu-tag');
                      return [...tags].map(el => el.textContent.trim()).join(',');
                  };
                  const selectAValue = getSelections(SelectA);
                  const selectBValue = getSelections(SelectB);

                  expect(selectAValue).to.equal(options[0].label);
                  expect(selectBValue).to.equal(options.slice(1, 3).map(obj => obj.label.trim()).join(','));

                  done();
              }).catch(err => {
              console.log(err);
              done(false);
          });
      });

      it('should create update model with value, and label when asked', done => {
          const options = [
              {value: 'beijing', label: 'Beijing'},
              {value: 'stockholm', label: 'Stockholm'},
              {value: 'lisboa', label: 'Lisboa'}
          ];
          let onChangeValueA, onChangeValueB;


          vm = createVue({
              template: `
                  <div>
                    <i-select v-model="modelA" style="width:260px" @on-change="onChangeA">
                      <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                    <i-select v-model="modelB" label-in-value style="width:260px" @on-change="onChangeB">
                      <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                  </div>
                `,
              data() {
                  return {
                      cityList: options,
                      modelA: [],
                      modelB: []
                  };
              },
              methods: {
                  onChangeA(val){
                      onChangeValueA = val;
                  },
                  onChangeB(val){
                      onChangeValueB = val;
                  }
              }
          });
          const [SelectA, SelectB] = vm.$children;
          SelectA.toggleMenu(null, true);
          SelectB.toggleMenu(null, true);


          new Promise(resolve => {
              const condition = function() {
                  const optionsA = SelectA.$el.querySelectorAll('.ivu-select-item');
                  const optionsB = SelectB.$el.querySelectorAll('.ivu-select-item');
                  return optionsA.length > 0 && optionsB.length > 0;
              };
              waitForIt(condition, resolve);
          })
          .then(() => {
              // click in A options
              const optionsA = SelectA.$el.querySelectorAll('.ivu-select-item');
              optionsA[0].click();
              return promissedTick(SelectA);
          })
          .then(() => {
              expect(vm.modelA).to.equal(options[0].value);
              expect(onChangeValueA).to.equal(options[0].value);

              // click in B options
              const optionsB = SelectB.$el.querySelectorAll('.ivu-select-item');
              optionsB[2].click();
              return promissedTick(SelectB);
          })
          .then(() => {
              expect(vm.modelB).to.equal(options[2].value);
              expect(JSON.stringify(onChangeValueB)).to.equal(JSON.stringify(options[2]));
              done();
          });
      });
  });

  describe('Public API', () => {
      it('The "setQuery" method should behave as expected', (done) => {

          const options = [
              {value: 'beijing', label: 'Beijing'},
              {value: 'stockholm', label: 'Stockholm'},
              {value: 'lisboa', label: 'Lisboa'}
          ];

          vm = createVue({
              template: `
                <Select v-model="value" filterable>
                    <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                `,
              data() {
                  return {
                      value: '',
                      options: options
                  };
              }
          });
          const [Select] = vm.$children;
          Select.setQuery('i');
          vm.$nextTick(() => {
              const query = 'i';
              const input = vm.$el.querySelector('.ivu-select-input');
              expect(input.value).to.equal(query);

              const renderedOptions = [...vm.$el.querySelectorAll('.ivu-select-item')].map(el => el.textContent);
              const filteredOptions = options.filter(option => JSON.stringify(option).includes(query)).map(({label}) => label);
              expect(JSON.stringify(renderedOptions)).to.equal(JSON.stringify(filteredOptions));

              // reset query
              // setQuery(null) should clear the select
              Select.setQuery(null);
              vm.$nextTick(() => {
                  const input = vm.$el.querySelector('.ivu-select-input');
                  expect(input.value).to.equal('');

                  const renderedOptions = [...vm.$el.querySelectorAll('.ivu-select-item')].map(el => el.textContent);
                  expect(JSON.stringify(renderedOptions)).to.equal(JSON.stringify(options.map(({label}) => label)));
                  done();
              });
          });

      });

      it('The "clearSingleSelect" method should behave as expected', (done) => {

          // clearSingleSelect
          const options = [
              {value: 'beijing', label: 'Beijing'},
              {value: 'stockholm', label: 'Stockholm'},
              {value: 'lisboa', label: 'Lisboa'}
          ];
          const preSelected = 'lisboa';

          vm = createVue({
              template: `
                <Select v-model="value" clearable>
                    <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                `,
              data() {
                  return {
                      value: preSelected,
                      options: options
                  };
              }
          });
          const [Select] = vm.$children;
          vm.$nextTick(() => {
              expect(Select.publicValue).to.equal(preSelected);
              Select.clearSingleSelect();
              expect(typeof Select.publicValue).to.equal('undefined');
              done();
          });
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
        const componentOptions = vm.$children[0].flatOptions;
        return componentOptions && componentOptions.length === manyLaterOptions.length;
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
