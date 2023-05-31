// javascript code goes here
const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
//console.log(btns);
let count = 1;
let player1 = "O", player2 = "X";
let win=false;

const check = (id) => {
    if (btns[id-1].innerHTML !== "" || win===true) {
        return;
    }
    if (count % 2 === 1) {
        btns[id - 1].innerHTML = player1;
        btns[id - 1].style.color="red";
        count++;
    } else {
        btns[id - 1].innerHTML = player2;
        btns[id - 1].style.color="yellow";
        count++;
    }

    if ((btns[0].innerHTML=== player1 && btns[1].innerHTML=== player1 && btns[2].innerHTML === player1) ||
        (btns[0].innerHTML=== player1 && btns[1].innerHTML=== player1 && btns[2].innerHTML === player1) ||
        (btns[0].innerHTML=== player1 && btns[3].innerHTML=== player1 && btns[6].innerHTML === player1) ||
        (btns[0].innerHTML=== player1 && btns[4].innerHTML=== player1 && btns[8].innerHTML === player1) ||
        (btns[2].innerHTML=== player1 && btns[5].innerHTML=== player1 && btns[8].innerHTML === player1) ||
        (btns[2].innerHTML=== player1 && btns[4].innerHTML=== player1 && btns[6].innerHTML === player1) ||
        (btns[6].innerHTML=== player1 && btns[7].innerHTML=== player1 && btns[8].innerHTML === player1) ||
        (btns[1].innerHTML=== player1 && btns[4].innerHTML=== player1 && btns[7].innerHTML == player1) ||
        (btns[3].innerHTML=== player1 && btns[4].innerHTML=== player1 && btns[5].innerHTML === player1)) {
        display.innerHTML = "Congratulations! Player1 wins";
        win =true;
    }
    if ((btns[0].innerHTML===player2 && btns[1].innerHTML===player2 && btns[2].innerHTML === player2) ||
        (btns[0].innerHTML===player2 && btns[1].innerHTML===player2 && btns[2].innerHTML === player2) ||
        (btns[0].innerHTML===player2 && btns[3].innerHTML===player2 && btns[6].innerHTML === player2) ||
        (btns[0].innerHTML===player2 && btns[4].innerHTML===player2 && btns[8].innerHTML === player2) ||
        (btns[2].innerHTML===player2 && btns[5].innerHTML===player2 && btns[8].innerHTML === player2) ||
        (btns[2].innerHTML===player2 && btns[4].innerHTML===player2 && btns[6].innerHTML === player2) ||
        (btns[6].innerHTML===player2 && btns[7].innerHTML===player2 && btns[8].innerHTML === player2) ||
        (btns[1].innerHTML===player2 && btns[4].innerHTML===player2 && btns[7].innerHTML == player2) ||
        (btns[3].innerHTML===player2 && btns[4].innerHTML===player2 && btns[5].innerHTML === player2)) {
        display.innerHTML = "Congratulations! Player2 wins"
        win=true;
    }

    let draw = true;
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerHTML === "") {

            draw = false;
            break;
        }
    }

    //console.log(draw);
    if (draw) {
        
        if (!win) {
            display.innerHTML = "Draw!"
        }
    }
}
