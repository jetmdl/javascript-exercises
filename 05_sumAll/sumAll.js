const sumAll = function(startNum, endNum) {
    let sumNum = 0;
    if (typeof(startNum) === 'number' && typeof(endNum) === 'number'){
        if (startNum >= 0 && endNum >= 0 ){
            if(startNum < endNum){
                for(let i = startNum; i <= endNum; i++){
                    sumNum += i;
                }
            }else if (startNum > endNum){
                for(let i = endNum; i <= startNum; i++){
                    sumNum += i;
                }
            }
            return sumNum;
        } else {
            return 'ERROR';
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;10
