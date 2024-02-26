import React, { useEffect, useState } from 'react'
import "./LoadMoreData.css"


const LoadMoreData = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const fetchProducts = async() => {
       try {
        setLoading(true)
         const response = await fetch( `https://dummyjson.com/products?limit=20&skip=${
             count === 0 ? 0 : count * 20
           }`)
 
          const data = await response.json()
          console.log(data)

          if (data && data.products && data.products.length) {
            setProducts((prevData) => [...prevData ,  ...data.products])
            setLoading(false)
          }
       } catch (error) {
            console.log(e.message)
            setLoading(false)
       }
    }

    useEffect(() => {
        fetchProducts();
    }, [count])
    
    useEffect(() => {
      if (products && products.length == 100) setDisabled(true)
    }, [products])


    if (loading) {
        return <div>Loading data ! Please wait.</div>;
      }

      
    
  return (
    <>
    <div className="load-more-container">
      <div className="product-container">
        {
            products && products.length > 0 ? 
            products.map((item, index) => {
                return (
                    <div className="product" key={index}>
                        <img
                        src={item.thumbnail}
                        alt={item.title}
                        />
                        <p>{item.title}</p>
                    </div>
                )
            })  : null
        }
      </div>
      <div className="button-container">   
        <button disabled={disabled} onClick={() => setCount(count + 1)}>Load More Products</button>
        {disabled ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
    </>
  )
}

export default LoadMoreData
