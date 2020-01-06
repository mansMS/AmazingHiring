# AmazongHiring

Тестовое задание отсюда: https://github.com/blmzv/testForAmazingHiring/blob/master/README.md

Дополнительно к условию: 
- фильтрация по нескольким рекрутерам
- в адресную строку можно задавать несколько значений "assignee", чтобы сразу выставить значения в поле выбора (напр. : `/vacancies/?assignee=1,3,4,5`). Повторяющиеся или несоответствующие имеющим данным значения удаляются (`/vacancies/?assignee=3,3,40000,5` => `/vacancies/?assignee=3,5`)


## Установка зависиместей

```
npm install
```

## Запуск

```
npm start
```
