import React from 'react'
import '../Buttons/Buttons.css'
function Buttons({children,btnWidth,btnBgCorlor,btnPadding,btnColor}) {
  return (
    <button className='Buttuns' style={{width:btnWidth,background:btnBgCorlor,padding:btnPadding, color:btnColor}} >
      {children}
    </button>
  )
}

export default Buttons

