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
      <h1>Activity Selector Application</h1>
      <p>{activity || 'Click on get suggestion to pick an acitivity'}</p>
      <button onClick={handleClick}>Get Suggestion</button>
    </div>
  )
}

export default BoredView