//////////////////////////////////////////////////////////
// creates a new promise that resolves after 10 seconds///
//////////////////////////////////////////////////////////
const testPromise1 = new Promise(function(resolve, reject) {
    console.info('Inside testPromise1');
    setTimeout(() => resolve("testPromise1 DONE!"), 10000);
});

// when resolved, print result
console.info('Handling of testPromise1');
testPromise1.then(result => console.info(result), error => console.error(error));

// when resolved print result and handle finally clause
console.info('Handling result of testPromise1 - with finally');
testPromise1.then(result => console.info(result)).finally(() => console.info('Handling finally on testPromisse1'));

///////////////////////////////////////
// creates a new promise that rejects//
///////////////////////////////////////
const testPromise2 = new Promise(function(resolve, reject) {
    console.info('Inside testPromise2');
    reject(new Error("testPromise2 REJECTED!"));
});

// handle the rejection
console.info('Handling of testPromise2');
testPromise2.then(result => console.info(result), error => console.error(error));

// handle the rejection case 2
console.info('Handling error of testPromise2 - mode 2');
testPromise2.then(null, error => console.error(error));

// handle the rejection case 3
console.info('Handling error of testPromise2 - mode 3');
testPromise2.catch(error => console.error(error));


/////////////////////////////////////////////////////////
// creates a new promise that resolves after 10 seconds//
/////////////////////////////////////////////////////////
const testPromise3 = new Promise(function(resolve, reject) {
    console.info('Inside testPromise3');
    setTimeout(() => resolve("testPromise3 DONE!"), 10000);
});

// extract the result
let extractedResult3 = testPromise3.then(result => {
    // this gets called after 10seconds
    console.info(result);
    return result;
})
// this will be the promise object not the result in pending state. We will see this before 'testPromise3 DONE!' log
console.info('Take1: Here is the extracted result of testPromise3', extractedResult3);

// self invoking function to demo es6 async/await in order to wait for promises
(async () => {
    extractedResult3 = await testPromise3;
    // this will be the promise object not the result in pending state. We will see this before 'testPromise3 DONE!' log
    console.info('Take2: Here is the extracted result of testPromise3', extractedResult3);
})();

