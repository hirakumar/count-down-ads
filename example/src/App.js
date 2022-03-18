import React from 'react'

import { CountDown } from 'countdown'
import 'countdown/dist/index.css'

const App = () => {
  return (
    <CountDown
      startdate='2022-03-20'
      starttime='23:55:00'
      url='https://images.freeimages.com/images/large-previews/d9c/parrot-attack-1410608.jpg'
    />
  )
}

export default App
