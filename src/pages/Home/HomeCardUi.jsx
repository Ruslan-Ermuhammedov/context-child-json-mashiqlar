import React, { useRef } from 'react'
import { baseUrl } from '../../constants'
import { useState } from 'react'
import { SlBasket } from 'react-icons/sl'
import axios from 'axios'
import { RiDeleteBinLine } from 'react-icons/ri'
import Buttons from '../../components/Buttons/Buttons'
function str(text) {
    return text.slice(0, 15)
}
function HomeCardUi({ item }) {
    const { title, price, description, category, image, rate, id, count } = item
    const [soni, setSoni] = useState(count)
    const countRef = useRef()
    const editProducts = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        rate: rate,
        id: id,
        count: count - soni
    }
    const shoppingHendlear = async () => {
        await axios.put(`${baseUrl}/products/${editProducts.id}`, editProducts)
            .then(() => {
                alert("siz mahsulotni harit qildingiz")
            })
            .catch(() => {
                alert("qandaydur hatolik bor")
            })
    }
    const newBasketProductes = {
        ...item,
        count: Number(soni)
    }
    const addToBasket = async () => {
        await axios.put(`${baseUrl}/products/${editProducts.id}`, editProducts)
        await axios.post(`${baseUrl}/basket`, newBasketProductes)
            .then((res) => {
                alert("basketga qoshildi")
            })
            .catch(() => alert("qandaydur hatolik bor"))
    }

    return (
        <div className='HomeCardUi'>
            <img src={image} alt="" />
            <h1>{str(title)}</h1>
            <h2 className='Count'>Count: {count}</h2>
            <input onChange={e => setSoni(e.target.value)} ref={countRef} className='countInput' type="text" placeholder='Mahsulot soni' />
            <h2>Price: {price}$</h2>
            <div className='ButtonCard'>
                <button className='shoppingBtn' onClick={shoppingHendlear}>Shopping</button>
                <button className='basketBtn' onClick={addToBasket}><SlBasket className='IconBasket' /></button>

            </div>
            {/* <Buttons btnWidth={"120px"} btnBgCorlor={"green"} btnPadding={"12px 20px"} btnColor={"white"}  >
                delete
                <RiDeleteBinLine />
            </Buttons> */}
        </div>
    )
}

export default HomeCardUi
// const PutData = {
//     ...item,
//     count:soni2,
//     id:id
// }

// function App() {
//     const [editedProduct, setEditedProduct] = useState({ id: 1, name: 'Yangi nom', price: 0 });
//     const [message, setMessage] = useState('');

//     const handleEdit = () => {
//         // Obyektni yangilash
//         setEditedProduct({ ...editedProduct, name: 'Yangi nom', price: 100 });

//       // Axios bilan "put" so'rovni yuborish
//       axios.put(`https://api.example.com/products/${editedProduct.id}`, editedProduct)
//         .then((response) => {
//           // Ma'lumotlar muvaffaqiyatli yangilandi
//           setMessage('Ma\'lumotlar muvaffaqiyatli yangilandi');
//         })
//         .catch((error) => {
//           // Xatolik sodir bo'ldi
//           setMessage('Xatolik sodir bo\'ldi');
//         });
//     };