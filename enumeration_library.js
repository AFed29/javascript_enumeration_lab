const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find = function(callback) {
  // for (const item of this.array) {
  //   if (callback(item)) return item;
  // }
  let foundObject;
  this.array.forEach((item) => {
    if (callback(item)) foundObject = item;
  });
  return foundObject;
}

EnumerationLibrary.prototype.map = function(callback) {
  // const newArray = [];
  // for (const item of this.array) {
  //   newArray.push(callback(item));
  // }
  // return newArray;
  const newArray = [];
  this.array.forEach((item) => {
    newArray.push(callback(item));
  });
  return newArray;
}

EnumerationLibrary.prototype.filter = function(callback) {
  // const newArray = [];
  // for (const item of this.array) {
  //   if (callback(item)) {
  //     newArray.push(callback(item));
  //   }
  // }
  // return newArray;
  const newArray = [];
  this.array.forEach((item) => {
    if (callback(item)) {
      newArray.push(callback(item));
    }
  });
  return newArray;
}

EnumerationLibrary.prototype.some = function(callback) {
  // for (const item of this.array) {
  //   if (callback(item)) return true;
  // }
  // return false;
  let result = false;
  this.array.forEach((item) => {
    if (callback(item)) result = true;
  });
  return result;
}

EnumerationLibrary.prototype.every = function(callback) {
  //   for (const item of this.array) {
  //     if (!callback(item)) return false;
  //   }
  //   return true;
  // }
  let result = true;
  this.array.forEach((item) => {
    if (!callback(item)) result = false;
  });
  return result;
}

module.exports = EnumerationLibrary;
