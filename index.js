let driver={};

function updateObjectWithKeyAndValue(object, key ,value){
  let obj = {};
  obj = Object.assign({}, object)
  obj.key=value;
  return obj
}
