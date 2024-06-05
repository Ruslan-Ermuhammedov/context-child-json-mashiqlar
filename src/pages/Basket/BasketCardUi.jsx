import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../../constants'
import Buttons from '../../components/Buttons/Buttons'
import Inputs from '../../components/Inputs/Inputs'
function str(text) {
    return text.slice(0, 35)
}
function BasketCardUi({ item }) {
    const { title, price, description, category, image, id, rate, count } = item
    const [soni, setSoni] = useState()
    const [products, setProducts] = useState([])
    const editProducts = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        rate: rate,
        id: id,
        count: count + soni
    }
    const shoppingHadlear = async () => {
        await axios.put(`${baseUrl}/products/${editProducts.id}`, editProducts)
            .then(() => {
                alert("siz mahsulotni harit qildingiz")
            })
            .catch(() => {
                alert("qandaydur hatolik bor")
            })
    }
    const DeleteBasket = () => {
        axios.delete(`${baseUrl}/basket/${item.id}`)

    }

    return (
        <div className='BasketCardUi'>
            <img src={image} alt="" />
            <div className='BasketCardUiText'>
                <h1>{str(title)}</h1>
                <h2>Price: {price}$</h2>
                <h2>Count: {count}</h2>
                <div className='InputCard'>
                    <button className='minusBtn'>-</button>
                    <input className='CountInput' type="text" placeholder='Mahsulot soni' />
                    <button className='pilusBtn'>+</button>
                </div>
                <div className='ButtonCard'>
                    <button className='shoppingBtn' onChange={shoppingHadlear} >Shopping</button>
                    <button className='deleteBtn' onClick={DeleteBasket}>Delete</button>
                </div>
                    {/* <Buttons btnWidth={"120px"} btnBgCorlor={"green"} btnPadding={"12px 20px"} btnColor={"white"}  >
                      Edit
                    </Buttons>
                    <Inputs inputType={"password"} inputPlaceholder={"parol kriting"} inputClass={"parolInput"} /> */}

            </div>

        </div>
    )
}

export default BasketCardUi
