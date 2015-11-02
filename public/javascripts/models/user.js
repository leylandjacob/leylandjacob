define([
	'underscore',
	'backbone',
	'utils'
  
], function(_, Backbone, Utils){

	var UserModel = Backbone.Model.extend({
		
		urlRoot : '/api/users/',
		
		// set the model id to _id
		idAttribute: "_id",

		/**
		 * parse()
		 * @desc parse the response
		 *
		 * @param res
		 * @returns {Object}
		 */
		parse: function(res){

			return res.data;

		},

		/**
		 * initialize()
		 * @desc initialize the model
		 *
		 */
		initialize: function(){
			this.on('error', this.errorHandler);
		},

		/**
		 * errorHandler()
		 *
		 * Catch all errors on this model
		 *
		 */
		errorHandler: function() {
			Utils.alert( Utils.getConfig().messages.generalError );
		}
	
	});

	return UserModel;

});