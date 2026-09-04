import { createVue, destroyVM } from '../util';
import { csvA, csvB } from './assets/table/csvData.js';

const cleanCSV = (str) => str.split('\n').map(s => s.trim()).filter(Boolean).join('\n');

describe('Table.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  describe('CSV export', () => {
    it('should export simple data to CSV - test A', done => {
      vm = createVue({
        template: '<div><Table :columns="columns" :data="data" ref="tableA" /></div>',
        data() {
          return csvA;
        },
        mounted() {
          this.$refs.tableA.exportCsv({callback: data => {
            expect(cleanCSV(data)).to.equal(cleanCSV(this.expected));
            expect(cleanCSV(data).length > 0).to.equal(true);
            done();
          }});
        }
      });
    });

    it('should export data with commas and line breaks to CSV - test B', done => {
      vm = createVue({
        template: '<div><Table :columns="columns" :data="data" ref="tableB" /></div>',
        data() {
          return csvB;
        },
        mounted() {
          this.$refs.tableB.exportCsv({separator: ';', quoted: true, callback: data => {
            expect(cleanCSV(data)).to.equal(cleanCSV(this.expected));
            expect(cleanCSV(data).length > 0).to.equal(true);
            done();
          }});
        }
      });
    });

  });

  describe('column resizing', () => {
    it('resizes an enabled column and emits the final widths', done => {
      const resizeEvents = [];
      vm = createVue({
        template: '<div><Table :columns="columns" :data="data" ref="table" @on-column-width-resize="recordResize" /></div>',
        data() {
          return {
            columns: [{ title: 'Name', key: 'name', width: 120, minWidth: 80, maxWidth: 160, resizable: true }],
            data: [{ name: 'Ada' }],
            resizeEvents
          };
        },
        methods: {
          recordResize(newWidth, oldWidth, column, event) {
            this.resizeEvents.push({ newWidth, oldWidth, column, event });
          }
        },
        mounted() {
          this.$nextTick(() => {
            const handle = this.$el.querySelector('.ivu-table-resize-handle');
            expect(handle).to.exist;

            handle.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0, clientX: 100 }));
            document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: 150 }));
            document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 150 }));

            expect(this.$refs.table.cloneColumns[0].width).to.equal(160);
            expect(this.resizeEvents).to.have.length(1);
            expect(this.resizeEvents[0].newWidth).to.equal(160);
            expect(this.resizeEvents[0].oldWidth).to.equal(120);
            expect(this.resizeEvents[0].column.key).to.equal('name');
            expect(this.resizeEvents[0].event).to.be.an.instanceof(MouseEvent);
            expect(document.body.classList.contains('ivu-table-resizing')).to.equal(false);
            done();
          });
        }
      });
    });

    it('does not render a resize handle unless the column opts in', done => {
      vm = createVue({
        template: '<div><Table :columns="columns" :data="data" /></div>',
        data() {
          return {
            columns: [{ title: 'Name', key: 'name', width: 120 }],
            data: [{ name: 'Ada' }]
          };
        },
        mounted() {
          this.$nextTick(() => {
            expect(this.$el.querySelector('.ivu-table-resize-handle')).to.equal(null);
            done();
          });
        }
      });
    });

    it('honors the configured minimum width', done => {
      vm = createVue({
        template: '<div><Table :columns="columns" :data="data" ref="table" /></div>',
        data() {
          return {
            columns: [{ title: 'Name', key: 'name', width: 120, minWidth: 90, resizable: true }],
            data: [{ name: 'Ada' }]
          };
        },
        mounted() {
          this.$nextTick(() => {
            const handle = this.$el.querySelector('.ivu-table-resize-handle');
            handle.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0, clientX: 100 }));
            document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: 20 }));
            document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 20 }));
            expect(this.$refs.table.cloneColumns[0].width).to.equal(90);
            done();
          });
        }
      });
    });
  });

});
