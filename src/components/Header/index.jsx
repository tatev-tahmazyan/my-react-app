import './style.css';
import {Container,Row,Col} from 'react-bootstrap';
import Logo from '../Reusable/Logo';
import MenuNavbar from '../Reusable/MenuNavbar';

const Header = ()  => {
    return(
        <Container className="p-3">
            <Row>
                <Col md="3">
                    <Logo />
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <MenuNavbar />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;