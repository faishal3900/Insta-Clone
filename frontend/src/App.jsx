
import Home from './components/home/Home';

import { Route, Routes } from 'react-router-dom';
import LoginPopup from './components/Login/Login';
import Create from './components/create/Create';
import Profile from './components/profile/Profile';
// import CommentData from './components/comment/CommentData';





const App = () => {
  return (

    <Routes>
      <Route path="/" element={<LoginPopup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  );
}

export default App;
