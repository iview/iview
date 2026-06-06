import { createVue, destroyVM, waitForIt } from '../util';
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

  describe('expand keepAlive', () => {
    it('should keep expanded component instance after collapse and reopen', done => {
      const ExpandContent = {
        name: 'ExpandContent',
        props: {
          row: Object
        },
        mounted() {
          this.$root.expandMountCount += 1;
        },
        render(h) {
          return h('div', this.row.name);
        }
      };

      vm = createVue({
        components: { ExpandContent },
        template: '<div><Table :columns="columns" :data="data" ref="table" /></div>',
        data() {
          return {
            expandMountCount: 0,
            columns: [
              {
                type: 'expand',
                keepAlive: true,
                render: (h, params) => h(ExpandContent, {
                  props: {
                    row: params.row
                  }
                })
              },
              {
                title: 'Name',
                key: 'name'
              }
            ],
            data: [
              {
                name: 'iView'
              }
            ]
          };
        },
        mounted() {
          this.$refs.table.toggleExpand(0);
          this.$nextTick(() => {
            waitForIt(() => this.expandMountCount === 1, () => {
              this.$refs.table.toggleExpand(0);
              this.$nextTick(() => {
                this.$refs.table.toggleExpand(0);
                this.$nextTick(() => {
                  expect(this.expandMountCount).to.equal(1);
                  done();
                });
              });
            });
          });
        }
      }, true);
    });
  });

});
