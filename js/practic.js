const doMath = function (a, b, callback) {
    const result = callback(a,b);

    console.log(result);
};
/*
const add = function (x, y) {
    return x + y;
};

const sub = function (x, y) {
    return x - y;
};

doMath(3, 2, add);
doMath(10, 4, sub);
*/ 

doMath(3, 2, function (x, y) {
    return x + y;
});

doMath(10, 4, function (x, y) {
    return x - y;
});