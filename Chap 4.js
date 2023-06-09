var arrayToList = function (array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
};
var listToArray = function (list) {
    var listArray = [];
    var helperFunc = function (list) {
        for (var val in list) {
            if (val === 'value') {
                listArray.push(list[val]);
            }
            else if (val === 'rest' && list[val] === null) {
                return;
            }
            else if (val === 'rest') {
                helperFunc(list[val]);
            }
        }
    };
    helperFunc(list);
    return listArray;
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
