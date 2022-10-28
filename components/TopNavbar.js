import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default function TopNavbar() {
	return (
		<section>
			<Container>
				<Row>
					<Col lg={12}>
						<Navbar bg='light' expand='lg' sticky='top'>
							<Navbar.Brand href='/'>
								<h5>Article News</h5>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='ml-auto'>
									<Nav.Link href='/'>Home</Nav.Link>
									<Nav.Link href='/articles'>Articles</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
