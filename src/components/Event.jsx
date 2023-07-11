import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Event = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [namaEvent, setNamaEvent] = useState('');
  const [lokasiEvent, setLokasiEvent] = useState('');
  const [hargaEvent, setHargaEvent] = useState('');
  const [daftarEvent, setDaftarEvent] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleTambahEvent = () => {
    setIsPopupOpen(true);
    setNamaEvent('');
    setLokasiEvent('');
    setHargaEvent('');
    setEditIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventBaru = {
      nama: namaEvent,
      lokasi: lokasiEvent,
      harga: hargaEvent,
    };

    if (editIndex === -1) {
      // Menambahkan event baru
      setDaftarEvent([...daftarEvent, eventBaru]);
    } else {
      // Mengedit event yang sudah ada
      const daftarEventBaru = [...daftarEvent];
      daftarEventBaru[editIndex] = eventBaru;
      setDaftarEvent(daftarEventBaru);
    }

    setIsPopupOpen(false);
  };

  const handleEdit = (index) => {
    const eventDiedit = daftarEvent[index];
    setNamaEvent(eventDiedit.nama);
    setLokasiEvent(eventDiedit.lokasi);
    setHargaEvent(eventDiedit.harga);
    setEditIndex(index);
    setIsPopupOpen(true);
  };

  const handleHapus = (index) => {
    const daftarEventBaru = [...daftarEvent];
    daftarEventBaru.splice(index, 1);
    setDaftarEvent(daftarEventBaru);
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
      <div className=''>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 py-10">
          <div className="bg-white rounded-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              {editIndex === -1 ? 'Tambah Event' : 'Edit Event'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="namaEvent" className="block">
                  Nama Event:
                </label>
                <input
                  type="text"
                  id="namaEvent"
                  value={namaEvent}
                  onChange={(e) => setNamaEvent(e.target.value)}
                  className="border border-gray-300 px-2 py-1 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lokasiEvent" className="block">
                  Lokasi Event:
                </label>
                <input
                  type="text"
                  id="lokasiEvent"
                  value={lokasiEvent}
                  onChange={(e) => setLokasiEvent(e.target.value)}
                  className="border border-gray-300 px-2 py-1 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hargaEvent" className="block">
                  Harga Event:
                </label>
                <input
                  type="text"
                  id="hargaEvent"
                  value={hargaEvent}
                  onChange={(e) => setHargaEvent(e.target.value)}
                  className="border border-gray-300 px-2 py-1 rounded-md w-full"
                  required
                />
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
        <h2 className='font-black text-4xl font-sans py-10 text-center'>Daftar Event</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Event
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lokasi Event
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga Event
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {daftarEvent.map((event, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{event.nama}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.lokasi}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.harga}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHapus(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
        onClick={handleTambahEvent}
        className="bg-blue-500 text-white py-3 px-5 mt-8 mx-8 rounded-md relative hover:opacity-80 transition duration-300"
      >
        Tambah Event
      </button>
    </div>
    </div>
  );
};

export default Event;