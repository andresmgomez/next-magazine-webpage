import Link from 'next/link';
import { Col, Container, NavItem, Row } from 'react-bootstrap';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main className={styles.mainArea}>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} lg={12}>
						<section className={styles.postContent}>
							<div className={styles.category}>
								<Link href='articles/economy'>
									<NavItem className={styles.title}>Economy</NavItem>
								</Link>
							</div>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
