# RSS Игра в пятнашки

| Deadline         |   Folder name  | Branch name |
| ---------------- | -------------- | ----------- |
|                  |  gem-puzzle    | gem-puzzle  |

## Задание
Вам нужно реализовать классическую игру [пятнашки](https://ru.wikipedia.org/wiki/Игра_в_15)

### Правила игры
`Игра представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений`

### Приблизительный внешний вид
[Demo](https://xmelsky-gem-puzzle.netlify.app/)

### Basic scope +30 
- [ ] вёрстка, дизайн, UI: `+10`
- [ ] состояние игрового поля генерируется случайным образом: `+10`
- [ ] при клике по фишке, стоящей рядом с пустой клеткой, фишка перемещается на место пустой клетки: `+10`

### Advanced scope +60

- [ ] игру можно начать заново без перезагрузки страницы: `+10`
- [ ] отображается время игры и количество ходов: `+10`
- [ ] фишки можно перетягивать мышкой: `+10`
- [ ] реализовано сохранение состояния игры и сохранение 10 лучших результатов с использованием LocalStorage: `+10`
- [ ] реализован выбор размера поля: `+10`
- [ ] звуковое сопровождение передвижения фишек: `+10`

### Hacker scope +80
- [ ] анимация перемещения пятнашек на поле: `+10`
- [ ] когда игра закончилась, выводится сообщение «Ура! Вы решили головоломку за ##:## и N ходов»: `+10`
- [ ] вместо цифр используются картинки: `+30`
- [ ] автоматическое, анимированное завершение игры: `+30`

### Технические (проверяются ментором):
- [ ] подключен и используется `eslint`, : `+10`
- [ ] подключен и используется `webpack`, : `+10`
- [ ] приложение разбито на отдельные модули, используются фишки `es6` и выше (на усмотрение ментора): `+20`


### Штрафы:
- [ ] Ошибки в консоли, связанные с исполняемым кодом(ошибки типа favicon.ico: Failed to load resource: the server responded with a status of 404 не учитываются): `-15`
- [ ] ошибки `eslint`: `-10`
