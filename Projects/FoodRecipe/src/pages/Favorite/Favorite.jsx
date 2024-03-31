import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Favorite = () => {
  const { favoritesList, loading } = useContext(GlobalContext);

  if (loading) return <Spinner />;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => {
          return <RecipeItem item={item} key={item.id} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to add in favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
