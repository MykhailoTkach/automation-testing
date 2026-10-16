import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // можна використовувати describe, it, expect без явного імпорту в кожному файлі
    environment: 'node', // Середовище виконання тестів. Для бізнес-логіки – node; для тестів компонентів знадобиться jsdom
    include: ['tests/**/*.test.ts'], // Шаблон, за яким раннер шукає тестові файли
    coverage: {
      provider: 'v8', // Механізм вимірювання покриття
      reporter: ['text', 'html'], // У якому форматі вивід буде.
      include: ['src/**/*.ts'], // Які файли враховувати. Без цього параметра у звіт потрапляють конфігурації й самі тести, що спотворює показники
      thresholds: {
        // Мінімальні значення покриття. Якщо їх не досягнуто, прогін завершується з помилкою
        lines: 80,
        branches: 80,
        functions: 100,
      },
    },
  },
});
