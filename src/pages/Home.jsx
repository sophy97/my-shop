import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {

    return ( 
        <div>
            <div className='main-bg'>
        {/* src폴더에 이미지 있다면 상단에 임포트할 수 있다 (방법2) 
         style={{backgroundImage:'url('+bgimg+')'}} */}
            </div>
        <br/>
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

export default Home;