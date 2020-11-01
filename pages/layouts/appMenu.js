import {
  Navbar,
  Nav,
  Col,
} from "react-bootstrap";

const AppMenu = () => {
  return (
    <Col lg="12" style={{ borderBottom: 'solid thin #e8e8e8'}}>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mx-auto">
            <Nav.Link href="/home">Roofing</Nav.Link>
            <Nav.Link href="/cart">Siding</Nav.Link>
            <Nav.Link href="/orders">Gutters</Nav.Link>
            <Nav.Link href="/orders">Insulation</Nav.Link>
            <Nav.Link href="/orders">Waterproofing</Nav.Link>
            <Nav.Link href="/orders">Tools & Equipment</Nav.Link>
            <Nav.Link href="/orders">Building Materials</Nav.Link>
            <Nav.Link href="/orders">Solar Energy</Nav.Link>
            <Nav.Link href="/orders">Industries</Nav.Link>
            <Nav.Link href="/orders">Brands</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default AppMenu;
