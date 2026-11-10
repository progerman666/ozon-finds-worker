# ozon-finds-worker — Находки на Ozon

Статический сайт про обзоры гаджетов с Ozon, развёрнутый на **GitHub Pages**.

## 🔗 Ссылки

- **Сайт:** https://progerman666.github.io/ozon-finds-worker/
- **Исходный код:** https://github.com/progerman666/ozon-finds-worker

## Структура

```
docs/
├── index.html                         — Главная страница
├── styles.css                         — Общие стили
├── 404.html                           — Страница 404
└── articles/
    ├── braslety/index.html            — Фитнес-браслеты
    ├── naushniki/index.html           — Наушники
    └── chasy/index.html              — Смарт-часы
```

## Как опубликовать на GitHub Pages

1. Создай репозиторий `ozon-finds-worker` на GitHub
2. Залей туда этот проект:
   ```bash
   cd d:\projects\ozon-finds-worker
   git init
   git add .
   git commit -m "init"
   git remote add origin https://github.com/progerman666/ozon-finds-worker.git
   git push -u origin main
   ```
3. В настройках репозитория: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/docs`
4. Через пару минут сайт будет доступен по адресу `https://progerman666.github.io/ozon-finds-worker/`
