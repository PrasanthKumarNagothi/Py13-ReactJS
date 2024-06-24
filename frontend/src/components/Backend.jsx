import React from 'react'
import axios from 'axios'

function Backend() {
  async function api() {
    const getres = await axios.get('http://127.0.0.1:8000/api/')
    console.log(getres.data);
    const postres = await axios.post(
      'http://127.0.0.1:8000/api/post/',
      {"message" : "Attempt Successful"}
    )
    console.log(postres.data);
  }
  api()
  return (
    <div>Backend</div>
  )
}

export default Backend