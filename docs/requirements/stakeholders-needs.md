# ProjectsLab. Запити зацікавлених осіб

## Вступ

У цьому документі описуються запити зацікавленої особи, в якості якої виступає доцент Болдак А. О., по відношенню до розробляємої в рамках лаборатних робіт - системи управління проектами.

### Мета 

Метою документа є визначення основних вимог до функціональності, продуктивності і експлуатаційної придатності, а також визначення бізнес-правил і технологічних обмежень, що пред'являються до предмету розробки.

### Контекст

Цей документ пов'язаний з системою управління проектами, описує її особливості, функціонал та інші властивості та відповідає запитам зацікавлених осіб і аналізу предметної області.


### Основні визначення та скорочення

* СУП - Система Управіння Проектами

### Посилання

- [Джерело 1 (oridu.odessa)](http://www.oridu.odessa.ua/7/7/metoduchni-rek/t/02.pdf)
- [Джерело 2 (ela.kpi)](https://ela.kpi.ua/bitstream/123456789/19481/1/DMM_UP_2017.pdf)
- [Джерело 3 (gihub.com)](https://github.com/ip-85/robin/blob/master/docs/stakeholders.md#4)
- [Джерело 4 (rayradavn.gov.ua)](http://rayradavn.gov.ua/images/metodychna/zayavka.pdf)

## Короткий зміст

В подальшій частині документа описуються ділові процеси, вимоги замовника, виключні та основні сценарії розробки продукту.

## Характеристика ділових процесів

***ID:*** ***IV-92 (1)***<br>

***НАЗВА:***  Cтворення проекту.<br>

***УЧАСНИКИ:***  Team Lead, керуючий<br>

***ПЕРЕДУМОВИ:***  Вимоги замовника<br>

***РЕЗУЛЬТАТ:***  Проект, готовий до реалізації<br>

***ВИКЛЮЧНІ СИТУАЦІЇ:***<br>

- EX.002.001 Недостатньо/Некоректні вимоги замовника<br>
- EX.002.002 Недостатня кількість розробників<br>
- EX.002.003 Можливість реалізації<br>

***ОСНОВНИЙ СЦЕНАРІЙ:***

1. Team lead та керуючий реєструються на платформі.
2. Інтегрує проект з репозиторію github-а.
3. Задає назву, опис проекту.
4. Запрошує команду, призначає ролі, зони відповідальності.(Можлива EX.002.002)
5. Трансформує вимоги замовника в завдання, призначає на них людей.(Можливі EX.002.001 EX.002.002 EX.002.003)
6. Створює колонки для відстеження прогресу.(Можлива EX.002.003)
7. Налаштовує Instant Messaging.
8. Задає опис кінцевого продукту.

***ID:*** ***IV-92 (2)***<br>

***НАЗВА:***<br>
Управління проектами.<br>

***УЧАСНИКИ:***<br>
Team Lead, куруючий, команда<br>

***ПЕРЕДУМОВИ:***<br>
Потреба в зручному управлінні кількома активними проектами<br>

***РЕЗУЛЬТАТ:***<br>
Зручне та швидке редагування проекту<br>

***ВИКЛЮЧНІ СИТУАЦІЇ:***<br>
- EX.003.001 Недостача інформації від замовника
- EX.003.002 Проект не активний
- EX.003.003 Кардинальна зміна вимог замовника
- EX.003.004 Неможливість реалізаціїї
- EX.003.005 Недостатня кількість розробників
- EX.003.006 Зрив дедлайну
- EX.003.007 Непередбачувані обставини

***ОСНОВНИЙ СЦЕНАРІЙ:***<br>
Team Lead/керуючий можуть швидко редагувати проект, його мету, потреби, задачі, перенаправити розробників, деактивувати проект.
Під час редагування можливі виключні ситуції з кодами 003.*<br>

## Короткий огляд продукту

ProjectsLab - це сервіс, який допоможе Вам у розробці програмного забезпечення. Сервіс для слідкування та управління проектами, командами, задачами. Користувачі нашої системи зможуть оперувати задачами та проектами у зручному "user-friendly" інтерфейсі, також ми надаємо змогу усім користувачам нашого сервісу спілкуватися між собою у зручному інтерфейсі. Користувачі зможуть створювати команди та зберігати їх для майбутніх проектів.


## Функціональність

Кожен режим реалізований через відповідний йому інтерфейс. Такий підхід сприяє ієрахічній систематизації взаємодії між різними ролями (видами) учасників створення проекту та взаємодії з ними (тестуваннями). Кожна з представлених моделей відводить певний набір функцій для впорядкування робочого процесу, сприяє автоматизації поділу на ці самі ролі та відведенню певній особі відповідної ланки взаємодії в застосунку.

### Інтерфейс лідера

Функціональний простір облікового запису лідера має відповідати повному керуванню проектом.

Надаються можливості:
- Управління проектом
- Управління заваданнями
- Управління командою
- Управління артефактами, що допомагають розв'язати завдання
- Створення завдань для команди;
- Встановлення та зміна дедлайнів завдань;
- Встановлення та зміна приорітетності виконання завдань;
- Встановлення порядку виконання завдань;

### Інтерфейс розробника

Можливості облікового запису розробника забеспечують керування своїми заданнями.

Доступні функції:
- Встановлення дедлайнів своїх завдань;
- Зміна статусу завданнь (наприклад, вирішено);
- Розбиття завдання на декілька підзавдань;
- Уточнення вимог до завдання

