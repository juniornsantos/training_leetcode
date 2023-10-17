var a = [10, 1, 2];
var b = [2, 4];

// console.log(union);

var mergeTwoLists = function(list1, list2) {
    return union = [...new Set([...list1, ...list2])].sort();

};
console.log(mergeTwoLists(a, b));