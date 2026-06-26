import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

// assert.equal(actual, expected)
assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize('a'), 'A');
assert.equal(capitalize('Hello'), 'Hello');

console.log('✅ Все тесты пройдены!');
