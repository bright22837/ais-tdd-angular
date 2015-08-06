describe('FizzBuzz', function() {
	it ('should retrun "1" when get number 1', function() {
		expect(answer(1)).toEqual("1");
	});

	it ('should retrun "2" when get number 2', function() {
		expect(answer(2)).toEqual("2");
	});

	it ('should retrun "Fizz" when get number 3', function() {
		expect(answer(3)).toEqual("Fizz");
	});

	it ('should retrun "Buzz" when get number 5', function() {
		expect(answer(5)).toEqual("Buzz");
	});

	it ('should retrun "FizzBuzz" when get number 15', function() {
		expect(answer(15)).toEqual("FizzBuzz");
	});

});