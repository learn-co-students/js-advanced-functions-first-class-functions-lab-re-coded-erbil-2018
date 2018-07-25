// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (arry){
  return arry.slice(2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(multiValue){
  return function(value){
    return multiValue * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};









