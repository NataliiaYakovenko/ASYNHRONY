"use strict";

// status pending  - очикування

// statuse fulfilled (виконано) => then
// statuse reject (відхилено) => catch

function promiseCallback(resolve,reject){
 //виконуються кісь дії
 //resolve('success result')
 reject(new Error('something wrong'))
}

const promise = new Promise(promiseCallback)

promise
.then(data=>console.log(data))
.catch(error=>console.log(error))