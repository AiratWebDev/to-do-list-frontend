# Frontend-часть приложения для задач (to do list)

### Описание проекта 

Проект для тестового задания. Функционал позволяет добавлять задачи, а затем выводить их ниже на странице. Указан статус выполнения, текст, название задачи, а также пользователь и его почта.

Ссылка на выложененный проект: http://1292485-cc91283.tw1.ru/

![image](https://user-images.githubusercontent.com/113205906/223144972-4864560e-bd1e-4bb0-9972-d32c2e5b2f80.png)

#### Подробнее
• Frontend реализован на React.  
• Для упрощенной работы со стилями подключен react-bootstrap.  
• Создана форма для добавления задачи. Список задач выводится ниже. Задачи состоят из имени и почты пользователя, названия, статуса и текста самой задачи.   
• Сделана сортировка задач по имени пользователя, его почте и статусу задачи. Также реализована паджинация задач по 3 штуки на странице.    
• Есть возможность авторизации под администратором для редактирования текста задач и изменения их статуса выполненения. Авторизация реализована в виде pop-up формы.  
• Для хранения состояния задач используется Redux.

### Стэк разработки:

• React 18.2.0   
• React Bootstrap: 2.7.2  
• React-redux: 8.0.5  
• Redux-devtools-extension: 2.13.9  
• Redux-thunk: 2.4.2  
• React router dom: 6.8.2  
• Axios: 0.27.2    

### Запуск

```javascript
npm start
```
Docker-Compose:
```docker
docker compose -f docker-compose.yaml up -d
```
Docker:
```
docker build -t вашеимяобраза .
docker run -d --name вашеимяконтейнера -p 3000:3000 вашеимяобраза
```
