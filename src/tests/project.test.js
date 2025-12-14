import { toCapitalize } from '../modules/capitalize.js';
import { reverseString } from '../modules/reverse.js';
import { calculator } from '../modules/calculator.js';
import { caesarCipher } from '../modules/caesarCipher.js';

test('Capitalizes a string', () => {
    expect(toCapitalize('string')).toBe('String');
})

test('Reverse a string', () => {
    expect(reverseString('string')).toBe('gnirts');
})

test('Calculator methods', () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.sub(3, 1)).toEqual(2);
    expect(calculator.multiply(2, 2)).toEqual(4);
    expect(calculator.divide(5, 1)).toEqual(5);
})

test('Caesar Cipher: Works with single letter', () => {
    expect(caesarCipher('h', 5)).toBe('m');
    expect(caesarCipher('a', 5)).toBe('f');
    expect(caesarCipher('z', 5)).toBe('e');
})

test('Caesar Cipher: Works with a word', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
})

test('Caesar Cipher: Works with a multiple words', () => {
    expect(caesarCipher('hello hello', 5)).toBe('mjqqt mjqqt');

})

test('Caesar Cipher: Works with capital letters', () => {
    expect(caesarCipher('HeLlo', 5)).toBe('MjQqt');
})

test('Caesar Cipher: Works with punctuation', () => {
    expect(caesarCipher('hello! World!', 5)).toBe('mjqqt! Btwqi!');
    expect(caesarCipher('hello:! World!,', 5)).toBe('mjqqt:! Btwqi!,');
})

