import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Post.module.css';

export default function PostCard({ article }) {
	return (
		<section className={styles.postCard}>
			<div className={styles.thumbnail}>
				<Image src={article.multimedia[1].url} width={360} height={195} />
				<div className={styles.tag}>
					<Link href='/'>{article.section}</Link>
				</div>
			</div>
			<div className={styles.content}>
				<Link href='/' className={styles.headline}>
					<h5>{article.title}</h5>
				</Link>
				<div class={styles.meta}>
					<p>
						<Link href='#'>{article.byline}</Link>
						&nbsp;on&nbsp;
						<Link href='#'>{article.published_date}</Link>
						{/* <Link href='#'>Sep 29, 2017 at 9:48 am</Link> */}
					</p>
				</div>
			</div>
		</section>
	);
}
