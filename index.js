// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
 const x = function (drivers) {
   return drivers.slice(0,2)
 }
 return x(drivers)
 }




const returnLastTwoDrivers =  function (drivers) {
  const x = function (drivers) {
    return drivers.slice(2,4)
  }
  return x(drivers)
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




const createFareMultiplier = function (x) {
  const fareQuintupler = function (x) {
    return x * x
      }
return fareQuintupler
}




const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2
}




const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3
}




function selectDifferentDrivers(drivers, m) {
  if (m === returnFirstTwoDrivers){
 m = returnFirstTwoDrivers(drivers)
 }else {
  m = returnLastTwoDrivers(drivers)
 }
return m
}
