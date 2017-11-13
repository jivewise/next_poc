import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../utils/store';
import Menu from '../components/menu';

class Landing extends React.Component {
	static async getInitialProps({ store, res }) {
		// Adding a default/initialState can be done as follows:
		const prob = Math.floor(Math.random() * 2);
		const apiUrl = prob
			? 'https://api.github.com/repos/ooade/NextSimpleStarter'
			: 'https://api.github.com/repos/ooade/error-apiUrl';

		const apiRes = await fetch(apiUrl);
		const json = await apiRes.json();

		if (res && apiRes) {
			res.statusCode = apiRes.status;
		}

		return apiRes.ok
			? { stars: json.stargazers_count, apiUrl }
			: { error: apiRes, apiUrl };
	}

	render() {
		const { stars, error, apiUrl, url } = this.props;
		return (!error
			? <div><Menu />This is a {url.query.category} landing page</div>
			: <div><Menu />There was an {error.status} error calling {apiUrl}</div>
		);
	}
}

export default withRedux(initStore)(Landing);
