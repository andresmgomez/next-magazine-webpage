import React from 'react';
import Link from 'next/link';

import '../styles/layout/navbar.scss';

export default function Navbar() {
	return (
		<section className='header-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<nav className='navbar navbar-expand-lg'>
							<Link href='/' className='navbar-brand'>
								<h5>Article News</h5>
							</Link>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<span className='navbar-toggler-icon'></span>
							</button>
							<div className='collapse navbar-collapse'>
								<ul className='navbar-nav ml-auto'>
									<li className='nav-item active'>
										<Link className='nav-link' href='/'>
											Home <span className='sr-only'>(current)</span>
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' href='#'>
											Articles
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
}
