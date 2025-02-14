'use strict'


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
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

  fetch(weatherUrl)
  .then(response => response.json())
  .then(data => generateWeather(data))
  .catch(err => console.log('error:',err))

function generateWeather(data){
    const currentTemperature = document.createElement('div')
    currentTemperature.textContent = `${data.current_weather.temperature} ${data.current_weather.units.temperature}`;
    document.body.append(currentTemperature);
}

