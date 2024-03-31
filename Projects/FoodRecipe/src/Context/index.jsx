import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParams("");
    }
  };
  // console.log(loading , recipteList)
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
