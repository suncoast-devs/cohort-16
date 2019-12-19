import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Student = props => {
  const [student, setStudent] = useState({})

  const getStudent = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/student/${props.match.params.id}`
    )

    setStudent(resp.data)
  }

  useEffect(() => {
    getStudent()
  }, [])
  return (
    <div>
      <h1>{student.fullName}</h1>
      <h2>GPA: {student.gpa}</h2>
      <h3>{student.isJoyful ? 'Joyful!!!!!!!' : 'Grumpy today'}</h3>
    </div>
  )
}

export default Student
