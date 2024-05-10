/*
const removeFromArray = funciton(array, ...args) {
    
}
*/

const removeFromArray = function() {
    let result = [];
    let array = arguments[0];
    let hashSet = new Set();

    // add ...args to hashmap
    for (j=1; j < arguments.length; j++) {
        hashSet.add(arguments[j])
    }
    for (i=0; i < array.length; i++) {
        if (!hashSet.has(array[i])) {
            result.push(array[i])
        }
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
