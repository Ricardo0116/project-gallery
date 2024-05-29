import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Lugar1 from './components/Lugar1';
import Lugar2 from './components/Lugar2';
import Lugar3 from './components/Lugar3';
import Lugar4 from './components/Lugar4'; 
import Lugar5 from './components/Lugar5';
import Lugar6 from './components/Lugar6';
import Lugar7 from './components/Lugar7';
import Lugar8 from './components/Lugar8';
import Lugar9 from './components/Lugar9';
import Lugar10 from './components/Lugar10';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/lugar1" Component={Lugar1} />
        <Route path="/lugar2" Component={Lugar2} />
        <Route path="/lugar3" Component={Lugar3} />
        <Route path="/lugar4" Component={Lugar4} />
        <Route path="/lugar5" Component={Lugar5} />
        <Route path="/lugar6" Component={Lugar6} />
        <Route path="/lugar7" Component={Lugar7} />
        <Route path="/lugar8" Component={Lugar8} />
        <Route path="/lugar9" Component={Lugar9} />
        <Route path="/lugar10" Component={Lugar10} />
      </Routes>
      <Navigation />
      
    </Router>
  
  );
}

export default App;
