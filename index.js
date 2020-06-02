let driver={};
function updateDriverWithKeyAndValue(driver, key, value){
  let obj=Object.assign({},driver);
  obj[key]=value;
return obj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

  let obj=  Object.assign(driver,{[key]:value});
  return obj;

}
function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver);
  delete newdriver[key];
  return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
