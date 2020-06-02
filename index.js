let driver={};
function updateDriverWithKeyAndValue(driver, key, value){
  let obj=  obj[key]=value;
  Object.assign(obj,driver);

return obj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  let
return  Object.assign(driver,{[key]:value});

}
function deleteFromDriverByKey(driver, key){

  const newdriver = Object.assign({}, driver);

  delete newdriver[key];
return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver[key];
  return driver;
}
