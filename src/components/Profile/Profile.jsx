import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Profile.css'

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://aipurui-backend.onrender.com/api/users/profile/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id, navigate]);

  if (!userData) {
    return <div>正在加载中...</div>;
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  }

  const handleViewCart = () => {
    navigate(`/cart/${id}`);
  }

  return (
    <div>
      <Nav />
      <div className='profile-main'>
        <div className="user-profile">
          <h1>欢迎, {userData.name}</h1>
          <p>我的邮箱地址是: {userData.email}</p>
          <button onClick={handleViewCart}><p>看看购物车</p></button>
          <button onClick={handleLogOut}><p>退出登录</p></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
