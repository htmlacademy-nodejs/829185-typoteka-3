'use strict';

const validArticles = [
  {
    "title": `Нашёл его по ip`,
    "announce": `Он написал больше 30 хитов Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Достичь успеха помогут ежедневные повторения`,
    "fullText": `В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Вы можете достичь всего. Стоит только немного постараться и запастись книгами Программировать не настолько сложно, как об этом говорят Собрать камни бесконечности легко, если вы прирожденный герой Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Мы пришли в этот мир, чтобы наслаждаться нихренанеделанием. Не слушайте никого, кто будет уверять, что наше предназначение - в другом. Ёлки — это не просто красивое дерево. Это прочная древесина Это один из лучших рок-музыкантов Из под его пера вышло 8 платиновых альбомов Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году Простые ежедневные упражнения помогут достичь успеха Достичь успеха помогут ежедневные повторения Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Золотое сечение — соотношение двух величин, гармоническая пропорция Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Он написал больше 30 хитов Как начать действовать? Для начала просто соберитесь`,
    "categories": [
      `Деревья`
    ],
    "comments": [
      {
        "name": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-) Совсем немного... Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Это где ж такие красоты? Планируете записать видосик на эту тему? Согласен с автором! Мне кажется или я уже читал это где-то?`
      }
    ]
  },
  {
    "title": `Лучшие рок-музыканты 20 века`,
    "announce": `Простые ежедневные упражнения помогут достичь успеха Я собираюсь судиться с производителем Pall Mall: мне 83, я курю Pall Mall с двенадцати лет, и эти лживые негодяи давно обещают меня убить, о чем сообщают прямо на упаковке. Но я жив. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    "fullText": `Собрать камни бесконечности легко, если вы прирожденный герой Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Это один из лучших рок-музыкантов Как начать действовать? Для начала просто соберитесь Из под его пера вышло 8 платиновых альбомов Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Золотое сечение — соотношение двух величин, гармоническая пропорция Первая большая ёлка была установлена только в 1938 году Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Простые ежедневные упражнения помогут достичь успеха Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения Я собираюсь судиться с производителем Pall Mall: мне 83, я курю Pall Mall с двенадцати лет, и эти лживые негодяи давно обещают меня убить, о чем сообщают прямо на упаковке. Но я жив. Ёлки — это не просто красивое дерево. Это прочная древесина Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Вы можете достичь всего. Стоит только немного постараться и запастись книгами В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Он написал больше 30 хитов Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Программировать не настолько сложно, как об этом говорят Мы пришли в этот мир, чтобы наслаждаться нихренанеделанием. Не слушайте никого, кто будет уверять, что наше предназначение - в другом. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете`,
    "categories": [
      `Программирование`
    ],
    "comments": [
      {
        "name": `Согласен с автором! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-) Плюсую, но слишком много буквы! Планируете записать видосик на эту тему? Мне кажется или я уже читал это где-то? Это где ж такие красоты? Совсем немного...`
      },
      {
        "name": `Это где ж такие красоты? Мне кажется или я уже читал это где-то? Планируете записать видосик на эту тему? Согласен с автором! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы! Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-)`
      },
      {
        "name": `Плюсую, но слишком много буквы! Хочу такую же футболку :-) Совсем немного... Это где ж такие красоты? Планируете записать видосик на эту тему? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "name": `Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Это где ж такие красоты? Планируете записать видосик на эту тему? Согласен с автором! Плюсую, но слишком много буквы! Совсем немного... Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "name": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Планируете записать видосик на эту тему? Мне кажется или я уже читал это где-то? Согласен с автором! Плюсую, но слишком много буквы! Совсем немного... Это где ж такие красоты? Хочу такую же футболку :-)`
      }
    ]
  },
  {
    "title": `Ёлки. История деревьев`,
    "announce": `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Программировать не настолько сложно, как об этом говорят Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ`,
    "fullText": `Первая большая ёлка была установлена только в 1938 году Достичь успеха помогут ежедневные повторения Вы можете достичь всего. Стоит только немного постараться и запастись книгами Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Простые ежедневные упражнения помогут достичь успеха Из под его пера вышло 8 платиновых альбомов Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Он написал больше 30 хитов Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ Я собираюсь судиться с производителем Pall Mall: мне 83, я курю Pall Mall с двенадцати лет, и эти лживые негодяи давно обещают меня убить, о чем сообщают прямо на упаковке. Но я жив. Это один из лучших рок-музыкантов В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Собрать камни бесконечности легко, если вы прирожденный герой Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Как начать действовать? Для начала просто соберитесь Программировать не настолько сложно, как об этом говорят Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Ёлки — это не просто красивое дерево. Это прочная древесина Золотое сечение — соотношение двух величин, гармоническая пропорция Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать`,
    "categories": [
      `Деревья`
    ],
    "comments": [
      {
        "name": `Планируете записать видосик на эту тему? Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы! Хочу такую же футболку :-) Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Согласен с автором! Мне кажется или я уже читал это где-то?`
      },
      {
        "name": `Совсем немного... Согласен с автором! Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Это где ж такие красоты? Планируете записать видосик на эту тему? Хочу такую же футболку :-) Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы!`
      },
      {
        "name": `Согласен с автором! Плюсую, но слишком много буквы! Планируете записать видосик на эту тему? Мне кажется или я уже читал это где-то? Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-)`
      }
    ]
  },
  {
    "title": `Обзор новейшего смартфона`,
    "announce": `Золотое сечение — соотношение двух величин, гармоническая пропорция Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ Достичь успеха помогут ежедневные повторения`,
    "fullText": `Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Я собираюсь судиться с производителем Pall Mall: мне 83, я курю Pall Mall с двенадцати лет, и эти лживые негодяи давно обещают меня убить, о чем сообщают прямо на упаковке. Но я жив. Программировать не настолько сложно, как об этом говорят В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Вы можете достичь всего. Стоит только немного постараться и запастись книгами Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Достичь успеха помогут ежедневные повторения Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Собрать камни бесконечности легко, если вы прирожденный герой Золотое сечение — соотношение двух величин, гармоническая пропорция Из под его пера вышло 8 платиновых альбомов Он написал больше 30 хитов Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Это один из лучших рок-музыкантов Как начать действовать? Для начала просто соберитесь Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Ёлки — это не просто красивое дерево. Это прочная древесина Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Первая большая ёлка была установлена только в 1938 году Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Мы пришли в этот мир, чтобы наслаждаться нихренанеделанием. Не слушайте никого, кто будет уверять, что наше предназначение - в другом. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ`,
    "categories": [
      `Кино`
    ],
    "comments": [
      {
        "name": `Согласен с автором! Совсем немного... Хочу такую же футболку :-) Мне кажется или я уже читал это где-то? Это где ж такие красоты? Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Планируете записать видосик на эту тему?`
      },
      {
        "name": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы! Планируете записать видосик на эту тему? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного... Согласен с автором! Мне кажется или я уже читал это где-то? Это где ж такие красоты?`
      },
      {
        "name": `Мне кажется или я уже читал это где-то? Планируете записать видосик на эту тему? Совсем немного... Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Это где ж такие красоты? Хочу такую же футболку :-)`
      },
      {
        "name": `Планируете записать видосик на эту тему? Хочу такую же футболку :-) Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного... Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Согласен с автором!`
      }
    ]
  }
];

