/**
 * Filename	: /config/config-app-public.js
 * Description: Publicly viewable app config variables
 *
 * Notes:
 */

var message = require('./config-messages');
var keys = require('./config-keys');

var date = new Date();
module.exports = {

    production : PRODUCTION,

	company: {
		name: 'LeylandJacob',
		legalName: '',
        appName: 'LeylandJacob',
        domain: 'leylandjacob.com',
        https: PRODUCTION,
        meta: {
            title: 'LeylandJacob',
            description: 'Jack of all trades, master of none.',
            keywords: 'LeylandJacob, Jake Elia, Leyland Elia',
            author: 'LeylandJacob',
            thumbnail : '/images/thumbnail.png'
        },
        address: {
            fullAddress : '6020 West Oaks Blvd. Suite 180 Rocklin, CA 95765',
            streetAddress: '6020 West Oaks Blvd. Suite 180',
            city: 'Rocklin',
            state: 'CA',
            zipcode: '95765',
            addressLink: 'https://maps.google.com'
        },
        phone: {
            main: '',
            support: ''
        },
        email: {
            main: 'leyland@leylandjacob.com',
            support: ''
        },
        support: {
            url: ''
        },
        social: {
            facebook: '',
            twitter: 'leylandjacob'
        },
        copyright : date.getFullYear()
	},

	token: 'c124931805fe4af6ac35ce598b36082a',

    messages: message

};