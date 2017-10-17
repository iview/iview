export const csvA = {
  columns: [
    {
      title: '名称',
      key: 'name',
      fixed: 'left',
      width: 200
    },
    {
      title: '展示',
      key: 'show',
      width: 150,
      sortable: true
    },
    {
      title: '唤醒',
      key: 'weak',
      width: 150,
      sortable: true
    },
    {
      title: '登录',
      key: 'signin',
      width: 150,
      sortable: true
    },
    {
      title: '点击',
      key: 'click',
      width: 150,
      sortable: true
    },
    {
      title: '激活',
      key: 'active',
      width: 150,
      sortable: true
    },
    {
      title: '7日留存',
      key: 'day7',
      width: 150,
      sortable: true
    },
    {
      title: '30日留存',
      key: 'day30',
      width: 150,
      sortable: true
    },
    {
      title: '次日留存',
      key: 'tomorrow',
      width: 150,
      sortable: true
    },
    {
      title: '日活跃',
      key: 'day',
      width: 150,
      sortable: true
    },
    {
      title: '周活跃',
      key: 'week',
      width: 150,
      sortable: true
    },
    {
      title: '月活跃',
      key: 'month',
      width: 150,
      sortable: true
    }
  ],
  data: [
    {
      name: '推广名称1',
      fav: 0,
      show: 7302,
      weak: 5627,
      signin: 1563,
      click: 4254,
      active: 1438,
      day7: 274,
      day30: 285,
      tomorrow: 1727,
      day: 558,
      week: 4440,
      month: 5610
    },
    {
      name: '推广名称2',
      fav: 0,
      show: 4720,
      weak: 4086,
      signin: 3792,
      click: 8690,
      active: 8470,
      day7: 8172,
      day30: 5197,
      tomorrow: 1684,
      day: 2593,
      week: 2507,
      month: 1537
    },
    {
      name: '推广名称3',
      fav: 0,
      show: 7181,
      weak: 8007,
      signin: 8477,
      click: 1879,
      active: 16,
      day7: 2249,
      day30: 3450,
      tomorrow: 377,
      day: 1561,
      week: 3219,
      month: 1588
    },
    {
      name: '推广名称4',
      fav: 0,
      show: 9911,
      weak: 8976,
      signin: 8807,
      click: 8050,
      active: 7668,
      day7: 1547,
      day30: 2357,
      tomorrow: 7278,
      day: 5309,
      week: 1655,
      month: 9043
    },
    {
      name: '推广名称5',
      fav: 0,
      show: 934,
      weak: 1394,
      signin: 6463,
      click: 5278,
      active: 9256,
      day7: 209,
      day30: 3563,
      tomorrow: 8285,
      day: 1230,
      week: 4840,
      month: 9908
    },
    {
      name: '推广名称6',
      fav: 0,
      show: 6856,
      weak: 1608,
      signin: 457,
      click: 4949,
      active: 2909,
      day7: 4525,
      day30: 6171,
      tomorrow: 1920,
      day: 1966,
      week: 904,
      month: 6851
    },
    {
      name: '推广名称7',
      fav: 0,
      show: 5107,
      weak: 6407,
      signin: 4166,
      click: 7970,
      active: 1002,
      day7: 8701,
      day30: 9040,
      tomorrow: 7632,
      day: 4061,
      week: 4359,
      month: 3676
    },
    {
      name: '推广名称8',
      fav: 0,
      show: 862,
      weak: 6520,
      signin: 6696,
      click: 3209,
      active: 6801,
      day7: 6364,
      day30: 6850,
      tomorrow: 9408,
      day: 2481,
      week: 1479,
      month: 2346
    },
    {
      name: '推广名称9',
      fav: 0,
      show: 567,
      weak: 5859,
      signin: 128,
      click: 6593,
      active: 1971,
      day7: 7596,
      day30: 3546,
      tomorrow: 6641,
      day: 1611,
      week: 5534,
      month: 3190
    },
    {
      name: '推广名称10',
      fav: 0,
      show: 3651,
      weak: 1819,
      signin: 4595,
      click: 7499,
      active: 7405,
      day7: 8710,
      day30: 5518,
      tomorrow: 428,
      day: 9768,
      week: 2864,
      month: 5811
    }
  ],
  expected: `
      名称,展示,唤醒,登录,点击,激活,7日留存,30日留存,次日留存,日活跃,周活跃,月活跃
      推广名称1,7302,5627,1563,4254,1438,274,285,1727,558,4440,5610
      推广名称2,4720,4086,3792,8690,8470,8172,5197,1684,2593,2507,1537
      推广名称3,7181,8007,8477,1879,16,2249,3450,377,1561,3219,1588
      推广名称4,9911,8976,8807,8050,7668,1547,2357,7278,5309,1655,9043
      推广名称5,934,1394,6463,5278,9256,209,3563,8285,1230,4840,9908
      推广名称6,6856,1608,457,4949,2909,4525,6171,1920,1966,904,6851
      推广名称7,5107,6407,4166,7970,1002,8701,9040,7632,4061,4359,3676
      推广名称8,862,6520,6696,3209,6801,6364,6850,9408,2481,1479,2346
      推广名称9,567,5859,128,6593,1971,7596,3546,6641,1611,5534,3190
      推广名称10,3651,1819,4595,7499,7405,8710,5518,428,9768,2864,5811
  `
};

export const csvB = {
  columns: [
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '地址',
      key: 'address'
    }
  ],
  data: [
    {
      name: '王小明',
      age: 18,
      address: '北京市朝\n阳区芍药居'
    },
    {
      name: '张小刚',
      age: 25,
      address: '北京市海,淀区西二旗'
    },
    {
      name: '李小红',
      age: 30,
      address: '上海市浦东\r新区世纪大道'
    },
    {
      name: '周小伟',
      age: 26,
      address: '深圳市南山区深南大道'
    }
  ],
  expected: `
    "姓名";"年龄";"地址"
    "王小明";"18";"北京市朝\n阳区芍药居"
    "张小刚";"25";"北京市海,淀区西二旗"
    "李小红";"30";"上海市浦东\r新区世纪大道"
    "周小伟";"26";"深圳市南山区深南大道"
  `
};
