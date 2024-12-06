// __tests__/sum.test.js
const sum = require('../sum'); // Importa la función sum desde sum.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});