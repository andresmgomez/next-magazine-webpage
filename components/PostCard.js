import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Post.module.css';

export default function PostCard() {
	return (
		<section className={styles.postCard}>
			<div className={styles.thumbnail}>
				<Image src='https://placehold.co/360x195' width={360} height={195} />
				<div className={styles.tag}>
					<Link href='/'>economy</Link>
				</div>
			</div>
			<div className={styles.content}>
				<Link href='/' className={styles.headline}>
					<h5>Why Is It So Hard To Buy a House in America Right Now?</h5>
				</Link>
				<p>Inflation has caused to raise interest rates by 5% in the last year...</p>
			</div>
		</section>
	);
}
