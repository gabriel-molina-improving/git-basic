const animals = ['humans', 'pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 5
console.log(animals);
// Expected output: Array ["humans","pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["humans", "pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]