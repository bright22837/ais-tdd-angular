describe('Contactical', function() {

	beforeEach(function() {
		module('Contactical');
	});

	describe('ContactService', function() {
		var service;
		var $httpBackend;
		beforeEach(function() {
			inject(function($injector) {
				service = $injector.get('ContactService');
				$httpBackend = $injector.get('$httpBackend');
				$httpBackend.expectGET('http://localhost:9001/contacts')
					.respond(200, [])
					;
			})
		});
		
		/*
		it('should return 3 contacts when call getContacts()', function() {
			service.getContacts();
			expect(service.contacts().length).toEqual(3);
		})
*/

/*
		it('should return "bright" contacts when call getContacts()', function() {
			var brightContact = {name: 'bright'};
			expect(service.getContacts()).toContain(brightContact);
		})
*/

		it('should call backend API', function() {
			service.getContacts();
			$httpBackend.flush();

		})
	}); 
});