export function calculateBmi(heightM: number, weightKg: number): number {
  if (!Number.isFinite(heightM) || heightM <= 0) {
    throw new Error('INVALID_HEIGHT');
  }
  if (!Number.isFinite(weightKg) || weightKg <= 0) {
    throw new Error('INVALID_WEIGHT');
  }
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
}
