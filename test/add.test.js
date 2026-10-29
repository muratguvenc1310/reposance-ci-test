import { test } from 'node:test';
import assert from 'node:assert';
import { add } from '../src/add.js';

test('add(2, 3) is 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('add(2, 2) is 5', () => {
  assert.strictEqual(add(2, 2), 5);
});
