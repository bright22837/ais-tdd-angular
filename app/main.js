var myApp = angular.module('Contactical', []);
myApp.service('ContactService', function($http) {
	var self = this;
	self.contacts = [{name: 'bright'}, {name: 'jojo'}, {name: 'ball'}];
	this.getContacts = function() {
		//self.contacts;
		self.contacts = $http.get('http://localhost:9001/contacts')
			.then(function(res) {
				return self.contacts = res.data;
			})
	}

	this.contacts = function() {
		return self.contacts;
	}
});