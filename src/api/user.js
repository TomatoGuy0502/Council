import Request from '../services/http-request'

/*
    @param {} studentID
    @param {} department
    @param {} grade
    @param {} email
    @param {} name
    @param {} password
    @param {} position
*/
export const signUp = ({ studentID, department, grade, email, name, password, position }) => {
  return Request({
    url: 'user/signup',
    data: {
      studentID: studentID,
      department: department,
      grade: grade,
      email: email,
      name: name,
      password: password,
      position: position
    },
    method: 'post'
  })
}

/*
    @param {string} studentID
    @param {string} password
*/

export const login = (studentID, password) => {
  // TODO: 處理403情況
  return Request({
    url: 'user/login',
    data: {
      studentID: studentID,
      password: password
    },
    method: 'post'
  })
}
