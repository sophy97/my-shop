
// import bgimg from './dietshop.jpg';
import { Routes, Route } from 'react-router-dom';

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Home from './pages/Home';

function App() {
  return (

    <div className="App">
      
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element= { <Account />} />
          </Route>
        </Routes>
        


    </div>
  );
}

export default App;
