import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';

import Fork from '../components/Fork';
import Todo from '../components/Todo';

import initStore from '../utils/store';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		const prob = Math.floor(Math.random() * 2);
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
			? <div>
				<div>{url} call successful</div>
				<Fork stars={stars} />
				<div>
					<Todo />
				</div>
			</div>
			: <div>There was an {error.status} error calling {url}</div>
		);
	}
}

export default withRedux(initStore)(connect(({ todos }) => ({ todos }))(Index));
