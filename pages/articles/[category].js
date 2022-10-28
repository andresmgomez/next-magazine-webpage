import React from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import PostCard from '../../components/PostCard';

import articles from '../api/articles';
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
							<h5>Top News</h5>
							<Tabs
								defaultActiveKey={post.topic}
								id='myTab'
								role='tablist'
								className={styles.navTabs}
							>
								{articles.map(article => {
									return (
										<Tab eventKey={article.topic} title={article.topic}>
											<PostCard article={article} />
										</Tab>
									);
								})}
							</Tabs>
						</div>
					</section>
				</Col>
			</Row>
		</Container>
	);
}
