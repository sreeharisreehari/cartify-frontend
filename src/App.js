import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Carts from './pages/Carts';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Landing from './pages/Landing';
import BuyorSell from './pages/BuyorSell';

function App() {
  return (
    <div>
      <Header />
      
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/buyorsell' element={<BuyorSell/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/Carts' element={<Carts />} />
        <Route path='/Favorites' element={<Favorites />} />


      </Routes>



      <Footer />


    </div>
  );
}

export default App;
