import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PelayananOnline = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [namaPelayanan, setNamaPelayanan] = useState('');
  const [deskripsiPelayanan, setDeskripsiPelayanan] = useState('');
  const [daftarPelayanan, setDaftarPelayanan] = useState([]);
  const [statusPelayanan, setStatusPelayanan] = useState('online');
  const [editIndex, setEditIndex] = useState(-1);

  const handleTambahPelayanan = () => {
    setIsPopupOpen(true);
    setNamaPelayanan('');
    setDeskripsiPelayanan('');
    setStatusPelayanan('online');
    setEditIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pelayananBaru = {
      nama: namaPelayanan,
      deskripsi: deskripsiPelayanan,
      status: statusPelayanan,
    };

    if (editIndex === -1) {
      // Menambahkan pelayanan baru
      setDaftarPelayanan([...daftarPelayanan, pelayananBaru]);
    } else {
      // Mengedit pelayanan yang sudah ada
      const daftarPelayananBaru = [...daftarPelayanan];
      daftarPelayananBaru[editIndex] = pelayananBaru;
      setDaftarPelayanan(daftarPelayananBaru);
    }

    setIsPopupOpen(false);
  };

  const handleEditPelayanan = (index) => {
    const pelayananDiedit = daftarPelayanan[index];
    setNamaPelayanan(pelayananDiedit.nama);
    setDeskripsiPelayanan(pelayananDiedit.deskripsi);
    setEditIndex(index);
    setStatusPelayanan(pelayananDiedit.status);
    setIsPopupOpen(true);
  };

  const handleHapusPelayanan = (index) => {
    const daftarPelayananBaru = [...daftarPelayanan];
    daftarPelayananBaru.splice(index, 1);
    setDaftarPelayanan(daftarPelayananBaru);
  };

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

        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="bg-white rounded-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                {editIndex === -1 ? 'Tambah Pelayanan' : 'Edit Pelayanan'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="namaPelayanan" className="block">
                    Nama Pelayanan:
                  </label>
                  <input
                    type="text"
                    id="namaPelayanan"
                    value={namaPelayanan}
                    onChange={(e) => setNamaPelayanan(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="deskripsiPelayanan" className="block">
                    Deskripsi:
                  </label>
                  <textarea
                    id="deskripsiPelayanan"
                    value={deskripsiPelayanan}
                    onChange={(e) => setDeskripsiPelayanan(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="statusPelayanan" className="block">
                    Status Pelayanan:
                  </label>
                  <select
                    id="statusPelayanan"
                    value={statusPelayanan}
                    onChange={(e) => setStatusPelayanan(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    required
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Simpan
                  </button>
                  <button
                  onClick={() => setIsPopupOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2"
                >
                  Batal
                </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div>
        <h2 className="font-black text-4xl font-sans py-10 text-center">Daftar Pelayanan</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className='bg-gray-50'>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Pelayanan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deskripsi Pelayanan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status Pelayanan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {daftarPelayanan.map((pelayanan, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{pelayanan.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pelayanan.deskripsi}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pelayanan.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEditPelayanan(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleHapusPelayanan(index)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <button
          className="bg-blue-500 text-white py-3 px-5 mt-8 mx-8 rounded-md relative hover:opacity-80 transition duration-300"
          onClick={handleTambahPelayanan}
        >
          Tambah Pelayanan
        </button>
    </div>
  );
};

export default PelayananOnline;
