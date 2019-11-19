import React, { useState } from 'react'

const Team = props => {
  console.log(props)
  const [teamScore, setTeamScore] = useState(0)
  const [teamName, setTeamName] = useState('Team ' + props.teamNumber)
  const subtractScore = () => {
    if (teamScore > 0) {
      setTeamScore(teamScore - 1)
    }
  }

  const addTeamScore = () => {
    if (teamScore < 21) {
      setTeamScore(teamScore + 1)
    }
  }

  const updateTeamName = eventData => {
    if (eventData) {
      console.log('updating team name', eventData.target.value)
      setTeamName(eventData.target.value)
    }
  }

  return (
    <section className="team one">
      <section>
        <h2 className={'team-' + props.teamNumber + '-name'}>{teamName}</h2>
        <p className="team-1-score">{teamScore}</p>
      </section>
      <section>
        <section>
          update team {props.teamNumber} name
          <input
            type="text"
            className="team-1-input"
            onChange={updateTeamName}
          />
          <button className="update-team-1-name">Update</button>
        </section>
        <section>
          update team {props.teamNumber} score
          <button className="team-1-add-1-button" onClick={addTeamScore}>
            add 1
          </button>
          <button className="team-1-subtract-1-button" onClick={subtractScore}>
            subtract 1
          </button>
        </section>
      </section>
    </section>
  )
}

export default Team
