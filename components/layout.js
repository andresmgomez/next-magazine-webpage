import TopNavbar from './TopNavbar';

export default function Layout({ children }) {
	return (
		<>
			<header>
				<TopNavbar />
			</header>
			<main>{children}</main>
		</>
	);
}
