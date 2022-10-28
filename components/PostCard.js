import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Post.module.css';

export default function PostCard({ article }) {
	return (
		<section className={styles.postCard}>
			<div className={styles.thumbnail}>
				<Image src='https://placehold.co/360x195' width={360} height={195} />
				<div className={styles.tag}>
					<Link href='/'>{article.category}</Link>
				</div>
			</div>
			<div className={styles.content}>
				<Link href='/' className={styles.headline}>
					<h5>{article.title}</h5>
				</Link>
				<p>{article.subHeading}</p>
			</div>
		</section>
	);
}
