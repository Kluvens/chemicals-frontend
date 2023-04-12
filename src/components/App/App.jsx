import { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/Header';
import Product from '../Products/Product/Product';
import Items from '../Products/Products';
import { useNavigate, Link, useNavigation } from "react-router-dom";
import Footer from '../Footer/Footer';
import {FaHome, FaProductHunt, FaInfoCircle, FaUser, FaShoppingCart} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'

function App() {
  const items = Items;

  const [products, setProducts] = useState(items);

  const [categoryFilter, setCategoryFilter] = useState('All');

  const [searchKeyword, setSearchKeyword] = useState('');

  const filterProducts = (category, searchKeyword) => {
    setCategoryFilter(category);
    if (searchKeyword) {
      const filtered = items.filter(p =>
        p.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(items);
    }
  }

  const filteredProducts = categoryFilter === 'All' ? products : products.filter(p => p.category === categoryFilter);

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
              <a><FaHome /> 主页</a>
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

      <div className='shopbanner'>
        <img src="//static.lookchem.cn/images/shopbaner.jpg" alt="banner" />
      </div>

      <div className="shopwrap">
        <div className='shopleft'>
          <div className="shopbg">
            <h2>产品搜索</h2>
            <div className="shop-w">
              <input name="skeyword" className="sch" type="text" placeholder="请输入cas号或产品名称." onChange={e => setSearchKeyword(e.target.value)}/>
              <button type="submit" className='schgo' onClick={() => filterProducts('All', searchKeyword)}>Go</button>
            </div>
          </div>

          <div className='shopbg'>
          <h2>产品分类</h2>
          <div className="shop-w">
            <ul className="catelist">
                <li><a onClick={() => filterProducts('All', '')}>全部</a></li>
                <li><a onClick={() => filterProducts('胶粘剂', '')}>胶粘剂</a></li>
                <li><a onClick={() => filterProducts('催化剂及助剂', '')}>催化剂及助剂</a></li>
                <li><a onClick={() => filterProducts('医药与生物化工', '')}>医药与生物化工</a></li>
                <li><a onClick={() => filterProducts('化学试剂', '')}>化学试剂</a></li>
                <li><a onClick={() => filterProducts('中间体', '')}>中间体</a></li>
                <li><a onClick={() => filterProducts('聚合物', '')}>聚合物</a></li>
                <li><a onClick={() => filterProducts('食品和饲料添加剂', '')}>食品和饲料添加剂</a></li>
                <li><a onClick={() => filterProducts('信息化学品', '')}>信息化学品</a></li>
            </ul>
          </div>
          </div>

        </div>

        <div className='shopright'>
          <div className="mainwrap">
            
            <h2>所有产品</h2>
          </div>

          <div className="product-list">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>

        </div>
      </div>
    </div>
    
  )
}

export default App
