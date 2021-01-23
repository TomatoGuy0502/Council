import Request from '../services/http-request'

export const getAvailableDelibrations = () => {
  return Request({
    url: 'delibration',
    method: 'get'
  })
}

export const getAllDelibrations = () => {
  return Request({
    url: 'delibration/leader',
    method: 'get'
  })
}

export const createDelibration = ({ dName, startTime, endTime, position, semester, period }) => {
  return Request({
    url: 'delibration/createDelibration',
    data: {
      dName: dName,
      startTime: startTime,
      endTime: endTime,
      position: position,
      semester: semester,
      period: period
    },
    method: 'post'
  })
}

export const getEditDelibration = (delibrationID) => {
  return Request({
    url: '/delibration/editProposals/' + delibrationID,
    method: 'get'
  })
}

export const deleteDelibration = (delibrationID) => {
  return Request({
    url: '/delibration/deleteDelibration',
    data: {
      delibrationID: delibrationID
    },
    method: 'delete'
  })
}

export const saveEditDelibration = (delibrationID, { endTime, dName, period, position, semester, startTime }) => {
  return Request({
    url: '/delibration/saveEditDelibration',
    data: {
      delibrationID,
      endTime,
      dName,
      period,
      position,
      semester,
      startTime
    },
    method: 'post'
  })
}
