function DataCompare() {

}

DataCompare.ageDifference = function (age) {
    var difference;
    var llamaMaxAge = 30;

    difference = age - llamaMaxAge;

    return difference;
};

DataCompare.feetToInches = function (feet, inches){

    var feetToTotalInches = (feet * 12) + inches;
    return feetToTotalInches;

};

DataCompare.heightDifference = function(totalInches){
    var difference;
    var llamaHeight = 71;

    difference = totalInches - llamaHeight;

    return difference
};

