Запуск:
1) устанавливаем node.js последней версии
2) устанавливаем зависимости, в командной строке: npm install
3) запуск сервера разработки, в командной строке: npm run dev

Разработка:
Должна вестись в папке ./src/client/pages/main, остальные желательно не трогать.

Задача:
Необходимо разработать SPA-приложение для ведения списка пользователей и отслеживания их дружественных связей.
Разрабатывается только клиентская часть, сохранять ничего в базу данных не нужно, все данные хранить на клиенте.

В приложении должно быть две страницы:
1) список пользователей
- список с полями: фамилия, имя, отчество, email и количество друзей
- должна быть возможность добавить нового пользователя
- должна быть возможность просмотреть информацию о существующем пользователе
- должна быть возможность отредактировать существующего пользователя
- должна быть возможность удалить существующего пользователя
2) данные о пользователе
- просмотр и редактирование полей: фамилия, имя, отчество, email
- возможность добавить в друзья ранее созданного пользователя
- возможность удалить из друзей ранее созданного пользователя
- возможность вызова функции, которая отобразит все циклические связи текущего пользователя
  пример:
    Вася добавил Петю, а Петя добавил Васю
    Вася добавил Диму, Дима добавил Тому, а Тома добавила Васю

Используемые технологии (все зависимости подключены и настроены):
Сервер:
- node.js
- express.js
Клиент:
- vue.js
- vue-router.js
- vuetify.js