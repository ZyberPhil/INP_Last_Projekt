    document.addEventListener('DOMContentLoaded', () => {
      const board = document.querySelector('.board');
      const cells = Array.from({ length: 9 });
      let player1Points = 0;
      let player2Points = 0;

      cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cell);
      });

      let currentPlayer = 'X';
      let gameEnded = false;

      function handleCellClick(index) {
        if (gameEnded || cells[index]) return;

        cells[index] = currentPlayer;
        render();

        if (checkWin()) {
          if (currentPlayer === 'X') {
            player1Points++;
            document.getElementById('player1Points').textContent = player1Points;
          } else {
            player2Points++;
            document.getElementById('player2Points').textContent = player2Points;
          }
          alert(`${currentPlayer} wins!`);
          gameEnded = true;
          return;
        }

        if (cells.every(cell => cell)) {
          alert("It's a draw!");
          gameEnded = true;
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }

      function checkWin() {
        const winningCombos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];

        return winningCombos.some(combo => {
          const [a, b, c] = combo;
          return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
        });
      }

      function render() {
        cells.forEach((cell, index) => {
          const cellElement = board.querySelector(`[data-index="${index}"]`);
          cellElement.textContent = cell || '';
        });
      }

      // Next game button
      const nextGameButton = document.getElementById('nextGameButton');
      nextGameButton.addEventListener('click', () => {
        resetGame();
      });

      function resetGame() {
        cells.fill(null);
        render();
        currentPlayer = 'X';
        gameEnded = false;
      }

      // Reset points button
      const resetPointsButton = document.getElementById('resetPointsButton');
      resetPointsButton.addEventListener('click', () => {
        resetPoints();
      });

      function resetPoints() {
        player1Points = 0;
        player2Points = 0;
        document.getElementById('player1Points').textContent = player1Points;
        document.getElementById('player2Points').textContent = player2Points;
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
        const toggleNavButton = document.getElementById('toggleNav');
        const nav = document.getElementById('nav');

        toggleNavButton.addEventListener('click', () => {
          nav.classList.toggle('closed');
        });
      });
