import { Col, Container, Nav, NavItem, Row, Tab, Tabs } from 'react-bootstrap';

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
										World
									</Tab>
									<Tab eventKey='health' title='health'>
										Health
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
