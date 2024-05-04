import { Offcanvas, OffcanvasBody, 
	OffcanvasHeader, Navbar, 
	NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { useState } from 'react';
import '../../styleSheets/Perfil.css';

function Perfil(){ 
	const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
		<div>
			<Navbar fixed>
						<NavbarBrand href="/">Tu armario virtual</NavbarBrand>
							<NavbarToggler onClick={toggle} />
								<Collapse isOpen={isOpen} navbar></Collapse>
									<Offcanvas backdrop={false} direction="end" isOpen={isOpen}>
										<OffcanvasHeader toggle={toggle}>
											Offcanvas
									</OffcanvasHeader>
									<OffcanvasBody>
									<strong>
										This is the Offcanvas body.
									</strong>
									</OffcanvasBody>
								</Offcanvas>
					</Navbar>
    	<div className='Screen'>
    		<div className='Left-pane'>
        	<p>Hoal</p>
    		</div>
				<div className='Right-pane'>
				</div>
	  	</div>
		</div>
    );
  };

  export default Perfil;