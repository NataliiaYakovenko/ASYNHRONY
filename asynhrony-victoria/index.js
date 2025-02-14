"use strict";

//відобразити на сторінці поточну температуру з одиницєю виміру
//відобразити мінусову температуру синім кольором
// 0 - чорним
//плюсову температуру до 40 - зеленим
//температура >= 40 - червоним

/*
Алгоритм

Обовєязкові
1. Створити елемент
Необхідні
2. Задати значення атрибута
3. Якщо необхідно.Додати класи
4. Додати контент
5. Додати обробник на якусь подію
Обовєязкові
6. Вбудуваи його туди куди потрібно
*/
const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => generateWeather(data))
  .catch((err) => console.log("error:", err));

//відобразити на сторінці поточну температуру з одиницєю виміру
//відобразити мінусову температуру синім кольором
// 0 - чорним
//плюсову температуру до 40 - зеленим
//температура >= 40 - червоним

function generateWeather(data) {
  //data.current.temperature_2m = 70 - для тестування температури

  const currentTemperatureEl = document.createElement("div");
  currentTemperatureEl.textContent = `${data.current.temperature_2m} ${data.hourly_units.temperature_2m}`;
  currentTemperatureEl.style.color = calcTemperatureColor(data.current.temperature_2m);
  
  const currentWindSpeed = document.createElement("div");
  currentWindSpeed.textContent = `${data.current.wind_speed_10m} ${data.hourly_units.wind_speed_10m}` ;

  document.body.append(currentTemperatureEl);
  document.body.append(currentWindSpeed)
}

function calcTemperatureColor(temperature) {
  if (temperature < 0) {
    return "blue";
  } else if (temperature === 0) {
    return "black";
  } else if (temperature > 0 && temperature < 40) {
    return "green";
  } else {
    return "red";
  }
}
