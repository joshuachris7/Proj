import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Jadwal = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [jadwalList, setJadwalList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleTambahJadwal = () => {
    setIsPopupOpen(true);
    setMessage('');
    setDate('');
    setTime('');
    setImage(null);
    setVideo(null);
    setEditIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJadwal = {
      message: message,
      date: date,
      time: time,
      image: image,
      video: video,
    };

    if (editIndex === -1) {
      // Tambahkan jadwal baru ke dalam daftar jadwal
      setJadwalList([...jadwalList, newJadwal]);
    } else {
      // Update jadwal yang sedang diedit
      const updatedJadwalList = [...jadwalList];
      updatedJadwalList[editIndex] = newJadwal;
      setJadwalList(updatedJadwalList);
      setEditIndex(-1);
    }

    // Reset input setelah submit
    setMessage('');
    setDate('');
    setTime('');
    setImage(null);
    setVideo(null);
    setIsPopupOpen(false);
  };

  const handleEdit = (index) => {
    const jadwal = jadwalList[index];
    setMessage(jadwal.message);
    setDate(jadwal.date);
    setTime(jadwal.time);
    setImage(jadwal.image);
    setVideo(jadwal.video);
    setEditIndex(index);
    setIsPopupOpen(true);
  };

  const handleDelete = (index) => {
    const updatedJadwalList = [...jadwalList];
    updatedJadwalList.splice(index, 1);
    setJadwalList(updatedJadwalList);
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
                {editIndex === -1 ? 'Tambah Pesan' : 'Edit Pesan'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="message" className="block">
                    Pesan
                  </label>
                  <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="border border-gray-300 px-2 py-1 rounded-md w-full" required/>
                </div>
                <div className="mb-4">
                  <label htmlFor="date" className="block">
                    Tanggal
                  </label>
                  <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-300 px-2 py-1 rounded-md w-full" required/>
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block ">
                    Jam
                  </label>
                  <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-300 px-2 py-1 rounded-md w-full" required/>
                </div>
              <div className="mb-4">
                <label htmlFor="image" className="block">
                  Gambar
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border border-gray-300 px-2 py-1 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="video" className="block">
                  Video
                </label>
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="border border-gray-300 px-2 py-1 rounded-md w-full"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Simpan
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2"
                  onClick={() => setIsPopupOpen(false)}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div>
        <h2 className="font-black text-4xl font-sans py-10 text-center">Daftar Jadwal</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pesan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium```jsx
          text-gray-500 uppercase tracking-wider">
                Jam
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gambar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Video
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jadwalList.map((jadwal, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{jadwal.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">{jadwal.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{jadwal.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {jadwal.image && (
                    <img src={URL.createObjectURL(jadwal.image)} alt="Gambar" className="max-w-[200px] max-h-[200px]" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {jadwal.video && (
                    <video src={URL.createObjectURL(jadwal.video)} controls className="max-w-[200px] max-h-[200px]" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(index)}
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
        onClick={handleTambahJadwal}
      >
        Tambah Pesan
      </button>
    </div>
  );
};

export default Jadwal;