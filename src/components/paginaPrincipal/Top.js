import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
import {LogIn} from './LogIn';
import { Link } from 'react-router-dom';

function Top() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Encabezado'>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed>
              <NavbarBrand href="/">Tu armario virtual</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" justified card>
                  <NavItem>
                    <NavLink href="/">Inicio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      Sobre Nosotros
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Productos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag={Link} to="/producto1">Opcion 1 tienda</DropdownItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          La segunda tienda por ahora
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag={Link} to="/camisas">camisas</DropdownItem>
                          <DropdownItem tag={Link} to="/chaquetas">chaquetas</DropdownItem>
                          <DropdownItem tag={Link} to="/pantalones">pantalones</DropdownItem>
                          <DropdownItem tag={Link} to="/zapatos">zapatos</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          <Col xs='1'>
            <LogIn />
          </Col>
          <Col xs='1'>
            <Button size='lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Top;