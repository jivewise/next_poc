import { Link } from '../routes';

export default () => (
	<ul>
		<li>
			<Link route='landing' params={{category: 'logo', id: 5}} prefetch={true}>
				<a>Logo</a>
			</Link>
		</li>
		<li>
			<Link route='/card/10' prefetch={true}>
				<a>Card</a>
			</Link>
		</li>
		<li>
			<Link route='/explore' prefetch={true}>
				<a>Projects</a>
			</Link>
		</li>
		<li>
			<Link route='/explore/creatives' prefetch={true}>
				<a>Creatives</a>
			</Link>
		</li>
	</ul>
);
