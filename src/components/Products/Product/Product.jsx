import { Link } from "react-router-dom";
import './Product.css'
import { useState } from "react";
import {FaCartPlus} from 'react-icons/fa';

function Product(props) {
    const { product_id, name, category, price, description } = props.product;
  
    const [error, setError] = useState('');
    
    const addToCart = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      try {
        const response = await fetch("https://aipurui-backend.onrender.com/api/users/addToCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ 
            userId: userId,
            itemName: name,
            itemId: product_id,
            itemDescription: description,
            itemPrice: price
          }),
        });
  
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log(userId);
          const { message } = await response.json();
          setError(message);
        }
      } catch (error) {
        setError('An error occurred while processing your request. Please try again later.');
      }
    }

    return (
      <div className='product'>
        
          <Link to="/product" state={{ product_id: product_id, name: name, category: category, price: price,  description: description}}>
            <div className="p-img">
            <img src={require(`../../../assets/${product_id}.webp`)} />
            </div>
          </Link>

        <h3 className="label">{name}</h3>
        <p className="label">分类: {category}</p>
        <p className="label">价格: {price}</p>
        <button className="inquriy" onClick={addToCart}>
          <Link>
            <FaCartPlus/> <span>加入购物车</span> 
          </Link>
        </button>
      </div>
    );
}

export default Product;