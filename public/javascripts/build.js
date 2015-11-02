/**
 * @desc Start the App
 * 
 * RUN: node r.js -o build.js
 */
({
    baseUrl: ".",
    paths: {
        'jquery' : '../node_modules/jquery/dist/jquery.min',
		'underscore' : '../node_modules/underscore/underscore-min',
		'backbone' : '../node_modules/backbone/backbone',
		'utils' : 'libs/utils',
		'bowser' : '../node_modules/bowser/src/bowser',
		'config': 'empty:',
		'stripe' : 'https://js.stripe.com/v2/',
		'checkout' : 'https://checkout.stripe.com/checkout.js'
	},
    name: "main",
    out: "main-built.js"
})