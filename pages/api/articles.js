import axios from 'axios';

export async function fetchArticles(apiURL) {
	const res = await axios.get(apiURL);
	const data = await res.data;
	return data;
}
