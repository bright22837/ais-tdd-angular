var answer = function(number) {

	var ret = '';
	if((number % 3) == 0) ret += "Fizz";
	if((number % 5) == 0) ret += "Buzz";

	return ret != '' ? ret : number +'';

}