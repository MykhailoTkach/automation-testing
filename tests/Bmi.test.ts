import { describe, it, expect } from 'vitest';
import { calculateBmi } from '../src/bmi';

describe('calculateBmi', () => {
  it('повертає 22.9 для зросту 1.75 м і ваги 70 кг', () => {
    const height = 1.75;
    const weight = 70;

    const result = calculateBmi(height, weight);

    expect(result).toBe(22.9);
  });

  it('повертає 27.8 для зросту 1.8 м і ваги 90 кг', () => {
    expect(calculateBmi(1.8, 90)).toBe(27.8);
  });

  it('приймає найменший можливий додатний зріст на межі допустимого', () => {
    expect(calculateBmi(0.01, 1)).toBe(10000);
  });

  it('округлює результат до одного знака після коми', () => {
    expect(calculateBmi(1.7, 65)).toBe(22.5);
  });

  it('відхиляє нульовий зріст із помилкою INVALID_HEIGHT', () => {
    expect(() => calculateBmi(0, 70)).toThrow('INVALID_HEIGHT');
  });

  it('відхиляє від’ємний зріст із помилкою INVALID_HEIGHT', () => {
    expect(() => calculateBmi(-1.75, 70)).toThrow('INVALID_HEIGHT');
  });

  it('відхиляє нечисловий зріст із помилкою INVALID_HEIGHT', () => {
    expect(() => calculateBmi(NaN, 70)).toThrow('INVALID_HEIGHT');
  });

  it('відхиляє нульову вагу із помилкою INVALID_WEIGHT', () => {
    expect(() => calculateBmi(1.75, 0)).toThrow('INVALID_WEIGHT');
  });

  it('відхиляє від’ємну вагу із помилкою INVALID_WEIGHT', () => {
    expect(() => calculateBmi(1.75, -70)).toThrow('INVALID_WEIGHT');
  });
});
