import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  return (
    // <div className="user-profile">
    //   <Link to='/'>
    //     <button>Home</button>
    //   </Link>
    //   <h1>{userData.name}</h1>
    //   <p>{userData.email}</p>
    //   <button onClick={handleLogOut}>Logout</button>
    // </div>
    <div class="user-profile">
      <h1>{userData.name}</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>{userData.email}</p>
      <a href="#"><i class="fa fa-dribbble"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <p><button onClick={handleLogOut}>Logout</button></p>
  </div>
  );
};

export default Profile;