const mockCategories = [
  {
    id: 1,
    name: `Деревья`
  },
  {
    id: 2,
    name: `За жизнь`,
  },
  {
    id: 3,
    name: `Без рамки`,
  },
  {
    id: 4,
    name: `Разное`,
  },
  {
    id: 5,
    name: `IT`,
  },
  {
    id: 6,
    name: `Музыка`,
  },
  {
    id: 7,
    name: `Кино`,
  },
  {
    id: 8,
    name: `Программирование`,
  },
  {
    id: 9,
    name: `Железо`
  },
  {
    id: 10,
    name: `Чёрная магия`,
  },
  {
    id: 11,
    name: `Курсы пикапа`,
  },
  {
    id: 12,
    name: `Пацанские цитаты`
  },
  {
    id: 13,
    name: `Фешн из май профешн`
  },
  {
    id: 14,
    name: `Изобритения миллениалов`
  },
  {
    id: 15,
    name: `Вёрстка на таблица`
  },
];

const validArticle = {
  "title": `Самый лучший музыкальный альбом этого года`,
  "announce": `Он написал больше 30 хитов Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Достичь успеха помогут ежедневные повторения`,
  "fullText": `В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Вы можете достичь всего. Стоит только немного постараться и запастись книгами Программировать не настолько сложно, как об этом говорят Собрать камни бесконечности легко, если вы прирожденный герой Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Мы пришли в этот мир, чтобы наслаждаться нихренанеделанием. Не слушайте никого, кто будет уверять, что наше предназначение - в другом. Ёлки — это не просто красивое дерево. Это прочная древесина Это один из лучших рок-музыкантов Из под его пера вышло 8 платиновых альбомов Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году Простые ежедневные упражнения помогут достичь успеха Достичь успеха помогут ежедневные повторения Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Золотое сечение — соотношение двух величин, гармоническая пропорция Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Он написал больше 30 хитов Как начать действовать? Для начала просто соберитесь`,
  "categories": [
    mockCategories[0].id
  ]
};

const validArticleAttr = {
  title: `Новый продающий заголовок`
};

const invalidArticleAttr = {
  anounce: ``
};

const validComment = {
  name: `Очень смешной комментарий`
};

const invalidComment = {
  test: `Менее смешной комментарий`
};

const emptyComment = {
  name: ``
};

const invalidArticle = {
  "title": ``,
  "announce": `Он написал больше 30 хитов Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Достичь успеха помогут ежедневные повторения`,
  "fullText": `В моем понимании святой - это такой человек, который и в непорядочном обществе остается порядочным человеком Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много Привет мой милый бложик, я тут взял кредит на свадьбу, но невеста сбежала с сотрудником банка и теперь я должен много денег и не хочу отдавать Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете Вы можете достичь всего. Стоит только немного постараться и запастись книгами Программировать не настолько сложно, как об этом говорят Собрать камни бесконечности легко, если вы прирожденный герой Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами Мы пришли в этот мир, чтобы наслаждаться нихренанеделанием. Не слушайте никого, кто будет уверять, что наше предназначение - в другом. Ёлки — это не просто красивое дерево. Это прочная древесина Это один из лучших рок-музыкантов Из под его пера вышло 8 платиновых альбомов Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году Простые ежедневные упражнения помогут достичь успеха Достичь успеха помогут ежедневные повторения Земляне всегда вели себя так, как будто с неба на них глядит громадный глаз и как будто громадный глаз жаждет зрелищ Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем Золотое сечение — соотношение двух величин, гармоническая пропорция Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле Всем нам не мешало бы начать все сначала — предпочтительно с детского сада. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры Он написал больше 30 хитов Как начать действовать? Для начала просто соберитесь`,
  "category": [],
  "comments": []
};

module.exports = {
  validArticles,
  validArticle,
  validArticleAttr,
  invalidArticle,
  invalidArticleAttr,
  validComment,
  invalidComment,
  emptyComment,
  mockCategories
};
