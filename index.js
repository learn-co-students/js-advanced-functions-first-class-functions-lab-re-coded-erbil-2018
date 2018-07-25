// Code your solution in this file!

let drivers = ['Mabast', 'Krmanj', 'Ahmed', 'Mohammed'];

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2);
}


const returnLastTwoDrivers = function (drivers){
  return drivers.slice(drivers.length-2,drivers.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (num){
  return function(){
    return num * num ;
  }
}


const fareDoubler = function (num){

   return 2 * num;
}


const fareTripler = function(num){
  return num * 3;
}


const selectDifferentDrivers = function (drivers, returnLastTwoDrivers)
{
  return returnLastTwoDrivers(drivers);
}






