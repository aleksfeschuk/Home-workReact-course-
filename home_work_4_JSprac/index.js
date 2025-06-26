// Task 1

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5));



// Task 2


function once(fn)  {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
        return undefined;
    };
}

// Task 3

function fibsMemo(n, cache = {}) {
    if (n === 0) {
        return []
    }

    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1]
    }

    if (n in cache) {
        return cache[n];
    }

    const prevFibs = fibsMemo(n - 1, cache);

    const nextFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2];

    cache[n] = [...prevFibs, nextFib];

    return cache[n];
}


console.log(fibsMemo(1)); // [0]
console.log(fibsMemo(2)); // [ 0, 1 ]
console.log(fibsMemo(8)); // [ 0, 1, 1,  2, 3, 5, 8, 13]
console.log(fibsMemo(13));