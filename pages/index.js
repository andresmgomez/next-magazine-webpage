import { Col, Container, NavItem, Row, Tab, Tabs } from 'react-bootstrap';

import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main className={styles.mainArea}>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} lg={12}>
						<section className={styles.postContent}>
							<div className={styles.category}>
								<NavItem className={styles.title}>Top News</NavItem>
								<Tabs
									defaultActiveKey='world'
									id='myTab'
									role='tablist'
									className={styles.navTabs}
								>
									<Tab eventKey='world' title='world'>
										<PostCard />
									</Tab>
									<Tab eventKey='health' title='health'>
										<PostCard />
									</Tab>
								</Tabs>
							</div>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
