// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it("should return fizz if a multiple of 3, but not 5", function(){
		const fizzCases = [
			{num: 6, expected: 'fizz'},
			{num: 9, expected: 'fizz'}
		];

		fizzCases.forEach(function(input) {
      		const answer = fizzBuzzer(input.num);
      		expect(answer).to.equal(input.expected);
    });
  });

	it("should return buzz if a multiple of 5, but not 3", function(){
		const buzzCases = [
			{num: 10, expected: 'buzz'},
			{num: 20, expected: 'buzz'}
		];

		buzzCases.forEach(function(input) {
      		const answer = fizzBuzzer(input.num);
      		expect(answer).to.equal(input.expected);
    });
  });

	it("should return fizzbuzz if a multiple of 3 and 5", function(){
		const fizzbuzzCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 30, expected: 'fizz-buzz'}
		];

		fizzbuzzCases.forEach(function(input) {
      		const answer = fizzBuzzer(input.num);
      		expect(answer).to.equal(input.expected);
    });
  });

	it("should return an error if not a number", function(){
		const errorCases = [
			{num: true},
			{num: 'hello'}
		];

		errorCases.forEach(function(input) {
      		expect(function(){
      			fizzBuzzer(input.num);
      		}).to.throw(Error);
    });
  });
});
