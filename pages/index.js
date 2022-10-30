import Link from 'next/link';
import { Col, Container, NavItem, Row, Tabs, Tab } from 'react-bootstrap';

import { fetchArticles } from './api/articles';
import PostCard from '../components/PostCard';

import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
	return (
		<main className={styles.mainArea}>
			<Container>
				<Row className='justify-content-center'>
					<Col md={12} lg={8}>
						<section className={styles.postContent}>
							<div className={styles.category}>
								<Link href='/'>
									<NavItem className={styles.title}>Top Articles</NavItem>
									<Tabs
										defaultActiveKey='technology'
										id='myTab'
										role='tablist'
										className={styles.navTabs}
									>
										{articles.map(article => {
											return (
												<Tab eventKey={article.section} title={article.section}>
													<PostCard article={article} />
												</Tab>
											);
										})}
									</Tabs>
								</Link>
							</div>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}

export async function getStaticProps() {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	const data = await fetchArticles(`${API_URL}?api-key=${API_KEY}`);

	return {
		props: {
			articles: data.results,
		},
	};
}
