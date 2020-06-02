let driver={};
function updateDriverWithKeyAndValue(driver, key, value){
  let obj=Object.assign({},driver);
  obj.key=value;
return obj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
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
