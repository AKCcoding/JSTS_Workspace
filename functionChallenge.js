// function getCelsius(F) {
//   celsius = ((F - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (F) => ((F - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0c`);

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 5, 10]));
