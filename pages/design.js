import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../utils/store';

class Design extends React.Component {
	static async getInitialProps({ res }) {
		res.writeHead(301, { 'Location': '/logo/5' });
		res.end();
	}

	render() {
		return <div>Redirecting...</div>
	}
}

export default withRedux(initStore)(Design);
