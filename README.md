# Контроль со знаком “Плюс”

Production-ready сайт-блог на Next.js 15, React, TypeScript, TailwindCSS и Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Для production укажите домен:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.ru
```

## Структура

- `src/app` — App Router, метаданные, глобальные стили.
- `src/components` — UI-компоненты сайта.
- `src/data` — весь авторский текст и изображения.
- `src/lib` — утилиты.
