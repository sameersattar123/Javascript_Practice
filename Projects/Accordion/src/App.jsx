import React from 'react'
import { Accordion } from './components/accordion/accordion'
import RandomColors from './components/RandomColors/RandomColors'
import StarRating from './components/StarRating/StarRating'

const App = () => {
  return (
    <>
    {/* Accordion Component */}
    <Accordion/>

    {/* Generate Random Colors */}
    <RandomColors/>

    {/* Star Rating */}
    <StarRating stars={10}/>
    </>
  )
}

export default App