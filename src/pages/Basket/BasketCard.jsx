import React from 'react'
import BasketCardUi from './BasketCardUi'

function BasketCard({ data }) {
    return (

        <div className='BasketContener'>
            {data.map((item) => (
                <BasketCardUi key={item.id} item={item} />
            ))}
        </div>
    )
}

export default BasketCard
