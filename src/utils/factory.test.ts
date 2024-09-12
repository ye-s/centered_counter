import { expect, test } from 'vitest';
import { factory } from './factory';

test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('creates a count starting from 10, and defaults to step 1 when no arguments passed', function () {
  const count = factory(10);
  expect(count()).toBe(11);
  expect(count()).toBe(12);
});

test('creates a count starting from 2 with a step of 3', function () {
  const count = factory(2, 3);
  count();
  expect(count()).toBe(8);
  expect(count()).toBe(11);
});

test('creates a negative count starting from -2000 and step of -3000', function () {
  const count = factory(-2000, -3000);
  count();
  expect(count()).toBe(-8000);
  expect(count()).toBe(-11000);
});

test('creates a count and step with decimal values', function () {
  const count = factory(0.2, 0.3);
  count();
  expect(count()).toBe(0.8);
  expect(count()).toBe(1.1);
});

test('creates a negative count and negative step with decimal values', function () {
  const count = factory(-0.2, -0.3);
  count();
  expect(count()).toBe(-0.8);
  expect(count()).toBe(-1.1);
});

test('creates a count of 1 and step with 0 value', function () {
  const count = factory(1, 0);
  count();
  expect(count()).toBe(1);
  expect(count()).toBe(1);
});

test('recreates new count function when factory is called with updated arguments', function () {
  let count = factory(5, 5);
  expect(count()).toBe(10);
  expect(count()).toBe(15);

  count = factory(5, -2);
  expect(count()).toBe(3);
  expect(count()).toBe(1);
});



