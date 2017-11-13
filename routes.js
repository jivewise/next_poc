const nextRoutes = require('next-routes');

const routes = nextRoutes()
	.add('landing', '/:category(logo|card)/:id', 'landing')
	.add('design', '/design', 'design')
	.add('exploreProjects', '/explore', 'exploreProjects')
	.add('exploreCreatives', '/explore/creatives', 'exploreCreatives');

module.exports = routes;
