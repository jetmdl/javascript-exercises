const leapYears = function(aYear) {
    if(aYear%4 === 0){
        if(aYear%100 === 0){
            if (aYear%400 === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
