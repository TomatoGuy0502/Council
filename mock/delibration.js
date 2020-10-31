import Mock from 'mockjs'

const Random = Mock.Random

export default [
  // 取得當前所列的所有議事
  // Random response five delibrations
  {
    url: '/delibration',
    type: 'get',
    response: () => {
      const delibrations = []
      for (let i = 0; i < 5; i++) {
        const delibration = {
          delibrationID: 'AX' + (i + 100).toString(),
          name: '第' + Random.cword('零一二三四五六七八九十') + '次財委會',
          createTime:
            '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
          startTime:
            '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
          endTime:
            '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
          position:
            '第' +
            Random.cword('零一二三四五六七八九十') +
            Random.cword('零一二三四五六七八九十') +
            '期學生代表大會 財委',
          semester: Random.integer(100, 110),
          period: Random.integer(1, 4)
        }
        delibrations.push(delibration)
      }
      return delibrations
    }
  },
  {
    url: '/delibration/editDelibration/' + 'AX100',
    type: 'get',
    response: () => {
      return {
        delibrationID: 10782,
        name: '第一次財委會',
        createTime: '109-01-07 22:00:00',
        startTime: '109-02-02 12:00:00',
        endTime: '109-02-02 13:00:00',
        position: '第四十三期學生代表大會 財委',
        semester: 108,
        period: 1,
        proposal: [
          {
            proposalID: 1,
            dept: '學生會1',
            reason: 'for fun',
            description: 'just fun',
            discussion: 'nothing'
          },
          {
            proposalID: 2,
            dept: '學生會2',
            reason: 'for fun',
            description: 'just fun',
            discussion: 'nothing'
          }
        ]
      }
    }
  }
]
