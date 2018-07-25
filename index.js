// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
          	return drivers.slice(0,2)
}
const returnLastTwoDrivers= function(drivers){
      return drivers.slice(-2)          
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(inte){
  return function(multiply){
  	return inte * multiply
  }
}
const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);
const selectDifferentDrivers= function(drivers,firstOrLast){
   return firstOrLast(drivers);
}