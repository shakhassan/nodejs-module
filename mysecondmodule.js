//using function and module.exports

function getPlus(a, b) {
    return a + b;
}

function getMultiply(a, b) {
    return a*b;
}

// module.exports = {
//     getPlus,
//     getMultiply
// }

//rewrite using exports

exports.getPlus = getPlus;
exports.getMultiply = getMultiply;