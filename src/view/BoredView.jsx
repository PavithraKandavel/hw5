import React, { useState } from 'react'
import { fetchActivity } from '../model/BoredModel'

const BoredView = () => {
  const [activity, setActivity] = useState('')

  const handleClick = async () => {
    const newActivity = await fetchActivity()
    setActivity(newActivity)
  }

  return (
    <div>
      <h1>Bored App</h1>
      <p>{activity || 'Click the button to get a suggestion'}</p>
      <button onClick={handleClick}>Get Suggestion</button>
    </div>
  )
}

export default BoredView