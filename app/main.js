var myApp = angular.module('Contactical', []);
myApp.service('ContactService', function() {
	var self = this;
	self.contacts = [{name: 'bright'}, {name: 'jojo'}, {name: 'ball'}];
	this.getContacts = function() {
		return self.contacts;
	}
});