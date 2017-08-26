const {prevMonth, nextMonth, getDayCountOfMonth} = require('../../../src/components/date-picker/util.js');

// yyyy-mm-dd -> Date
function dateFromString(str) {
  str = str.split('-').map(Number);
  str[1] = str[1] - 1;
  return new Date(...str);
}

// Date -> yyyy-mm-dd
function dateToString(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

describe('DatePicker utility functions', () => {
  const assets = [
		{date: '2030-3-31', prevMonth: '2030-2-28', nextMonth: '2030-4-30', count: 31},
		{date: '2030-3-28', prevMonth: '2030-2-28', nextMonth: '2030-4-28', count: 31},
		{date: '2030-3-1', prevMonth: '2030-2-1', nextMonth: '2030-4-1', count: 31},
		{date: '2030-2-1', prevMonth: '2030-1-1', nextMonth: '2030-3-1', count: 28},
		{date: '2030-1-1', prevMonth: '2029-12-1', nextMonth: '2030-2-1', count: 31},
		{date: '2030-12-31', prevMonth: '2030-11-30', nextMonth: '2031-1-31', count: 31},
		{date: '2030-6-30', prevMonth: '2030-5-30', nextMonth: '2030-7-30', count: 30},
		{date: '2030-5-31', prevMonth: '2030-4-30', nextMonth: '2030-6-30', count: 31},
		{date: '2032-3-31', prevMonth: '2032-2-29', nextMonth: '2032-4-30', count: 31},
		{date: '2032-2-1', prevMonth: '2032-1-1', nextMonth: '2032-3-1', count: 29}
  ];

  it('Should behave as pure functions and not change source date', () => {
    const date = new Date(2030, 4, 10);
    const original = date.getMonth();
    const foo = prevMonth(date);

    expect(original).to.equal(date.getMonth());

    const bar = nextMonth(date);
    expect(original).to.equal(date.getMonth());
    expect(bar.getMonth() - foo.getMonth()).to.equal(2);
  });

  it('Should calculate the previous month', () => {
    for (const asset of assets) {
      const date = dateFromString(asset.date);
      const previous = prevMonth(date);

      expect(dateToString(previous)).to.equal(asset.prevMonth);
    }
  });

  it('Should calculate the next month', () => {
    for (const asset of assets) {
      const date = dateFromString(asset.date);
      const next = nextMonth(date);

      expect(dateToString(next)).to.equal(asset.nextMonth);
    }
  });

  it('Should calculate the month length', () => {
    for (const asset of assets) {
      const date = dateFromString(asset.date);
      const monthLength = getDayCountOfMonth(date.getFullYear(), date.getMonth());

      expect(monthLength).to.equal(asset.count);
    }
  });
});
