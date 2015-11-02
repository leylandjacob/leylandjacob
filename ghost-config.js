// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
	config;

config = {
	// ### Production
	// When running Ghost in the wild, use the production environment.
	// Configure your URL and mail settings here
	production: {
		url: 'http://leylandjacob.com/articles',
		mail: {},
		database: {
			client: 'postgres',
			connection: {
				host: process.env.POSTGRES_HOST,
				user: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DB,
				port: process.env.POSTGRES_PORT,
				ssl: true
			},
			debug: false
		},

		server: {
			host: '0.0.0.0',
			port: process.env.PORT ? process.env.PORT : '3000'
		},
		
		paths: {
			contentPath: path.join(__dirname, './node_modules/ghost/content/')
		}
	},

	// ### Development **(default)**
	development: {
		// The url to use when providing links to the site, E.g. in RSS and email.
		// Change this to your Ghost blog's published URL.
		url: 'http://localhost:3000/articles',

		// Example mail config
		// Visit http://support.ghost.org/mail for instructions
		// ```
		//  mail: {
		//      transport: 'SMTP',
		//      options: {
		//          service: 'Mailgun',
		//          auth: {
		//              user: '', // mailgun username
		//              pass: ''  // mailgun password
		//          }
		//      }
		//  },
		// ```

		// #### Database
		// Ghost supports sqlite3 (default), MySQL & PostgreSQL
		database: {
			client: 'postgres',
			connection: {
				host: process.env.POSTGRES_HOST,
				user: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DB,
				port: process.env.POSTGRES_PORT,
				ssl: true
			},
			debug: false
		},
		// #### Server
		// Can be host & port (default), or socket
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '0.0.0.0',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: process.env.PORT ? process.env.PORT : '3000'
		},
		// #### Paths
		// Specify where your content directory lives
		paths: {
			contentPath: path.join(__dirname, './node_modules/ghost/content/')
		}
	}
};

module.exports = config;
