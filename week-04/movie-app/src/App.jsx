import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import SearchBar from './components/SearchBar'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const searchApi = async term => {
    if (term) {
      const resp = await axios.get(
        'https://api.themoviedb.org/3/search/movie?api_key=2b39f89969ae6ac7cc55346160e79f11&language=en-US&query=' +
          term +
          '&page=1&include_adult=false&year=1989'
      )

      setMovies(resp.data.results)
    } else {
      getDataFromApi()
    }
  }

  const handleSearchButtonClick = term => {
    searchApi(term)
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  // useEffect(() => {
  //   console.log(searchTerm)
  //   searchApi(searchTerm)
  // }, [searchTerm])

  return (
    <>
      <header>Party like its 1989! Woah.</header>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={setSearchTerm}
        handleSearchClick={() => handleSearchButtonClick(searchTerm)}
      />
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
