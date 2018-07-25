// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers=function(driversAray){
  return driversAray.slice(0,2);
}
const returnLastTwoDrivers=function(driversAray){
  return driversAray.slice(2);
}

let selectingDrivers =[(returnFirstTwoDrivers),(returnLastTwoDrivers)];

const createFareMultiplier=function (val){
  return function(){
    return val*val;
  }
}
 const fareDoubler=function(val1){
   
   return val1*2;
 }
 let  fareTripler=function (val2){
   return val2 *3;
 }
const selectDifferentDrivers =function(driver,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(driver);
  
}