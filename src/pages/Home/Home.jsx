import React, { useEffect, useReducer, useState } from 'react'
import '../Home/Home.css'
import axios from 'axios';
import { baseUrl } from '../../constants';
import HomeCard from './HomeCard';
import { prodcutsReducer, productsInitialState } from '../../reducer/ProductsReducer/ProductsReducer';
function Home() {


  const [state, dispatch] = useReducer(prodcutsReducer, productsInitialState)
  useEffect(() => {
    function fetchData() {
      dispatch({ type: "LOADING" })
      axios.get(`${baseUrl}/products`)
        .then((res) => dispatch({ type: "SUCCESS", payload: res.data }))
        .catch(() => dispatch({ type: "REJECTED", payload: "Tzimda hatolik bor" }))
    }
    fetchData()
  }, [])
  return (
    <div className='Home'>
      {state.isLoading && <h1>Loading....</h1>}
      {state.rejected && <h1>{state.rejected}</h1>}
      {state.isSuccess && <HomeCard data={state.datas} />}
    </div>
  )
}

export default Home
