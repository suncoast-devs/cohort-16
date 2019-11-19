import React, { useState } from 'react'

const App = () => {
  const [team1Score, setTeam1Score] = useState(0)
  const [team1Name, setTeam1Name] = useState('Team 1')

  const subtractScore = () => {
    if (team1Score > 0) {
      setTeam1Score(team1Score - 1)
    }
  }

  const addTeamScore = () => {
    if (team1Score < 21) {
      setTeam1Score(team1Score + 1)
    }
  }

  const updateTeam1Name = eventData => {
    if (eventData) {
      console.log('updating team 1 name', eventData.target.value)
      setTeam1Name(eventData.target.value)
    }
  }

  return (
    <>
      <h1>My Score Board</h1>
      <section className="teams" id="team1Section">
        <section className="team one">
          <section>
            <h2 className="team-1-name">{team1Name}</h2>
            <p className="team-1-score">{team1Score}</p>
          </section>
          <section>
            <section>
              update team 1 name
              <input
                type="text"
                className="team-1-input"
                onChange={updateTeam1Name}
              />
              <button className="update-team-1-name">Update</button>
            </section>
            <section>
              update team 1 score
              <button className="team-1-add-1-button" onClick={addTeamScore}>
                add 1
              </button>
              <button
                className="team-1-subtract-1-button"
                onClick={subtractScore}
              >
                subtract 1
              </button>
            </section>
          </section>
        </section>
        <section className="team two">
          <section>
            <h2 className="team-2-name">Team 2</h2>
            <p className="team-2-score">10</p>
          </section>

          <section>
            <section>
              update team 2 name
              <input type="text" className="team-2-input" />
              <button className="update-team-2-name">Update</button>
            </section>
            <section>
              update team 2 score
              <button className="team-2-add-1-button">add 1</button>
              <button className="team-2-subtract-1-button">subtract 1</button>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default App
