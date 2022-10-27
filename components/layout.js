import Link from 'next/link';
import Navbar from './navbar';

export default function Layout({ children }) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
}
