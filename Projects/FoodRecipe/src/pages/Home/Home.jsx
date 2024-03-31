import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import RecipeItem from '../../components/RecipeItem/RecipeItem'
import Spinner from '../../components/Spinner/Spinner'

const Home = () => {
    const {recipeList , loading } = useContext(GlobalContext)
    console.log(recipeList)

    if (loading) return <Spinner/>
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => {
          return (
            <RecipeItem item={item} key={item.id} />
          )
        })
        ):(
          <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
        )
      }
    </div>
  )
}

export default Home