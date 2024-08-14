# Задание 1
Будет использован плагин Webpack Module Federation.

## Основные свойства Webpack Module Federation:
 - Webpack Module Federation интегрируется напрямую в Webpack, что делает его более простым в настройке и использовании для существующих проектов на Webpack.
 - позволяет легко делиться кодом между микрофронтендами, что уменьшает дублирование кода и улучшает производительность.
 - модули могут быть загружены по мере необходимости (lazy loading), что может улучшить время загрузки страницы.
 - общие зависимости могут быть разделены между микрофронтендами (shared dependencies), что уменьшает общий размер бандлов.
 - есть возможность использовать разные версии библиотек без конфликтов. 

Ключевым фактором выбора стало сочетание возможности как разделять единовременно загруженную библиотеку, так и без конфликтов использовать разные версии библиотек.  
Такие возможности могут стать полезными в будущем, при дальнейшем обновлении и развитии проекта.

## Проект Mesto буду разбивать на такие микрофронтенды:
 - app - основная страница (хост), компоненты: App.js, Footer.js, Header.js, ImagePopup.js, Main.js, PopupWithForm.js, ProtectedRoute.js
 - cards - галерея мест, компоненты: AddPlacePopup.js, Card.js, PopupWithForm.js
 - profile - профиль пользователя, компоненты: EditAvatarPopup.js, EditProfilePopup.js, PopupWithForm.js
 - authentication - аутентификация пользователя, компоненты: InfoTooltip.js, Login.js, Register.js

В каждый микрофронтенд добавляются свои index.js, webpack.config.js и package.json

## Функции микрофронтендов:
1. Микрофронтенд app  
Этот микрофронтенд будет являться стартовой страницей и хостом для остальных микрофронтендов.  
Здесь будут располагаться header, контейнер контента и footer.  
На текущий момент, для простоты header и footer в отдельные микрофронтенды выносить не стал.
2. Микрофронтенд cards  
Этот микрофронтенд предоставляет функциональность для работы с галереей мест: добавление места и удаление места.  
Также здесь происходит обработка лайков под фотографиями.
3. Микрофронтенд profile  
Этот микрофронтенд позволяет просматривать и редактировать профиль пользователя: изменять информацию и загружать аватарку.
4. Микрофронтенд authentication  
Этот микрофронтенд нужен для работы с учетными данными пользователя - регистрация и аутентификация.  
Микрофронтенд authentication имеет логическую связь с profile, но отделён по причинам усиления безопасности.   
Также аутентификация может производиться разными способами, что тоже является причиной выдекления в отдельный микрофронтенд.

Для запуска проекта нужно запустить последовательно каждый микрофронтенд, примерно так:
```
cd ../cards
npm install
npm start
```
Так как третий уровень задания не сделан, то микрофронтенды не запустятся.

# Задание 2
https://github.com/zalivochkin/architecture-sprint-1/blob/sprint_1/microservices.drawio
