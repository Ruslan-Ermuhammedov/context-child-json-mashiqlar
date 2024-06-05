import React from 'react'
import '../Card/Card.jsx'
import Inputs from '../../components/Inputs/Inputs.jsx'
function Card() {
  // const mevalar1=["olma","banan","apelsin",]
  // const mevalar2=["kivi","orik","shaftoli",]
  // const mevalar3=[ ...mevalar1 ,...mevalar2]
// console.log(mevalar1)
// console.log(mevalar2)
// console.log(mevalar3)

  return (
    <div className='Card'>
      <h1>card</h1>
            <Inputs inputType={"email"} inputPlaceholder={"Email kriting"} inputClass={"emailInput"} />
          
    </div>
  )
}

export default Card
