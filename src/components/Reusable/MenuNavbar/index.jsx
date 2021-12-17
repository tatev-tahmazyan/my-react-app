import './style.css';
import {Navbar,Nav} from 'react-bootstrap';

const Header = ()  => {
    return(
        <Navbar variant="light">
            <Nav className="mr-auto">
              <Nav.Link href="#Ներմուծում" className="menu-link"> Ներմուծում </Nav.Link>
              <Nav.Link href="#Արտահանում " className="menu-link">Արտահանում </Nav.Link>
              <Nav.Link href="#Բիզնես" className="menu-link">Բիզնես</Nav.Link>
              <Nav.Link href="#Մեծածախի հարցում " className="menu-link">Մեծածախի հարցում </Nav.Link>
              <Nav.Link href="#SMART Լուծումներ " className="menu-link">SMART Լուծումներ </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;