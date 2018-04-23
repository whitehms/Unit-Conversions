function inches_to_feetinches(length) {
	var feet = Math.floor(length / 12);
    var inches = length % 12;
    return feet + "'" + inches + "\"";

}

function celsius_to_kelvin(celsius) {
	// var celsius;
	var kelvin = celsius +273;
	return kelvin;
}

function kilograms_to_grams(kilograms) {
	var grams = kilograms * 1000;
	return grams;
}

module.exports = {
	inches_to_feetinches,
	celsius_to_kelvin,
	kilograms_to_grams
};