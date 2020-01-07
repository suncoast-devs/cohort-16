import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section>search bar</section>
      <main>
        <ul>
          <li>
            <Link>
              <p>Park name</p>
              <p>123 fake string, St Pete, Fl</p>
              <p>state | local | national</p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default HomePage
