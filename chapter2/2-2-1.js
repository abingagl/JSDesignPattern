var func = function (a, b, c) {
    console.log([ a, b, c]);
};

func.apply(null, [1, 2, 3]);

func.call(null, 1, 2, 3);

console.log(Math.max.apply(null, [1, 2, 3]));