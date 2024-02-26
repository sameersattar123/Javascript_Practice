import React from 'react'
import RandomColors from './components/RandomColors/RandomColors'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMoreData from './components/LoadMoreData/LoadMoreData'
// import Accordion from './components/accordion/accordion'


const App = () => {
  return (
    <>
    {/* Accordion Component */}
    {/* <Accordion/> */}

    {/* Generate Random Colors */}
    <RandomColors/>

    {/* Star Rating */}
    <StarRating stars={10}/>

    {/* image slider */}
    <ImageSlider
     url={"https://picsum.photos/v2/list"}
     page={"1"}
     limit={"10"}
     />

     {/* Load More Data */}
    <LoadMoreData/>
    
    </>
  )
}

export default App