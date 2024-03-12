
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import DAshboard from './DAshboard';
import Footer from './components/Footer';
import Auth from './components/Auth';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={<DAshboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
