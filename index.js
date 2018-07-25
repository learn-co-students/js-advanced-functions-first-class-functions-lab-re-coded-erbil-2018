// Code your solution in this file!


const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
  return newArray =[drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers){
 return newArray =[drivers[drivers.length -2],drivers[drivers.length -1]];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

 function createFareMultiplier(num){
 return function(){
   return num*5;
 }
}

function fareDoubler(num){
  return num*2;
}

function fareTripler(num){
  return num*3;
}

function selectDifferentDrivers(drivers, func){
  return func(drivers);
}


