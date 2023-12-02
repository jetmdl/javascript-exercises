const removeFromArray = function(anArray, anElement) {
	for(j=1;j<arguments.length;j++){
	  for (let i=0; i<anArray.length; i++){
			  if(anArray[i] === arguments[j]){
					  anArray.splice(i,1);
			  }
	  }
	}
	return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
