import Tree from '../../../src/components/tree/tree.vue';
import { createTest, destroyVM } from '../util';

/* global sinon */

const dragEvent = (clientY = 45) => ({
  clientY,
  currentTarget: {
    getBoundingClientRect: () => ({ top: 0, height: 90 }),
    contains: () => false
  },
  relatedTarget: null,
  preventDefault: sinon.spy(),
  dataTransfer: {
    setData: sinon.spy(),
    effectAllowed: '',
    dropEffect: ''
  }
});

describe('Tree.vue drag and drop', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('marks allowed tree nodes as draggable', () => {
    const data = [{ title: 'allowed' }, { title: 'blocked' }];
    vm = createTest(Tree, {
      data,
      draggable: true,
      allowDrag: node => node.title !== 'blocked'
    });

    const nodes = vm.$el.querySelectorAll('.ivu-tree-node-content');
    expect(nodes[0].getAttribute('draggable')).to.equal('true');
    expect(nodes[1].getAttribute('draggable')).to.equal('false');
  });

  it('reorders nodes before and after a sibling', () => {
    const first = { title: 'first' };
    const second = { title: 'second' };
    const third = { title: 'third' };
    const data = [first, second, third];
    vm = createTest(Tree, { data, draggable: true });

    expect(vm.moveNode(first, third, 'after')).to.equal(true);
    expect(data).to.deep.equal([second, third, first]);
    expect(vm.moveNode(first, second, 'before')).to.equal(true);
    expect(data).to.deep.equal([first, second, third]);
  });

  it('moves a node below another node and expands the target', () => {
    const child = { title: 'child' };
    const parent = { title: 'parent' };
    const data = [child, parent];
    vm = createTest(Tree, { data, draggable: true });

    expect(vm.moveNode(child, parent, 'inner')).to.equal(true);
    expect(data).to.deep.equal([parent]);
    expect(parent.children).to.deep.equal([child]);
    expect(parent.expand).to.equal(true);
    expect(vm.flatState).to.have.length(2);
  });

  it('prevents a node from being dropped into its descendant', () => {
    const child = { title: 'child' };
    const parent = { title: 'parent', children: [child] };
    vm = createTest(Tree, { data: [parent], draggable: true });

    expect(vm.canDrop(parent, child, 'inner')).to.equal(false);
    expect(vm.canDrop(parent, child, 'after')).to.equal(false);
  });

  it('honors allowDrop and emits the drag lifecycle events', () => {
    const first = { title: 'first' };
    const second = { title: 'second' };
    const data = [first, second];
    const allowDrop = sinon.spy((draggingNode, dropNode, type) => type !== 'inner');
    vm = createTest(Tree, { data, draggable: true, allowDrop });
    const start = sinon.spy();
    const over = sinon.spy();
    const drop = sinon.spy();
    vm.$on('on-drag-start', start);
    vm.$on('on-drag-over', over);
    vm.$on('on-drop', drop);

    const startEvent = dragEvent();
    vm.handleDragStart(startEvent, first);
    expect(start.calledOnce).to.equal(true);
    expect(startEvent.dataTransfer.setData.calledWith('text/plain', String(first.nodeKey))).to.equal(true);

    const rejectedEvent = dragEvent(45);
    vm.handleDragOver(rejectedEvent, second);
    expect(rejectedEvent.preventDefault.called).to.equal(false);
    expect(vm.dragState.dropNode).to.equal(null);

    const acceptedEvent = dragEvent(89);
    vm.handleDragOver(acceptedEvent, second);
    expect(acceptedEvent.preventDefault.calledOnce).to.equal(true);
    expect(over.calledOnce).to.equal(true);
    expect(vm.dragState.dropType).to.equal('after');

    vm.handleDrop(acceptedEvent, second);
    expect(drop.calledOnce).to.equal(true);
    expect(drop.firstCall.args.slice(0, 3)).to.deep.equal([first, second, 'after']);
    expect(data).to.deep.equal([second, first]);
    expect(allowDrop.called).to.equal(true);
  });
});
