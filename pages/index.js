import Link from 'next/link';
import { Col, Container, NavItem, Row, Tabs } from 'react-bootstrap';

import styles from '../styles/Home.module.css';
import ArticlesCategory from './articles/[category]';

export default function Home() {
	return (
		<main className={styles.mainArea}>
			<Container>
				<Row className='justify-content-center'>
					<Col md={12} lg={8}>
						<section className={styles.postContent}>
							<div className={styles.category}>
								<Link href='articles/economy'>
									<NavItem className={styles.title}>Top Articles</NavItem>
								</Link>
							</div>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
