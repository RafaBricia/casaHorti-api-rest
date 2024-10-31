import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HomeStyle.css'

const Home = () => {
    let loggedUser={name:"lucas "}
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CasaHorti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Gerenciamento de Produtos</Nav.Link>
            <Nav.Link href="#">Users</Nav.Link>
            </Nav>
          <Nav>
          <NavDropdown title={loggedUser.name} id="collapsible-nav-dropdown">
             
              <NavDropdown.Item href="#">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Configurações</NavDropdown.Item>
              <NavDropdown.Item href="login">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Container className="HomeBodyContainer">
        Products
    </Container>
    <footer >
    <p>© 2024 Meu Site. Todos os direitos reservados.</p>
    <p>
        <a href="politica-privacidade.html">Política de Privacidade</a> |
        <a href="termos-uso.html">Termos de Uso</a>
    </p>
    </footer>
 </>
  );
    }

export default Home