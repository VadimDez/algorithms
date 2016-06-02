/**
 * Created by Vadym Yatsyuk on 02/06/16
 */

export default (list) => {
  var arrayA = [];
  var arrayB = [];
  var length = list.length;
  var product = 1;
  var i;

  for (i = 0; i < length; i++) {
    arrayA[i] = product;
    product *= list[i];
  }

  product = 1;
  for (i = length - 1; i >= 0; i--) {
    arrayB[i] = product;
    product *= list[i];
  }
  
  return arrayA.map((val, i) => {
    return val * arrayB[i];
  });
}