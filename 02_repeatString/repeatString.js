const repeatString = function(inString, num) {
	let outString = '';
	if(num == 0 || num >= 0){
		for(i=1; i<=num; i++){
			outString = outString + inString;
		}
	}
	else if(num <= 0){
		outString = 'ERROR';
	}
	return outString;
};

// Do not edit below this line
module.exports = repeatString;
