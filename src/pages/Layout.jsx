import { Outlet } from 'react-router-dom';
import Navmenu from '../components/Navmenu';


const Layout = () => {

    return ( 
        <div>
            <Navmenu />
        {/* 하위 컴포넌트들 나타낼 위치 */}
            <Outlet/>
        </div>
    );
}

export default Layout;