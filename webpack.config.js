var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

module.exports = {
	entry: __dirname + "/src/index.jsx",
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel?' + JSON.stringify(babelLoaderQuery), 'eslint-loader']},
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules'
		],
		extensions: ['', '.json', '.js', '.jsx']
	}
};