// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
// import Home from './pages/Home';
// import Even from './pages/Even';
// import Pelayan from './pages/Pelayan';
// import Books from './pages/Books';
// import Jad from './pages/Jad';
// import Login from './components/Login';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/login' element={<Login />}/>
//         <PrivateRoute path='/' element={<Home />}/>
//         <PrivateRoute path='/event' element={<Even />}/>
//         <PrivateRoute path='/pelayanan' element={<Pelayan />}/>
//         <PrivateRoute path='/buku' element={<Books />}/>
//         <PrivateRoute path='/jadwal' element={<Jad />}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Even from './pages/Even';
import Pelayan from './pages/Pelayan';
import Books from './pages/Books';
import Jad from './pages/Jad';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/event' element={<Even />}/>
        <Route path='/pelayanan' element={<Pelayan />}/>
        <Route path='/buku' element={<Books />}/>
        <Route path='/jadwal' element={<Jad />}/>
      </Routes>
    </Router>
  )
}

export default App;


