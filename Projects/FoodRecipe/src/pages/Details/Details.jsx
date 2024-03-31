import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";

const Details = () => {
  const { id } = useParams();

  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    };
    getProductDetails();
  }, []);

    console.log(recipeDetailsData)
  return <div>Details</div>;
};

export default Details;
