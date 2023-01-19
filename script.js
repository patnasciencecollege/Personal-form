console.log("Welcome to Tic Tac MyTicTacToe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
 let gameOver=false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const chcekWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5], [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText)&&(boxText[e[0]].innerText!=="")
        ){
            document.querySelector('.info').innerText=boxText[e[0]].innerText+" won!"
            gameOver=true 
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"

        }
      })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            chcekWin();
            if(!gameOver){
               document.getElementsByClassName("info")[0].innerText = "Turn for" + turn; 
            }
            
        }
    })
})

// add onclick lisener to reset
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameOver=false
    document.querySelector(".line").style.width="0vw";
    document.getElementByClassName("info")[0].innerText="Turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})



