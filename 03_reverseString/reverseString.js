const reverseString = function(aString) {
	let outString = '';
	for (i=aString.length-1; i >=0; i--){
		outString += aString.charAt(i);
	}
	return outString;
};

// Do not edit below this line
module.exports = reverseString;
