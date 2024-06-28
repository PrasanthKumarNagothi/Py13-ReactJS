import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <a href="counter">Counter</a> <br />
        <Link to='counter' >Counter</Link> <br />
        <Link to='https://www.google.com/' >Google</Link> <br />
        <a href='https://www.google.com/' target='_blank'>Google</a>
    </div>
  )
}

export default Home