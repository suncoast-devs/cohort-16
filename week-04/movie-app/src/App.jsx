import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [movies, setMovies] = useState([])

  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=2b39f89969ae6ac7cc55346160e79f11'
    )
    console.log(resp)
    setMovies(resp.data.results)
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
            return (
              <li key={index}>
                <img src="" alt="" />
                <header>{movie.title}</header>
                <p>
                  Overview - Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Explicabo molestias corporis et ex! Cum animi impedit
                  dicta fugit non corrupti dolore quod tempore. Laboriosam
                  incidunt beatae amet libero repudiandae debitis!
                </p>
                <p>11/21/1989</p>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
