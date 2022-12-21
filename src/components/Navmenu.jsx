import 'bootstrap/dist/css/bootstrap.min.css';
// bootstarp - nav
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavLink } from 'react-bootstrap';



const Navmenu = () => {

    const navigate = useNavigate();

    return (  
        <Navbar fixed="top">
            <NavLink to="/">로고이미지</NavLink>
            <Nav className="me-auto">
                <Nav.Link href="#home">LighterLife</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#mypage">Mypage</Nav.Link>
            </Nav>
            {/* <span onClick={()=>{navigate('/')}}>LighterLife</span>
            <span onClick={()=>{navigate('/')}}>Home</span>
            <span onClick={()=>{navigate('/info')}}>Info</span>
            <span onClick={()=>{navigate('/products')}}>Shop</span> */}
        </Navbar>
    );
}

export default Navmenu;