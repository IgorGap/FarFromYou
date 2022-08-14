  # FarFromYou (командный проект)
<h2>
FarFromYou - это музыкальный проект для совместного прослушивания музыки компанией друзей с использованием socket.io
</h2>
<hr>
<h3>
Представляем несколько принскринов нашего приложения:
</h3>
<h4>
Для начала пользователю необходимо зарегестрироваться и только после этого он может зайти на главную страницу сайта
<h4\>
<img width="1440" alt="mainPage" src="./readme-assest/111e.PNG">
Вся информация о пользователе хранится в базе данных, пороль зашифрован. Почта пользователя должна быть уникальной
<p>
<img width="1440" alt="mainPage" src="./readme-assest/1e.PNG">
<p>

Далее пользователю доступно две кнопки - Создать комнату и Присоединиться к уже существующей. Мы создадим довую комнату и пройдем в нее
<img width="1440" alt="mainPage" src="./readme-assest/2e.PNG">
<p>

Пользователь, создавший комнату, выполняет роль сервера, а присоединившиеся - становятся клиентами, которым по сокетам передается таймкод играющего трека.
Треки добавляются по кнопке "Add file", добавлять могут все пользователи.
<img width="1440" alt="mainPage" src="./readme-assest/3e.PNG">
<p>

Создатель комнаты и ее гость может добавить любой трек в плеер нажав на кнопку ADD FILE, далее появляется модальное окно в которое можно добавить треки. Гость не может переключать дорожки, эти права доступны тоько создателю комнаты. В нашем приложении есть возможнось общаться и отправлять своим друзьям сообщения, а они ответят вам
<img width="1440" alt="mainPage" src="./readme-assest/4e.PNG">
<p>


