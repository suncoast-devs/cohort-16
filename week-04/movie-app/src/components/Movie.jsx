import React from 'react'

const Movie = props => {
  return (
    <li>
      <img
        src={
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' +
          props.movie.poster_path
        }
        alt={'This is the movie post for ' + props.movie.title}
      />
      <header>{props.movie.title}</header>
      <p>{props.movie.overview}</p>
      <p>{props.movie.release_date}</p>
    </li>
  )
}

export default Movie
