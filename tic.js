let i = 1;
        let grid = document.getElementsByClassName('grid-item');
        let child = document.getElementsByClassName("child")[0];
        
        function append(index) {
            if (grid[index].innerText === "") {
                if (i % 2 == 0) {
                    grid[index].innerText = "X";
                    child.innerText = "Player 1's move";
                } else {
                    grid[index].innerText = "O";
                    child.innerText = "Player 2's move";
                }
                i++;
            } else {
                alert("This spot is already taken!");
            }
            check();
        }

        function check() {
            if ((grid[0].innerText === "X" && grid[1].innerText === "X" && grid[2].innerText === "X") ||
                (grid[3].innerText === "X" && grid[4].innerText === "X" && grid[5].innerText === "X") ||
                (grid[6].innerText === "X" && grid[7].innerText === "X" && grid[8].innerText === "X") ||
                (grid[0].innerText === "X" && grid[3].innerText === "X" && grid[6].innerText === "X") ||
                (grid[1].innerText === "X" && grid[4].innerText === "X" && grid[7].innerText === "X") ||
                (grid[2].innerText === "X" && grid[5].innerText === "X" && grid[8].innerText === "X") ||
                (grid[0].innerText === "X" && grid[4].innerText === "X" && grid[8].innerText === "X") ||
                (grid[2].innerText === "X" && grid[4].innerText === "X" && grid[6].innerText === "X")) {
                setTimeout(() => { alert("Player 1 wins!"); resetGame(); }, 200);


            } else if (
                (grid[0].innerText === "O" && grid[1].innerText === "O" && grid[2].innerText === "O") ||
                (grid[3].innerText === "O" && grid[4].innerText === "O" && grid[5].innerText === "O") ||
                (grid[6].innerText === "O" && grid[7].innerText === "O" && grid[8].innerText === "O") ||
                (grid[0].innerText === "O" && grid[3].innerText === "O" && grid[6].innerText === "O") ||
                (grid[1].innerText === "O" && grid[4].innerText === "O" && grid[7].innerText === "O") ||
                (grid[2].innerText === "O" && grid[5].innerText === "O" && grid[8].innerText === "O") ||
                (grid[0].innerText === "O" && grid[4].innerText === "O" && grid[8].innerText === "O") ||
                (grid[2].innerText === "O" && grid[4].innerText === "O" && grid[6].innerText === "O")) {
                setTimeout(() => { alert("Player 2 wins!"); resetGame(); }, 200);
            } else if (i > 9) {
                setTimeout(() => { alert("It's a tie!"); resetGame(); }, 200);
            }
        }

        function resetGame() {
            for (let cell of grid) {
                cell.innerText = "";
            }
            i = 1;
            child.innerText = "Player 1's move";
        }