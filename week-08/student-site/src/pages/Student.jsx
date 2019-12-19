import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Student = props => {
  const [student, setStudent] = useState({})

  const [doingWell, setDoingWell] = useState('')
  const [improve, setImprove] = useState('')
  const [attendance, setAttendance] = useState('')

  const getStudent = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/student/${props.match.params.id}`
    )

    setStudent(resp.data)
  }

  const sendProgressReportToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/progressreport', {
      attendanceIssues: attendance,
      improvement: improve,
      doingWell: doingWell,
      studentId: parseInt(props.match.params.id),
    })

    console.log(resp.data)
  }

  useEffect(() => {
    getStudent()
  }, [])
  return (
    <div>
      <h1>{student.fullName}</h1>
      <h2>GPA: {student.gpa}</h2>
      <h3>{student.isJoyful ? 'Joyful!!!!!!!' : 'Grumpy today'}</h3>
      <section>
        <header>New Progress report</header>
        doing well:{' '}
        <input
          type="text"
          value={doingWell}
          onChange={e => setDoingWell(e.target.value)}
        />
        could improve:{' '}
        <input
          type="text"
          value={improve}
          onChange={e => setImprove(e.target.value)}
        />
        attendance issues:{' '}
        <input
          type="text"
          value={attendance}
          onChange={e => setAttendance(e.target.value)}
        />
        <button onClick={sendProgressReportToApi}>
          Create Progress Report
        </button>
      </section>
    </div>
  )
}

export default Student
