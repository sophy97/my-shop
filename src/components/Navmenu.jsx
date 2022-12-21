// bootstarp - nav
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLemon } from "@fortawesome/free-regular-svg-icons";
import { faCartFlatbed, faHouse } from "@fortawesome/free-solid-svg-icons";
// css연결
import "../App.css";

const Navmenu = () => {

    const navigate = useNavigate();

    return (  
        <div>
            <div className='navbar'>
                <span className='nav-span' onClick={()=>{navigate('/')}}>
                    <FontAwesomeIcon icon={faHouse} size="2x" />　Home
                </span>
                <span className='nav-span' onClick={()=>{navigate('/about')}}>
                    <FontAwesomeIcon icon={faLemon} size="2x" />　about
                </span>
                <span className='nav-span' onClick={()=>{navigate('/products')}}>
                    <FontAwesomeIcon icon={faCartFlatbed} size="2x" />　products
                </span>
                <span className='nav-span' onClick={()=>{navigate('/mypage')}}>
                    <FontAwesomeIcon icon={faUser} size="2x" />　mypage
                </span>
            </div>
            
        </div>
    );
}

export default Navmenu;