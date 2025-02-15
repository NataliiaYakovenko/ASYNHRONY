"use strict";

// status pending  - очикування

// statuse fulfilled (виконано) => then
// statuse reject (відхилено) => catch

function promiseCallback(resolve, reject) {
  //виконуються кісь дії
  //resolve('success result')
  reject(new Error("something wrong"));
}

const promise = new Promise(promiseCallback);

promise.then((data) => console.log(data)).catch((error) => console.log(error));
//----------------------------------------------------------------------

// Promise.resolve([{user:'Nataliia'}])
// .then(data=>console.log(data))

// Promise.reject()
// .catch()

//синхроний код виконується до promise
console.log("end of synchronous code");
//---------------------------------------------------------------------
//Задача. Кіт Шредингера

function executor(resolve, reject) {
  if (Math.random() < 0.5) {
    resolve('the cat is alive')
  } else {
    reject(new Error ('the cat is dead'))
  }
}

const schredingerCat = new Promise(executor);

schredingerCat
.then(data=>console.log(data))
.catch(error=>console.log(error));
//-------------------------------------------------------

//Промісифікувати setTimeout
//setTimeout(cb,1000)
//delay(1000).then(cb)

function delay(ms){
  function executor(resolve,reject){
      if(typeof ms !== 'number'){
         reject (new TypeError('milliseconds must be a number'))
      }
      if(ms < 0 || !Number.isInteger(ms)){
        reject (new RangeError('milliseconds must be more 0 and must be integer'))
      }
       setTimeout(resolve,ms)
     }
     
  return new Promise(executor)

}
//setTimeout(()=>console.log('action is over'),1000)
delay(2000)
.then(()=>console.log('action is over'))
.catch(error => console.log(error))