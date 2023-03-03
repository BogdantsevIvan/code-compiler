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

//App.js

const [onMouseClick, setOnMouseClick] = useState(false);
  const [onMousePush, setOnMousePush] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isLoss, setIsLoss] = useState(false);
  const [restart, setRestart] = useState(false);