/**
 * @desc App View
 * 
 *
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'utils',
	'models/user'
	
],	function($, _, Backbone, Utils, UserModel){
	
	
		var AppView = Backbone.View.extend({
			
			// setup DOM Elements
			el : $('body'),
			
			// bind Events
			events: {
				'click .trigger-scroll-to-projects' : 'scrollToProjects'
			},

			/**
			 * initialize()
             * @desc intialize the view
			 *
			 * @param options
			 */
			initialize: function(options){
			},
			
			/**
             * render()
			 * @desc Render the view
			 * 
			 * 
			 */			
			render: function(){
				
				// No render
				
			},

			scrollToProjects: function(event){
				$('html, body').animate({
					scrollTop: $('[data-project-id="1"]').offset().top
				}, 500);
			}
		
		});
				
	return AppView;
				
});