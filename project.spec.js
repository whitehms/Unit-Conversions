const converter = require('./project');

// const inches_to_feetinches = require('./project');

describe('A length conversion', function() {
	it('can convert from inches to feet and inches', function(){
		const value = converter.inches_to_feetinches(30);
		expect(value).toBe("2'6\"");
		// expect(value).to.not.be.null;
		// expect(value.value).to.equal(30/12);
		// expect(value.unit).to.equal('in');
	});
});
 // const celsius_to_kelvin = require('./project');

 describe('A temperature conversion', function(){
 	it('can convert from celsius to kelvin', function(){
 		const value = converter.celsius_to_kelvin(20);
 		expect(value).toBe(293);
 	});
 });

describe('A mass conversion', function(){
	it('can convert from kilograms to grams', function(){
		const value = converter.kilograms_to_grams(1);
		expect(value).toBe(1000);
	});
});



