/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, (n * 1000));
    });
}

// function afterWait() {
//     console.log("wait completed");
// }

// wait(5).then(afterWait);

module.exports = wait;
