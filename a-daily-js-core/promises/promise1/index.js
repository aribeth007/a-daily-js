function addNumbers(a, b) {
    const sum = a + b;
    if (sum < 0) {
        throw new Error("I don't understand negativism!");
    }
    return sum;
}

function addNumbersAsync(a, b) {
    return new Promise(function(resolve, reject) {
        const sum = a + b;
        if (sum < 0) {
            reject(new Error("I don't understand async negativism!"));
        }
        resolve(sum);
    })
}

// Uncomment to see return type:
console.info('Test add numbers simple: ' + addNumbers(11, 2));
console.info('Test add numbers async: ' + addNumbersAsync(3, 5));

// Uncomment one at the time to see errors:
// console.info('Test error add numbers simple: ' + addNumbers(-1, -2));
// console.info('Test error add numbers async: ' + addNumbersAsync(-3, -5));

// Uncomment in order to wait for promise to be rejected or resolved. To test rejection just add two negative numbers.
// console.info('Test wait for promise to be resolved or rejected: ');
// const sumPromise = addNumbersAsync(1, 7);
// // lots of complicated code
// sumPromise.then(result => console.log('Result is: ' + result))
//     .catch(err => console.error(err.message));
