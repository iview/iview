import { createVue, destroyVM } from '../util';

describe('Affix.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create a Affix component without slot', done => {
    vm = createVue('<Affix></Affix>');
    const affix = vm.$el.children[0];
    
    expect(affix.tagName).to.equal('DIV');
    expect(affix.className).to.equal('');
    done();
  });

  it('should create a Affix component contain slot', done => {
    vm = createVue(`
        <Affix>
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
    `);
    const slot = vm.$el.children[0].children[0];

    expect(slot.tagName).to.equal('SPAN');
    expect(slot.className).to.equal('demo-affix');
    done();
  });

  it('only set offset-top props', done => {
    vm = createVue(`
    <div>
        <Affix :offset-top="20">
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    const affix = vm.$el.children[0].children[0];
    const fakeBlock = vm.$el.children[0].children[1];

    expect(affix.classList.contains('ivu-affix')).to.false;
    expect(affix.style.top).to.equal('');
    expect(fakeBlock.style.display).to.equal('none');
    window.scrollTo(0, 10000);
    setTimeout(()=>{
      expect(affix.classList.contains('ivu-affix')).to.true;
      expect(affix.style.top).to.equal('20px');
      expect(fakeBlock.style.display).to.equal('');
      done();
    }, 100);
  });

  it('only set offset-bottom props', done => {
    vm = createVue(`
    <div>
        <div style="width: 100%; height: 2000px"></div>
        <Affix :offset-bottom="20">
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    const affix = vm.$el.children[1].children[0];

    expect(affix.classList.contains('ivu-affix')).to.false;
    expect(affix.style.bottom).to.equal('');
    // Affix component haven't run handleScroll function when component mounted in real dom.
    // use scrollTo() to trigger scroll event.
    window.scrollTo(0, 100);
    setTimeout(()=>{
      expect(affix.classList.contains('ivu-affix')).to.true;
      expect(affix.style.bottom).to.equal('20px');
      window.scrollTo(0, 10000);
      setTimeout(()=>{
        expect(affix.classList.contains('ivu-affix')).to.false;
        expect(affix.style.bottom).to.equal('');
        done();
      }, 100);
    }, 100);
  });

  it('both props are set, only offset-bottom is valid', done => {
    vm = createVue(`
    <div>
        <div style="width: 100%; height: 2000px"></div>
        <Affix :offset-bottom="20" :offset-top="20">
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    const affix = vm.$el.children[1].children[0];

    expect(affix.classList.contains('ivu-affix')).to.false;
    expect(affix.style.bottom).to.equal('');
    // Affix component haven't run handleScroll function when component mounted in real dom.
    // use scrollTo() to trigger scroll event.
    window.scrollTo(0, 100);
    setTimeout(()=>{
      expect(affix.classList.contains('ivu-affix')).to.true;
      expect(affix.style.bottom).to.equal('20px');
      window.scrollTo(0, 10000);
      setTimeout(()=>{
        expect(affix.classList.contains('ivu-affix')).to.false;
        expect(affix.style.bottom).to.equal('');
        done();
      }, 100);
    }, 100);
  });

  it('both props are not set, should fixed top and top equal 0px', done => {
    vm = createVue(`
    <div>
        <Affix>
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    const affix = vm.$el.children[0].children[0];
    const fakeBlock = vm.$el.children[0].children[1];
    
    expect(affix.classList.contains('ivu-affix')).to.false;
    expect(affix.style.top).to.equal('');
    expect(fakeBlock.style.display).to.equal('none');
    window.scrollTo(0, 10000);
    setTimeout(()=>{
      expect(affix.classList.contains('ivu-affix')).to.true;
      expect(affix.style.top).to.equal('0px');
      expect(fakeBlock.style.display).to.equal('');
      done();
    }, 100);
  });

});