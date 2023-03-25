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
        const response = await fetch(`http://localhost:8082/api/users/profile/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id, navigate]);

  if (!userData) {
    return <div>Loading user data...</div>;
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
          <h1>Welcom, {userData.name}</h1>
          <p>My Email address is: {userData.email}</p>
          <button onClick={handleViewCart}><p>View Cart</p></button>
          <button onClick={handleLogOut}><p>Logout</p></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
