const capitalise = require('./testfuncts/cap');
test('capitalises first letter of string,', () => {
  expect(capitalise('charisma')).toMatch('Charisma')
});

const revString = require('./testfuncts/revString');
test('reverse string', () => {
  expect(revString('agility')).toMatch('ytiliga')
});

const calc = require('./testfuncts/calc');
test('calculator functions', () => {
  expect(calc.add(1,2)).toBe(3);
  expect(calc.subtract(4,2)).toBe(2);
  expect(calc.divide(10,2)).toBe(5);
  expect(calc.multiply(3,2)).toBe(6);
})

const caesarCipher = require('./testfuncts/caesar-cipher');
test('characters have been shifted', () => {
  expect(caesarCipher('Defend the east wall of the castle!', 1)).toMatch('Efgfoe uif fbtu xbmm pg uif dbtumf!');
  expect(caesarCipher('Defend the east wall of the castle!', 5)).toMatch('Ijkjsi ymj jfxy afqq tk ymj hfxyqj!');
})

const analyseArray = require('./testfuncts/analyse-array');
const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
test('array has been analyzed', () => {
  expect(analyseArray([1,8,3,4,2,6])).toMatchObject(object);
})