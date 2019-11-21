import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'

const App = () => {
  const [movies, setMovies] = useState([])

  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=2b39f89969ae6ac7cc55346160e79f11'
    )
    console.log(resp)
    // (a, b) => a.release_date - b.release_date))
    setMovies(
      resp.data.results.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return 1
        } else if (a.release_date < b.release_date) {
          return -1
        } else {
          return 0
        }
      })
    )
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <>
      <header>Party like its 1989! Woah.</header>
      <main>
        <ul>
          {movies.map((movie, index) => {
            return <Movie key={index} movie={movie} />
          })}
        </ul>
      </main>
    </>
  )
}

export default App
