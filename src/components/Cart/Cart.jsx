import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
        const response = await fetch(`http://localhost:8082/api/users/cart/${id}`);
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
      const response = await fetch("http://localhost:8082/api/users/addToCart", {
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
      const response = await fetch("http://localhost:8082/api/users/removeFromCart", {
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
      const response = await fetch("http://localhost:8082/api/users/deleteFromCart", {
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
    <div className='cart-main'>
      {cartItems.length > 0 ? (
        <div className='cart-body'>
          <div className='cart-header'>
            <h3 className='cart-heading'>Welcome to my shopping cart!</h3>
          </div>
          {cartItems.map((item) => (
            <div className='cart-item' key={item.name}>
              <img className='cart-item-img' src="https://www.lookchem.cn/ProImage/2010/0626/79-14-1.jpg" alt="cart-product" />
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
                <button className='cart-item-delete' onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </div>
          ))}
          <div className='cart-total'>
            Total price: {Math.round(total * 100) / 100}
            <button className='cart-check-out'>Check Out</button>
          </div>
          
        </div>
      ) : (
        <div className='cart-empty'>
          <p>Your cart is empty. <span className='empty-cart' onClick={handleEmptyCart}>Start shopping!</span></p>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default Cart;
