import { createVue, destroyVM } from '../util';

describe('Button.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should render as <a>', done => {
    vm = createVue(`
      <Button to="http://www.thinkinfe.tech/">Think in FE</Button>
    `);
    expect(vm.$el.tagName).to.equal('A');
    done();
  });

  it('should render as <button>', done => {
    vm = createVue(`
      <Button>Think in FE</Button>
    `);
    expect(vm.$el.tagName).to.equal('BUTTON');
    done();
  });

  it('handle with `type` attribute', done => {
    // should render with `type` attribute
    // if it is a <button>
    vm = createVue(`
      <Button htmlType="reset">Think in FE</Button>
    `);
    expect(vm.$el.getAttribute('type')).to.equal('reset');

    // should't render with `type` attribute
    // if it is a <button>
    vm = createVue(`
      <Button to="http://www.thinkinfe.tech/" htmlType="reset">Think in FE</Button>
    `);
    expect(vm.$el.getAttribute('type')).to.equal(null);
    done();
  });

  it('should change loading state', done => {
    vm = createVue({
        template: `
            <Button :loading="loading" @click="fetch">Think in FE</Button>
        `,
        data() {
            return {loading: false};
        },
        methods: {
            fetch() {
                this.loading = true;
            }
        }
    });
    vm.$el.click();
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('ivu-btn-loading')).to.equal(true);
      const $icons = vm.$el.querySelectorAll('.ivu-icon');
      expect($icons.length).to.equal(1);
      expect($icons[0].classList.contains('ivu-load-loop')).to.equal(true);
      expect($icons[0].classList.contains('ivu-icon-ios-loading')).to.equal(true);
      done();
    });
  });
});
