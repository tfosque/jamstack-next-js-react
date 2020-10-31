import {
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faReply,
  faGlobe,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import UserLoggedIn from '../components/UserLoggedIn/userLoggedIn';
import Link from 'next/link';

const ProplusNavbar = () => {
  return (
    <Col lg="12">
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <Link href="/">
              <a className="nav-link">
                <FontAwesomeIcon icon={faReply} />
              </a>
            </Link>
            &nbsp;
            <a className="navbar" href="#">
              <UserLoggedIn />
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Beacon <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Beacon Pro+
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Beacon 3D+
                </a>
              </li>
            </ul>
          
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <Navbar bg="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav
                    className="mr-auto justify-content-end"
                    style={{ width: '100%' }}
                  >
                    <Nav.Link href="/orders">Order History</Nav.Link>
                    <Nav.Link href="/templates">Templates</Nav.Link>
                    <Nav.Link href="/cartContainer">
                      <span style={{background: '#007bff', padding: '6px 8px', borderRadius: '4px'}}>
                       <FontAwesomeIcon icon={faShoppingCart} /> 
                       &nbsp;
                       Cart
                      </span>
                     
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
             <Navbar>
             <NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Address Book
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accounts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Personal Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Saved Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Delivery Tracking
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  &nbsp;Logout
                </NavDropdown.Item>
              </NavDropdown>
             <NavDropdown title="Pro+ Tools" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Promotion Tracker
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accounts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Online Bill Pay
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Perfect Order
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Quotes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Storm+
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <FontAwesomeIcon icon={faGlobe} />
                  &nbsp;Beacon 3D Plus
                </NavDropdown.Item>
              </NavDropdown>
             </Navbar>
            </ul>
          </div>
        </nav>
      </>
    </Col>
  );
};

export default ProplusNavbar;
