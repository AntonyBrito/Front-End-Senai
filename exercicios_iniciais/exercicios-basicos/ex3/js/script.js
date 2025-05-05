let celcius = Number(prompt('Digite a temperaturo em Celcius'));

let fahrenheit = (celcius * 9) / 5 + 32;
let kelvin = celcius + 273.15;

alert(
  'Temperatura em Fahrenheit: ' +
    fahrenheit +
    ' | Temperatura em Kelvin ' +
    kelvin
);
