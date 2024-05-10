const repeatString = function(word, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return "ERROR";
    }
    let result = "";
    for (i = 0; i < numberOfRepeats; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
