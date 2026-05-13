import { createVue, destroyVM } from '../util';

describe('Modal.vue', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
    const modals = document.querySelectorAll('.ivu-modal-wrap, .ivu-modal-mask');
    Array.prototype.forEach.call(modals, modal => {
      modal.parentNode && modal.parentNode.removeChild(modal);
    });
  });

  it('should expose a callback to stop ok button loading', done => {
    let stopLoading;

    vm = createVue({
      template: `
        <Modal v-model="visible" title="Title" loading @on-ok="ok">
          Content
        </Modal>
      `,
      data () {
        return {
          visible: true
        };
      },
      methods: {
        ok (done) {
          stopLoading = done;
        }
      }
    }, true);

    vm.$nextTick(() => {
      const modal = vm.$children[0];
      modal.ok();

      vm.$nextTick(() => {
        expect(modal.buttonLoading).to.equal(true);
        expect(vm.visible).to.equal(true);

        stopLoading();

        vm.$nextTick(() => {
          expect(modal.buttonLoading).to.equal(false);
          expect(vm.visible).to.equal(true);
          done();
        });
      });
    });
  });
});
