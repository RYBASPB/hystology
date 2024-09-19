# Hystology

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/hystology?style=for-the-badge)

**Hystology** — это веб-приложение для автоматической генерации маркировки гистологических образцов на основе данных из направлений на патолого-анатомическое исследование биопсийного (операционного) материала.

## О проекте

Приложение предназначено для помощи медицинским работникам в автоматизации процесса маркировки образцов. Пользователь загружает текст направления, а система обрабатывает его с использованием регулярных выражений и выделяет ключевую информацию для создания меток.

### Основные возможности:
- Автоматическое извлечение данных из направлений с помощью регулярных выражений.
- Генерация маркировки гистологических образцов.
- Простой и интуитивно понятный интерфейс на базе **Vue**.

## Как использовать

1. Зайдите на ![сайт проекта](https://hystology.vercel.app/).
2. Вставьте текст направления в соответствующее поле.
3. Добавьте необходимые препараты из шаблонов или введите название самостоятельно.
4. Приложение сгенерирует метки на основе предоставленного текста.
5. Распечатайте с помощью кнопки "Печать".

## Технологии

- **Vue 3** — используется для построения интерфейса пользователя.
- **Регулярные выражения** — применяются для обработки текста направлений.
- **Vercel** — хостинг для сайта.
