'use strict'

//Promise - це об'єкт, який може знаходитись у різних станах:

/*promise state (painting,fullfiled, rejected) //якщо promise fullfiled(виконано)
        painting, - виконується
        fullfiled, - виконано
        rejected  - відхилино
result


*/

//setInterval(cb,1000)
//button.addEventListener('click',()=>{});

//fetch - це функція для завантаження даних
const weatherUrl =
  "https://apil.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

  fetch(weatherUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('error:',err))

  //Альтернативний варіант
  // fetch(weatherUrl)
  // .then(response => response.json())
  // .then(
  //   data => console.log(data),
  //   err => console.log('error:',err)
  // );



console.log("next line");
console.log(weatherUrl);

//console.log(response)
//-------------------------------------
//promise

// fetch(weatherUrl)
// .then(response => response.json())
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .then(data => console.log(data))
// .catch(err => console.log('error:',err))

//--------------------------------------------
//calback hell

// setInterval(()=>{
//   setInterval(()=>{
//     setInterval(()=>{
//       setInterval(()=>{
//         setInterval(()=>{
//           setInterval(()=>{},1000);
//         },1000);
//       },1000);
//     },1000);
//   },1000);
// },1000);