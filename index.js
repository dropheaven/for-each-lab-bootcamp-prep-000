function iterativeLog (array) {
  array.forEach(function(element, index, array){
    console.log(`${index}: ${element}`);
  });
}

function iterate (callback) {
  var array = ["Hi", "I'm", "learning", "about", "callbacks"];

  array.forEach(callback);

  return array;
}

function doToArray (array, callback) {
  array.forEach(callback);
}
