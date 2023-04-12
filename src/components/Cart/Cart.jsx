import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Cart.css'

const Cart = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://aipurui-backend.onrender.com/api/users/cart/${id}`);
        const data = await response.json();
        setCartItems(data.items);
        setTotal(data.total);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserData();
  }, [id, navigate]);

  const handleIncrement = async (item) => {
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
          userId: id,
          itemName: item.name,
          itemDescription: item.description,
          itemPrice: item.price
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setCartItems(data.items);
        setTotal(data.total);
      } else {
        console.log(userId);
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      setError('An error occurred while processing your request. Please try again later.');
    }
  }

  const handleDecrement = async (item) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (item.quantity == 1) {
      return;
    }

    try {
      const response = await fetch("https://aipurui-backend.onrender.com/api/users/removeFromCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          userId: id,
          itemName: item.name,
          itemDescription: item.description,
          itemPrice: item.price
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setCartItems(data.items);
        setTotal(data.total);
      } else {
        console.log(userId);
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      setError('An error occurred while processing your request. Please try again later.');
    }
  }

  const handleDelete = async (item) => {
    try {
      const response = await fetch("https://aipurui-backend.onrender.com/api/users/deleteFromCart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          userId: id,
          itemName: item.name,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.items);
        setTotal(data.total);
      } else {
        setError("Error");
      }
    } catch (error) {
      setError("An error happened");
    }
  }

  const handleEmptyCart = () => {
    navigate('/');
  }

  return (
    <div>
      <Nav />
      <div className='cart-main'>
      
      {cartItems.length > 0 ? (
        <div className='cart-body'>
          <div className='cart-header'>
            <h3 className='cart-heading'>我的购物车</h3>
          </div>
          {cartItems.map((item) => (
            <div className='cart-item' key={item.name}>
              <img className='cart-item-img' src={require(`../../assets/${item.product_id}.webp`)} alt="cart-product" />
              <div className='cart-item-middle'>
                <div className='cart-item-name'>{item.name}</div>
                {/* <div className='cart-item-des'>{item.description}</div> */}
                <div className='cart-quan'>
                  <button className='cart-item-quan-button' onClick={() => handleIncrement(item)}>+</button>
                  <div className='cart-item-quantity'>{item.quantity}</div>
                  <button className='cart-item-quan-button' onClick={() => handleDecrement(item)}>-</button>
                </div>
                
              </div>
              <div className='cart-item-right'>
                <div className='cart-item-price'><span className='cart-rmb'>¥</span><span>{item.price}</span></div>
                <button className='cart-item-delete' onClick={() => handleDelete(item)}>删除</button>
              </div>
            </div>
          ))}
          <div className='cart-total'>
            总价: {Math.round(total * 100) / 100}
            <button className='cart-check-out'>开始结算</button>
          </div>
          
        </div>
      ) : (
        <div className='cart-empty'>
          <p>购物车竟然是空的 <span className='empty-cart' onClick={handleEmptyCart}>现在就逛！嗷嗷嗷~</span></p>
        </div>
      )}
      {/* </div> */}
    </div>
    </div>
  );
}

export default Cart;
