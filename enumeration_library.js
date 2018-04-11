const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find = function(callback) {
  for (const item of this.array) {
    if (callback(item)) return item;
  }
}

EnumerationLibrary.prototype.map = function(callback) {
  const newArray = [];
  for (const item of this.array) {
    newArray.push(callback(item));
  }
  return newArray;
}

EnumerationLibrary.prototype.filter = function(callback) {
  const newArray = [];
  for (const item of this.array) {
    if (callback(item)) {
      newArray.push(callback(item));
    }
  }
  return newArray;
}

EnumerationLibrary.prototype.some = function(callback) {
  for (const item of this.array) {
    if (callback(item)) return true;
  }
  return false;
}

EnumerationLibrary.prototype.every = function(callback) {
  for (const item of this.array) {
    if (!callback(item)) return false;
  }
  return true;
}


module.exports = EnumerationLibrary;
