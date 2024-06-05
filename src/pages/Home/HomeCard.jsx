import React from 'react'
import HomeCardUi from './HomeCardUi'

function HomeCard({ data }) {
    return (
        <div className='HomeContener'>
            {data.map((item) => (

                <HomeCardUi key={item.id} item={item}/>
                ))}
        </div>
    )
}

export default HomeCard
