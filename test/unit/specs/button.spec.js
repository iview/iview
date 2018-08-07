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
});
