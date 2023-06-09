import {FaHome, FaProductHunt, FaInfoCircle, FaUser, FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handleProfileClick = () => {
    
    if (!token || !userId) {
      navigate('/login');
      return;
    }
    
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
      const currentTime = Date.now();
      
      if (expirationTime < currentTime) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
        return;
      }
      
      navigate(`/profile/${userId}`);
      
    } catch (error) {
      console.error('Error parsing token:', error);
      navigate('/login');
    }
  }

  const handleCartOnclick = () => {
    
    if (!token || !userId) {
      navigate('/login');
      return;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
      const currentTime = Date.now();
      
      if (expirationTime < currentTime) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
        return;
      }
      
      navigate(`/cart/${userId}`);
      
    } catch (error) {
      console.error('Error parsing token:', error);
      navigate('/login');
    }
  }

  const handleAboutClick = () => {
    navigate('/about');
  }

  const handleHomeClick = () => {
    navigate('/');
  }

  return (
      <div className='all'>

      <div className='shopnavbg1'>
        <div className='navbox'>
          <button onClick={handleHomeClick} className='navbutton'>
              <a><FaHome /> 首页</a>
          </button>
          <button onClick={handleHomeClick} className='navbutton'>
              <a><FaProductHunt /> 产品</a>
          </button>
          <button onClick={handleAboutClick} className='navbutton'>
              <a><FaInfoCircle /> 关于我们</a>
          </button>
          <button onClick={handleProfileClick} className='navbutton'>
              <a><FaUser /> 个人中心</a>
          </button>
          <button onClick={handleCartOnclick} className='navbutton'>
              <a><FaShoppingCart /> 购物车</a>
          </button>
          
        </div>
      </div>
    </div>
    
  )
}

export default Nav;