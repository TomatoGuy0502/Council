const users = [
  {
    studentID: 'H00000000',
    isLeader: true
  },
  {
    studentID: 'H00000001',
    isLeader: false
  }
]

export default [
  // User Login
  // If User Name equals to H00000000, then send Success response
  {
    url: '/user/login',
    type: 'post',
    response: req => {
      const request = JSON.parse(req.body)
      const studentID = request.studentID
      for (const user of users) {
        if (user.studentID === studentID) {
          return {
            studentID,
            isLeader: user.isLeader
          }
        }
      }
      return {
        isLogin: 'fail'
      }
    }
  },
  // User Sign In
  {
    url: '/user/signIn',
    type: 'post',
    response: req => {
      const {
        studentID,
        department,
        grade,
        email,
        name,
        password,
        position
      } = req.body

      if (studentID && department && grade && email && name && password && position) {
        return {
          create: 'Create success!'
        }
      } else {
        return {
          create: 'Create fail!'
        }
      }
    }
  }
]
