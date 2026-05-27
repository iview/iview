import {createVue, destroyVM, triggerEvent, waitForIt} from '../util';

describe('Modal.vue', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('should stop button loading and keep visible when on-ok promise rejects', done => {
    vm = createVue({
      template: `
        <Modal v-model="visible" loading @on-ok="handleOk">
          <p>Modal content</p>
        </Modal>
      `,
      data () {
        return {
          visible: true,
          rejectOk: null
        };
      },
      methods: {
        handleOk () {
          return new Promise((resolve, reject) => {
            this.rejectOk = reject;
          });
        }
      }
    }, true);

    vm.$nextTick(() => {
      const okButton = document.querySelector('.ivu-modal-footer .ivu-btn-primary');
      triggerEvent(okButton, 'click');

      vm.$nextTick(() => {
        expect(okButton.classList.contains('ivu-btn-loading')).to.equal(true);
        vm.rejectOk();

        waitForIt(() => !okButton.classList.contains('ivu-btn-loading'), () => {
          expect(vm.visible).to.equal(true);
          done();
        });
      });
    });
  });

  it('should close when loading on-ok promise resolves', done => {
    vm = createVue({
      template: `
        <Modal v-model="visible" loading @on-ok="handleOk">
          <p>Modal content</p>
        </Modal>
      `,
      data () {
        return {
          visible: true,
          resolveOk: null
        };
      },
      methods: {
        handleOk () {
          return new Promise(resolve => {
            this.resolveOk = resolve;
          });
        }
      }
    }, true);

    vm.$nextTick(() => {
      const okButton = document.querySelector('.ivu-modal-footer .ivu-btn-primary');
      triggerEvent(okButton, 'click');
      vm.resolveOk();

      waitForIt(() => vm.visible === false, () => {
        expect(vm.visible).to.equal(false);
        done();
      });
    });
  });
});
