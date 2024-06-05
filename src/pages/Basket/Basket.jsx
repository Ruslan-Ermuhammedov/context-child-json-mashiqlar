import React, { useEffect, useReducer } from 'react'
import '../Basket/Basket.css'
import axios from 'axios'
import { prodcutsReducer, productsInitialState } from '../../reducer/ProductsReducer/ProductsReducer'
import { baseUrl } from '../../constants'
import BasketCard from './BasketCard'
function Basket() {


  const [state, dispatch] = useReducer(prodcutsReducer, productsInitialState)
  useEffect(() => {
    function fetchData() {
      dispatch({ type: "LOADING" })
      axios.get(`${baseUrl}/basket`)
        .then((res) => dispatch({ type: "SUCCESS", payload: res.data }))
        .catch(() => dispatch({ type: "REJECTED", payload: "Tzimda hatolik bor" }))
    }
    fetchData()
  }, [])
  return (
    <div className='Home'>
 
      {state.isLoading && <h1>Loading....</h1>}
      {state.rejected && <h1>{state.rejected}</h1>}
      {state.isSuccess && <BasketCard data={state.datas} />}
    </div>
  )
}

export default Basket
