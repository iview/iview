import { createVue, destroyVM } from '../util';

describe('Affix.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create a Affix component without slot', done => {
    vm = createVue('<Affix></Affix>');
    expect(vm.$el.children[0].tagName).to.equal('DIV');
    expect(vm.$el.children[0].className).to.equal('');
    done();
  });

  it('should create a Affix component with slot', done => {
    vm = createVue(`
        <Affix>
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
    `);
    expect(vm.$el.children[0].children[0].tagName).to.equal('SPAN');
    expect(vm.$el.children[0].children[0].className).to.equal('demo-affix');
    done();
  });

  it('set offset-top props', done => {
    vm = createVue(`
    <div>
        <Affix :offset-top="20">
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    expect(vm.$el.children[0].children[0].classList.contains('ivu-affix')).to.false;
    expect(vm.$el.children[0].children[0].style.top).to.equal('');
    expect(vm.$el.children[0].children[1].style.display).to.equal('none');
    window.scrollTo(0, 10000);
    setTimeout(()=>{
      expect(vm.$el.children[0].children[0].classList.contains('ivu-affix')).to.true;
      expect(vm.$el.children[0].children[0].style.top).to.equal('20px');
      expect(vm.$el.children[0].children[1].style.display).to.equal('');
      done();
    }, 100);
  });

  it('set offset-bottom props', done => {
    vm = createVue(`
    <div>
        <div style="width: 100%; height: 2000px"></div>
        <Affix :offset-bottom="20">
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.false;
    expect(vm.$el.children[1].children[0].style.bottom).to.equal('');
    // Affix component haven't run handleScroll function when component mounted in real dom.
    // use scrollTo() to trigger scroll event.
    window.scrollTo(0, 100);
    setTimeout(()=>{
      expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.true;
      expect(vm.$el.children[1].children[0].style.bottom).to.equal('20px');
      window.scrollTo(0, 10000);
      setTimeout(()=>{
        expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.false;
        expect(vm.$el.children[1].children[0].style.bottom).to.equal('');
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
    expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.false;
    expect(vm.$el.children[1].children[0].style.bottom).to.equal('');
    // Affix component haven't run handleScroll function when component mounted in real dom.
    // use scrollTo() to trigger scroll event.
    window.scrollTo(0, 100);
    setTimeout(()=>{
      expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.true;
      expect(vm.$el.children[1].children[0].style.bottom).to.equal('20px');
      window.scrollTo(0, 10000);
      setTimeout(()=>{
        expect(vm.$el.children[1].children[0].classList.contains('ivu-affix')).to.false;
        expect(vm.$el.children[1].children[0].style.bottom).to.equal('');
        done();
      }, 100);
    }, 100);
  });

  it('both props not set, should fixed and top equal 0', done => {
    vm = createVue(`
    <div>
        <Affix>
            <span class="demo-affix">Fixed at the top</span>
        </Affix>
        <div style="width: 100%; height: 2000px"></div>
    </div>
    `, true);
    expect(vm.$el.children[0].children[0].classList.contains('ivu-affix')).to.false;
    expect(vm.$el.children[0].children[0].style.top).to.equal('');
    expect(vm.$el.children[0].children[1].style.display).to.equal('none');
    window.scrollTo(0, 10000);
    setTimeout(()=>{
      expect(vm.$el.children[0].children[0].classList.contains('ivu-affix')).to.true;
      expect(vm.$el.children[0].children[0].style.top).to.equal('0px');
      expect(vm.$el.children[0].children[1].style.display).to.equal('');
      done();
    }, 100);
  });

});