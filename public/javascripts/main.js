requirejs.config({
	paths: {
		'jquery' : '../node_modules/jquery/dist/jquery.min',
		'underscore' : '../node_modules/underscore/underscore-min',
		'backbone' : '../node_modules/backbone/backbone',
		'utils' : 'libs/utils',
		'bowser' : '../node_modules/bowser/src/bowser',
		'stripe' : 'https://js.stripe.com/v2/?1',
		'checkout' : 'https://checkout.stripe.com/checkout'
	},
	
	shim: {

	}

});

require([ 'app' ], function(App){
	
	App.initialize();

});