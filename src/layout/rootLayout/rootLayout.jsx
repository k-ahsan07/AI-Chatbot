import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import logo from '../../assets/logo.jpeg'; // Ensure this path is correct

const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/" className='logo'>
          <img src={logo} alt="logo" /> {/* Use the imported logo here */}
          <span className='name'>EmergiVoice</span>
        </Link>
        <div className="user">USER</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
