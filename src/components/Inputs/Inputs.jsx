import React from 'react'
import '../Inputs/Inputs.css'
function Inputs({inputType,inputPlaceholder,inputClass}) {
  return (
    <label >
   {/* {labelText} */}
      <input type={inputType} placeholder={inputPlaceholder} className={`${inputClass} input`}/>
    </label>
  )
}

export default Inputs
