import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Menghapus data login dari penyimpanan lokal (misalnya local storage atau state management)
    // Contoh penggunaan local storage
    localStorage.removeItem('isLoggedIn');
    // Navigate ke halaman login
    navigate('/login');
  };

  return (
    <div>
      <nav className='p-5 bg-green-700 flex justify-between mx-auto'>
        <div>
          <Link to="/" className="hover:text-white font-sans font-black text-2xl transition duration-300">
            Whatsapp Bot Steven Agustinus
          </Link>
        </div>
        <div className="">
          <ul className="flex md:flex-row flex-col item-center gap-[4vw]">
            <Link to="/event" className="hover:text-white font-sans font-medium transition duration-300 ">
              Event
            </Link>
            <Link to="/pelayanan" className="hover:text-white font-sans font-medium transition duration-300 ">
              Pelayanan
            </Link>
            <Link to="/buku" className="hover:text-white font-sans font-medium transition duration-300">
              Buku
            </Link>
            <Link to="/jadwal" className="hover:text-white font-sans font-medium transition duration-300 ">
              Jadwal
            </Link>
          </ul>
        </div>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-sans font-medium py-2 px-4 rounded">
          Logout
        </button>
      </nav>
      <div className='flex'>
        <h2 className='font-black font-sans text-3xl item-center'>
          Selamat Datang
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;