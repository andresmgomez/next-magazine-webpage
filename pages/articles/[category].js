import React from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import articles from '../api/articles';

import PostCard from '../../components/PostCard';
import styles from '../../styles/Home.module.css';

export default function ArticlesCategory() {
	const router = useRouter();
	const { category } = router.query;

	const post = articles.find(article => article.category === category);

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col md={8} lg={12}>
					<section className={styles.postContent}>
						<div className={styles.category}>
							<Tabs
								defaultActiveKey={post.topic}
								id='myTab'
								role='tablist'
								className={styles.navTabs}
							>
								<Tab eventKey={post.topic} title={post.topic}>
									<PostCard />
								</Tab>
							</Tabs>
						</div>
					</section>
				</Col>
			</Row>
		</Container>
	);
}
