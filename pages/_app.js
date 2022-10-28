import Layout from '../components/Layout';
import { SSRProvider } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<SSRProvider>
				<Component {...pageProps} />;
			</SSRProvider>
		</Layout>
	);
}

export default MyApp;
