
import { AuthContextProvider } from './../context/AuthContext';
import ProtectedRoute from './../components/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Account from './Account';


const Home = () => {
    return ( 
        <div>
            <h1>
            HOME
            </h1>
        <AuthContextProvider>
        <Routes>
            <Route path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element= {
                <ProtectedRoute>
                    <Account />
                </ProtectedRoute> }
            />
            </Routes>
        </AuthContextProvider>
        </div>
    );
}

export default Home;