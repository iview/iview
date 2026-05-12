import { createVue, destroyVM, triggerEvent, waitForIt } from '../util';

const triggerKeydown = keyCode => {
  const event = document.createEvent('KeyboardEvent');

  event.initEvent('keydown', true, true);
  Object.defineProperty(event, 'keyCode', {
    get() {
      return keyCode;
    }
  });
  document.dispatchEvent(event);
};

const findByName = (vm, name) => vm.$children.find(child => child.$options.name === name);
const findByRef = (vm, ref) => vm.$children.find(child => child.$vnode && child.$vnode.data && child.$vnode.data.ref === ref);
const parseZIndex = element => parseInt(element.style.zIndex);

describe('Modal.vue', () => {
  let vm;

  afterEach(() => {
    if (vm) vm.$destroy();
    destroyVM(vm);
  });

  it('should keep draggable modal z-index within the visible overlay stack', done => {
    vm = createVue({
      template: `
        <div>
          <Modal ref="modal1" v-model="modal1" draggable title="Modal 1">Modal 1</Modal>
          <Modal ref="modal2" v-model="modal2" draggable title="Modal 2">Modal 2</Modal>
          <Modal ref="modal3" v-model="modal3" draggable title="Modal 3">Modal 3</Modal>
        </div>
      `,
      data() {
        return {
          modal1: false,
          modal2: false,
          modal3: false
        };
      }
    }, true);

    const getModal = index => findByRef(vm, `modal${index + 1}`);
    const getZIndex = index => parseZIndex(getModal(index).$el.querySelector('.ivu-modal-wrap'));

    vm.modal1 = true;
    vm.modal2 = true;
    waitForIt(() => getZIndex(0) === 1001 && getZIndex(1) === 1002, () => {
      expect(getZIndex(0)).to.equal(1001);
      expect(getZIndex(1)).to.equal(1002);

      for (let i = 0; i < 70; i++) {
        triggerEvent(getModal(1).$refs.content, 'click', true, true);
      }

      vm.$nextTick(() => {
        expect(getZIndex(0)).to.equal(1001);
        expect(getZIndex(1)).to.equal(1002);

        triggerEvent(getModal(0).$refs.content, 'click', true, true);
        vm.$nextTick(() => {
          expect(getZIndex(0)).to.equal(1002);
          expect(getZIndex(1)).to.equal(1001);

          vm.modal3 = true;
          vm.$nextTick(() => {
            expect(getZIndex(0)).to.equal(1002);
            expect(getZIndex(1)).to.equal(1001);
            expect(getZIndex(2)).to.equal(1003);

            vm.modal1 = false;
            vm.$nextTick(() => {
              expect(getZIndex(0)).to.equal(1002);
              expect(getZIndex(1)).to.equal(1001);
              expect(getZIndex(2)).to.equal(1003);
              done();
            });
          });
        });
      });
    });
  });

  it('should put a later drawer above an open modal', done => {
    vm = createVue({
      template: `
        <div>
          <Modal v-model="modal" title="Modal">Modal</Modal>
          <Drawer v-model="drawer" title="Drawer" :mask-style="maskStyle">Drawer</Drawer>
        </div>
      `,
      data() {
        return {
          modal: false,
          drawer: false,
          maskStyle: {
            zIndex: 900
          }
        };
      }
    }, true);

    const modal = findByName(vm, 'Modal');
    const drawer = findByName(vm, 'Drawer');
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));
    const getDrawerMaskZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-mask'));

    vm.modal = true;
    vm.drawer = true;
    waitForIt(() => getModalZIndex() === 1001 && getDrawerZIndex() === 1002, () => {
      expect(getModalZIndex()).to.equal(1001);
      expect(getDrawerZIndex()).to.equal(1002);
      expect(getDrawerMaskZIndex()).to.equal(1002);
      done();
    });
  });

  it('should not close a modal with Esc when a drawer is above it', done => {
    vm = createVue({
      template: `
        <div>
          <Modal v-model="modal" title="Modal">Modal</Modal>
          <Drawer v-model="drawer" title="Drawer">Drawer</Drawer>
        </div>
      `,
      data() {
        return {
          modal: false,
          drawer: false
        };
      }
    }, true);

    const modal = findByName(vm, 'Modal');
    const drawer = findByName(vm, 'Drawer');

    vm.modal = true;
    vm.drawer = true;
    waitForIt(() => modal.modalIndex === 1001 && drawer.drawerIndex === 1002, () => {
      triggerKeydown(27);
      setTimeout(() => {
        expect(modal.visible).to.equal(true);
        done();
      }, 0);
    });
  });

  it('should preserve overlay order when closing a middle modal', done => {
    vm = createVue({
      template: `
        <div>
          <Modal ref="modal1" v-model="modal1" draggable title="Modal 1">Modal 1</Modal>
          <Modal ref="modal2" v-model="modal2" draggable title="Modal 2">Modal 2</Modal>
          <Modal ref="modal3" v-model="modal3" draggable title="Modal 3">Modal 3</Modal>
        </div>
      `,
      data() {
        return {
          modal1: false,
          modal2: false,
          modal3: false
        };
      }
    }, true);

    const getModal = index => findByRef(vm, `modal${index + 1}`);
    const getZIndex = index => parseZIndex(getModal(index).$el.querySelector('.ivu-modal-wrap'));

    vm.modal1 = true;
    vm.modal2 = true;
    vm.modal3 = true;
    waitForIt(() => getZIndex(0) === 1001 && getZIndex(1) === 1002 && getZIndex(2) === 1003, () => {
      vm.modal2 = false;
      vm.$nextTick(() => {
        expect(getZIndex(0)).to.equal(1001);
        expect(getZIndex(1)).to.equal(1002);
        expect(getZIndex(2)).to.equal(1003);
        done();
      });
    });
  });

  it('should put a later modal above an open drawer', done => {
    vm = createVue({
      template: `
        <div>
          <Drawer v-model="drawer" title="Drawer">Drawer</Drawer>
          <Modal v-model="modal" title="Modal">Modal</Modal>
        </div>
      `,
      data() {
        return {
          drawer: false,
          modal: false
        };
      }
    }, true);

    const drawer = findByName(vm, 'Drawer');
    const modal = findByName(vm, 'Modal');
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));

    vm.drawer = true;
    vm.modal = true;
    waitForIt(() => getDrawerZIndex() === 1001 && getModalZIndex() === 1002, () => {
      expect(getDrawerZIndex()).to.equal(1001);
      expect(getModalZIndex()).to.equal(1002);
      done();
    });
  });

  it('should put later overlays above earlier custom z-index overlays', done => {
    vm = createVue({
      template: `
        <div>
          <Modal v-model="modal" title="Modal" :z-index="3000">Modal</Modal>
          <Drawer v-model="drawer" title="Drawer">Drawer</Drawer>
        </div>
      `,
      data() {
        return {
          modal: false,
          drawer: false
        };
      }
    }, true);

    const modal = findByName(vm, 'Modal');
    const drawer = findByName(vm, 'Drawer');
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));

    vm.modal = true;
    vm.drawer = true;
    waitForIt(() => getModalZIndex() === 3001 && getDrawerZIndex() === 3002, () => {
      expect(getModalZIndex()).to.equal(3001);
      expect(getDrawerZIndex()).to.equal(3002);
      done();
    });
  });

  it('should use drawer custom z-index as the visible overlay base', done => {
    vm = createVue({
      template: `
        <div>
          <Drawer v-model="drawer" title="Drawer" :z-index="3000">Drawer</Drawer>
          <Modal v-model="modal" title="Modal">Modal</Modal>
        </div>
      `,
      data() {
        return {
          drawer: false,
          modal: false
        };
      }
    }, true);

    const drawer = findByName(vm, 'Drawer');
    const modal = findByName(vm, 'Modal');
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));
    const getDrawerMaskZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-mask'));
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));

    vm.drawer = true;
    vm.modal = true;
    waitForIt(() => getDrawerZIndex() === 3001 && getModalZIndex() === 3002, () => {
      expect(getDrawerZIndex()).to.equal(3001);
      expect(getDrawerMaskZIndex()).to.equal(3001);
      expect(getModalZIndex()).to.equal(3002);
      done();
    });
  });

  it('should refresh visible overlay order when custom z-index changes', done => {
    vm = createVue({
      template: `
        <div>
          <Modal v-model="modal" title="Modal" :z-index="modalZIndex">Modal</Modal>
          <Drawer v-model="drawer" title="Drawer" :z-index="drawerZIndex">Drawer</Drawer>
        </div>
      `,
      data() {
        return {
          modal: false,
          drawer: false,
          modalZIndex: 1000,
          drawerZIndex: 1000
        };
      }
    }, true);

    const modal = findByName(vm, 'Modal');
    const drawer = findByName(vm, 'Drawer');
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));

    vm.modal = true;
    vm.drawer = true;
    waitForIt(() => getModalZIndex() === 1001 && getDrawerZIndex() === 1002, () => {
      vm.modalZIndex = 4000;
      vm.$nextTick(() => {
        expect(getModalZIndex()).to.equal(4001);
        expect(getDrawerZIndex()).to.equal(4002);

        vm.drawerZIndex = 5000;
        vm.$nextTick(() => {
          expect(getModalZIndex()).to.equal(5001);
          expect(getDrawerZIndex()).to.equal(5002);
          done();
        });
      });
    });
  });

  it('should compact overlay order after a top drawer leaves', done => {
    vm = createVue({
      template: `
        <div>
          <Modal v-model="modal" title="Modal">Modal</Modal>
          <Drawer v-model="drawer" title="Drawer">Drawer</Drawer>
        </div>
      `,
      data() {
        return {
          modal: false,
          drawer: false
        };
      }
    }, true);

    const modal = findByName(vm, 'Modal');
    const drawer = findByName(vm, 'Drawer');
    const getModalZIndex = () => parseZIndex(modal.$el.querySelector('.ivu-modal-wrap'));
    const getDrawerZIndex = () => parseZIndex(drawer.$el.querySelector('.ivu-drawer-wrap'));

    vm.modal = true;
    vm.drawer = true;
    waitForIt(() => getModalZIndex() === 1001 && getDrawerZIndex() === 1002, () => {
      vm.drawer = false;
      vm.$nextTick(() => {
        expect(getDrawerZIndex()).to.equal(1002);
        expect(getModalZIndex()).to.equal(1001);
        drawer.animationFinish();
        vm.$nextTick(() => {
          expect(getModalZIndex()).to.equal(1001);
          expect(drawer.drawerIndex).to.equal(0);
          done();
        });
      });
    });
  });

  it('should compact overlay order after a middle modal leaves', done => {
    vm = createVue({
      template: `
        <div>
          <Modal ref="modal1" v-model="modal1" title="Modal 1">Modal 1</Modal>
          <Modal ref="modal2" v-model="modal2" title="Modal 2">Modal 2</Modal>
          <Modal ref="modal3" v-model="modal3" title="Modal 3">Modal 3</Modal>
        </div>
      `,
      data() {
        return {
          modal1: false,
          modal2: false,
          modal3: false
        };
      }
    }, true);

    const getModal = index => findByRef(vm, `modal${index + 1}`);
    const getZIndex = index => parseZIndex(getModal(index).$el.querySelector('.ivu-modal-wrap'));

    vm.modal1 = true;
    vm.modal2 = true;
    vm.modal3 = true;
    waitForIt(() => getZIndex(0) === 1001 && getZIndex(1) === 1002 && getZIndex(2) === 1003, () => {
      vm.modal2 = false;
      vm.$nextTick(() => {
        expect(getZIndex(0)).to.equal(1001);
        expect(getZIndex(1)).to.equal(1002);
        expect(getZIndex(2)).to.equal(1003);

        getModal(1).animationFinish();
        vm.$nextTick(() => {
          expect(getZIndex(0)).to.equal(1001);
          expect(getModal(1).modalIndex).to.equal(0);
          expect(getZIndex(2)).to.equal(1002);
          done();
        });
      });
    });
  });
});
