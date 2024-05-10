import React, { useState } from 'react';
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';
import { LogIn } from './LogIn';
import { Link } from 'react-router-dom';
import usuario from  '../../images/perfil.png'

function Top() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false);

  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const toggleOffcanvas = () => {
    setIsOpenOffcanvas(!isOpenOffcanvas);
  };

  return (
    <div className='Encabezado'>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed>
              <NavbarBrand href="/">Tu armario virtual</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} />
              <Collapse isOpen={isOpenNavbar} navbar>
                <Nav className="me-auto" justified card>
                  <NavItem>
                    <NavLink href="/">Inicio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="sobreNosotros">
                      Sobre Nosotros
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Productos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag={Link} to="/producto1">Armario Virtual</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      opciones ropa armario virtual
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag={Link} to="/camisas">camisas</DropdownItem>
                      <DropdownItem tag={Link} to="/chaquetas">chaquetas</DropdownItem>
                      <DropdownItem tag={Link} to="/pantalones">pantalones</DropdownItem>
                      <DropdownItem tag={Link} to="/zapatos">zapatos</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          <Col xs='1'>
            <LogIn />
          </Col>
          <Col xs='1' className="position-relative" justified card>
            <Button onClick={toggleOffcanvas} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', background: 'white', border: 'none', padding: '0' }}>
              <img src={usuario} alt="Foto de Usuario" style={{ width: '30px', borderRadius: '50%' }} />
            </Button>
            <Offcanvas backdrop={false} direction="end" isOpen={isOpenOffcanvas}>
              <OffcanvasHeader toggle={toggleOffcanvas}>
                Offcanvas
              </OffcanvasHeader>
              <OffcanvasBody>
                <strong>
                  Perfil de usuario
                </strong>
              </OffcanvasBody>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Top;
