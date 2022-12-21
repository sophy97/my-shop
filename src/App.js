
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home';

//css기본 연결
import "./App.css"
import About from './pages/About';
import Products from './pages/Products';
import Mypage from './pages/Mypage';


function App() {
  return (

    <div className="App">
      
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/mypage' element={<Mypage />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
        


    </div>
  );
}

export default App;
