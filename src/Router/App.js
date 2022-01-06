import './App.css';

import NavMenu from '../Components/Nav/Nav';
import Screen from '../Components/Screen/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from '../Components/Education/Education';
import Tecnologies from '../Components/Tecnologies/Tecnologies';
import Projects from '../Components/Projects/Projects';
import Profile from '../Components/Profile/Profile';
import Contact from '../Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavMenu />
          <Routes>
            <Route path='/' element={<Screen />} />
            <Route path='/education' element={<Education/>} />
            <Route path='/tecs' element={<Tecnologies/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
