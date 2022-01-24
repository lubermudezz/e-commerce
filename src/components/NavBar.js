import { Container, Nav, Navbar as Barra, NavDropdown } from "react-bootstrap";
const NavBar = () => {
  return( 
            <Barra bg="light" expand="lg">
        <Container>
            <Barra.Brand href="#home">Minecraft By Jockerel</Barra.Brand>
            <Barra.Toggle aria-controls="basic-navbar-nav" />
            <Barra.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Página Principal</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Más pedidos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mapas Excéntricos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Temáticos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Personalizados</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Barra.Collapse>
        </Container>
        </Barra>
        )
  ;
};

export default NavBar;
