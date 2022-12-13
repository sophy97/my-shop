import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstarp - nav
import {Nav, Navbar} from 'react-bootstrap';
// bootstrap - products
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './pages/Home';

// import bgimg from './dietshop.jpg';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LighterLife</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#information">Info</Nav.Link>
            <Nav.Link href="#lists">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'>
        {/* src폴더에 이미지 있다면 상단에 임포트할 수 있다 (방법2) 
         style={{backgroundImage:'url('+bgimg+')'}} */}
      </div>

        <br/>
        <Home />
      <Container className='products'>
      <Row>
        <Col>
          <div className='products product1'></div>
          <h3>상품명</h3>
          <p>상품 설명</p>
        </Col>
        <Col>
        <div className='products product2'></div>
          <h3>상품명</h3>
          <p>상품 설명</p>
        </Col>
        <Col>
        <div className='products product3'></div>
          <h3>상품명</h3>
          <p>상품 설명</p>
        </Col>
      </Row>
    </Container>



    </div>
  );
}

export default App;
