#START
____
code-compiler: npm start
____
server: node index.js

<h1 align="center">MINSWEEPER GAME</h1>

---

Игра "Сапер", выполненная на react.js

# [Демоверсия](https://bogdantsevivan.github.io/minesweeper/)

# Установка

`gh repo clone BogdantsevIvan/minesweeper`

## Использование

В проекте используется 5 состояний:

```js
//App.js

const [onMouseClick, setOnMouseClick] = useState(false);//Отслеживает первый клик в текущей игре
  const [onMousePush, setOnMousePush] = useState(false);//Отслеживает удержание кнопки мышки
  const [isWin, setIsWin] = useState(false);
  const [isLoss, setIsLoss] = useState(false);
  const [restart, setRestart] = useState(false);

  ```
  
  
  # Основные

| Name       | Type   | Output                             | 
| ---------- | ------ | ---------------------------------- | 
| `dateEdit` | double | [Timestamp(begin), Timestamp(end)] |
| `dateEdit` | single | Timestamp                          |