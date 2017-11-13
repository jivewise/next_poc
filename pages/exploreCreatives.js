import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import Menu from '../components/menu';
import initStore from '../utils/store';

class ExploreCreatives extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		const prob = 1;
		const url = prob
			? 'https://api.github.com/repos/ooade/NextSimpleStarter'
			: 'https://api.github.com/repos/ooade/error-url';

		console.log(prob, url);
		const res = await fetch(url);
		const json = await res.json();

		return res.ok
			? { stars: json.stargazers_count, url }
			: { error: res, url };
	}

	render() {
		const { stars, error, url } = this.props;
		console.log(error);
		return (!error
			? <div><Menu />This is an explore creatives page</div>
			: <div><Menu />There was an {error.status} error calling {url}</div>
		);
	}
}

export default withRedux(initStore)(ExploreCreatives);
