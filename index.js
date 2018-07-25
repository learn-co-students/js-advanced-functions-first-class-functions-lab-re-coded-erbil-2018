
const returnFirstTwoDrivers = function (array) { 
  let newArray=[array[0], array[1]];
  
  return newArray;
  
}
  
  
  const returnLastTwoDrivers = function (array) {
    let newArray = [array[(array.length-2)], array[(array.length-1)]]
    return newArray;
  }
  
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  
  function createFareMultiplier(num) {
    return function (num) {return 5*num;}
  }
  
  const fareDoubler= function (num) {
    return num*2;}
  
  const fareTripler = function (num) {
    return num*3;}
    
   function selectDifferentDrivers (array, func){
   return func(array);}
    
  