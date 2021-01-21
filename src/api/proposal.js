import Request from '../services/http-request'

/*
    @param {int} proposalID
    @param {string} sponsor
*/

export const getProposals = (delibrationID) => {
  return Request({
    url: 'proposal/' + delibrationID,
    method: 'get'
  })
}

export const getProposalData = (delibrationID, proposalID) => {
  return Request({
    url: 'proposal/' + delibrationID + '/' + proposalID,
    method: 'get'
  })
}

export const createVote = () => {
  return Request({
    url: 'proposal/createVote',
    method: 'get'
  })
}

export const vote = (proposalID, studentID, result, isAmendment) => {
  return Request({
    url: 'proposal/vote',
    data: {
      proposalID: proposalID,
      studentID: studentID,
      result: result,
      isAmendment: isAmendment
    },
    method: 'post'
  })
}

export const isVoted = (proposalID, isAmendment) => {
  return Request({
    url: 'proposal/isVoted',
    data: {
      proposalID: proposalID,
      isAmendment: isAmendment
    },
    method: 'post'
  })
}

export const voteResults = (proposalID, isAmendment) => {
  return Request({
    url: 'proposal/voteResults',
    data: {
      proposalID: proposalID,
      isAmendment: isAmendment
    },
    method: 'post'
  })
}

export const saveEditProposals = (delibrationID, proposal) => {
  return Request({
    url: 'proposal/saveEditProposals',
    data: {
      delibrationID,
      proposal
    },
    method: 'put'
  })
}
