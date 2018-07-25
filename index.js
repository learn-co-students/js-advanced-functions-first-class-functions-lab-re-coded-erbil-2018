// Code your solution in this file!
const returnFirstTwoDrivers= function (driver) {
   let newArray= [driver[0],driver[1]];
   return newArray;
  } 
  const returnLastTwoDrivers=function(hama){
    return hama.slice(2)
    
  }
  const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
  
 const createFareMultiplier = function(number) {
 return function(fare) {
   return fare * number} }
 
const fareDoubler = function(fare) {
     return fare * 2;
}
const fareTripler = function(fare) {
     return fare * 3;
}
const selectDifferentDrivers=function(drivers, FirstTwoDrivers){
  return FirstTwoDrivers(drivers)
}