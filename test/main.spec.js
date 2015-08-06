describe('Contactical', function() {

	beforeEach(function() {
		module('Contactical');
	});

	describe('ContactService', function() {
		var service;
		beforeEach(function() {
			inject(function($injector) {
				service = $injector.get('ContactService');
			})
		});
		
		it('should return 3 contacts when call getContacts()', function() {
			expect(service.getContacts().length).toEqual(3);
		})

		it('should return "bright" contacts when call getContacts()', function() {
			var brightContact = {name: 'bright'};
			expect(service.getContacts()).toContain(brightContact);
		})
	}); 
});