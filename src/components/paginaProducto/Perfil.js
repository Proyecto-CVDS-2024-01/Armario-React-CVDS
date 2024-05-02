import { Offcanvas, OffcanvasBody, 
	OffcanvasHeader, Navbar, 
	NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { useState } from 'react';
import '../../styleSheets/Perfil.css';


function Perfil(){ 
	const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const sections = [
	{
	  mainImage: 'https://static.zara.net/assets/public/26bd/1b23/3b994d52b455/2174ee87fa5c/T0678640070-p/T0678640070-p.jpg?ts=1712306930117&w=563',
	  products: [{
        id: 1,
        name: 'CAMISA RAYAS BOLSILLOS',
        imageUrl: 'https://static.zara.net/assets/public/af0d/bc12/68cc4ac381d3/8585ed90e346/04424175400-e1/04424175400-e1.jpg?ts=1710954805512&w=275'
      },
      {
        id: 2,
        name: 'PANTALÓN BOLSILLOS UTILITY',
        
        imageUrl: 'https://static.zara.net/assets/public/1a04/371c/949c44b9b9b6/9a2ba049bec3/06786400707-e1/06786400707-e1.jpg?ts=1709822870697&w=275'
      },
      {
        id: 3,
        name: 'ZAPATO PIEL DESTALONADO CLARK...',
        
        imageUrl: 'https://static.zara.net/assets/public/8e1e/846e/27d148e8a88c/3eebc91ec26b/12504320102-e1/12504320102-e1.jpg?ts=1705579404777&w=275'
      }
		// Añade aquí los productos de la sección 1
	  ]
	},
	{
	  mainImage: 'https://static.zara.net/assets/public/216a/d4c7/8ada40b0bf2e/caef2df87c4c/T0651850540-p/T0651850540-p.jpg?ts=1712306928662&w=563',
	  products: [{
        id: 1,
        name: 'CAMISA RAYAS BOLSILLOS',
        imageUrl: 'https://static.zara.net/assets/public/48d0/421f/5f2242cab576/1fdbc4d48a5e/06518505401-e1/06518505401-e1.jpg?ts=1712218824552&w=275'
      },
      {
        id: 2,
        name: 'PANTALÓN BOLSILLOS UTILITY',
        
        imageUrl: 'https://static.zara.net/assets/public/0104/e156/740f49cf80e7/706cc377c701/08574456614-e1/08574456614-e1.jpg?ts=1710779479317&w=275'
      },
      {
        id: 3,
        name: 'ZAPATO PIEL DESTALONADO CLARK...',
        
        imageUrl: 'https://static.zara.net/assets/public/5b00/6436/e03c471ba043/858735d7f7b0/04432485401-e1/04432485401-e1.jpg?ts=1710954757003&w=275'
      },
	  {
		id : 4,
		name : 'BOWLING NYLON',
		imageUrl : 'https://static.zara.net/assets/public/1018/da36/8da34bcba1e4/fa0b2965bde4/13100320400-e1/13100320400-e1.jpg?ts=1704904458287&w=275'
	  }
		// Añade aquí los productos de la sección 1
	  ]
	},
	
	// Añade más secciones según lo necesites
  ];

  const Product = ({ product }) => (
	<div className="product">
	  <img src={product.imageUrl} alt={product.name} />
	  <h2>{product.name}</h2>
	  <p>{product.price}</p>
	  <button>AÑADIR</button>
	</div>
  );

  const Section = ({ section }) => (
	<div className="section">
	  <div className="main-image">
		<img src={section.mainImage} alt="Main" />
	  </div>
	  <div className="products">
		{section.products.map((product) => (
		  <Product key={product.id} product={product} />
		))}
	  </div>
	</div>
  );
  
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
			
			{/* Add the following code */}
			<div className='Outfits'>
				<h1>TRENDING</h1>
				{sections.map((section, index) => (
      <Section key={index} section={section} />
    ))}
			</div>
		</div>
	</div>
);
  };

  export default Perfil;