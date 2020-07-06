//using exports

exports.myDateTime = function () {
    return Date();
};

//exports after function declaration

// function myDateTime() {
//     return Date();
// }

// exports.myDateTime = myDateTime;

//rewrite : using module.exports

// function myDateTime() {
//     return Date();
// }

// module.exports = { myDateTime }