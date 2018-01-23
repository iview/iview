import filter from 'array-filter'

const Manager = class {
  constructor (data, count, fixedColumns) {
    this.data = data
    this.count = count
    if (fixedColumns) {
      this.fixedColumns = fixedColumns
    }
  }

  getChildren (value) {
    return filter(this.data, one => {
      return one.parent === value
    })
  }

  getFirstColumn () {
    return filter(this.data, one => {
      return !one.parent || one.parent === 0 || one.parent === '0'
    })
  }

  getPure (obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  getColumns (value) {
    // check is data contains the values
    if (value.length > 0) {
      const matchCount = this.getPure(this.data).filter((item) => {
        return this.getPure(value).indexOf(item.value) > -1
      }).length
      if (matchCount < this.getPure(value).length) {
        value = []
      }
    }
    var datas = []
    const max = this.fixedColumns || 8
    for (var i = 0; i < max; i++) {
      if (i === 0) {
        datas.push(this.getFirstColumn())
      } else {
        // 没有数据时，取得上一级的第一个
        if (!value[i]) {
          if (typeof datas[i - 1][0] === 'undefined') {
            break
          } else {
            const topValue = datas[i - 1][0].value
            datas.push(this.getChildren(topValue))
          }
        } else {
          datas.push(this.getChildren(value[i - 1]))
        }
      }
    }
    const list = datas.filter((item) => {
      return item.length > 0
    })
    // correct the column
    this.count = list.length
    return list
  }
}

export default Manager
