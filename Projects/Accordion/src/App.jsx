import React from 'react'
import { Accordion } from './components/accordion/accordion'
import RandomColors from './components/RandomColors/RandomColors'

const App = () => {
  return (
    <>
    {/* Accordion Component */}
    <Accordion/>

    {/* Generate Random Colors */}
    <RandomColors/>
    </>
  )
}

export default App