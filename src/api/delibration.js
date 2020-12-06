import Request from '../services/http-request'

export const delibration = () => {
  return Request({
    url: 'delibration',
    method: 'get'
  })
}

export const entry = (delibrationID) => {
  return Request({
    url: 'delibration/entry',
    data: {
      delibrationID: delibrationID
    },
    method: 'get'
  })
}

export const createDelibration = (dName, startTime, position, semester, period) => {
  return Request({
    url: 'delibration/createDelibration',
    data: {
      dName: dName,
      startTime: startTime,
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

export const saveEditDelibration = (delibrationID, proposal) => {
  return Request({
    url: '/delibration/saveEditProposal/',
    data: {
      delibrationID,
      proposal
    },
    method: 'post'
  })
}
