// console.log("welcome to my tic tac toe Game");

const music = new Audio("Music/music.mp3");
const gameOver = new Audio("Music/gameover.mp3");
const audioTurn = new Audio("Music/ting.mp3") ;
let turn = 'X' ;
let isgameover = false ;
let count = 0 ; 

// Function to change the turn 

const changeTurn = () =>{
    return turn === 'X' ? '0' : 'X' ;
}

// Function to check for a win 
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ]

    wins.forEach(e =>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== '' && !isgameover){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won" ;
            isgameover = true ;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            count = 0 ;
            // document.querySelector('img').style.width = "200px" // this will also work 
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}


// Game logic 

// music.play();
let boxes = document.getElementsByClassName("box") ;

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext') ;
    element.addEventListener('click' , () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            turn = changeTurn() ;
            audioTurn.play() ;
            checkWin() ;
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
                count++ ;
            }
            // console.log(count)
            if(count === 9){
                alert("game draw") ;
                count = 0 ;
            }
        }

    });
})  

//Add onclick listner to reset button 
reset.addEventListener('click' , () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = '' ;
    });
    turn = 'X' ;
    document.getElementsByClassName("info")[0].innerText = "Turn for X";
    isgameover = false ;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    count = 0 ;
    document.querySelector('.line').style.width = "0";

});

// let board = document.getElementsByClassName('boxtext');

// Array.from(board).forEach(element =>{
//     count++ ;
//     if(element.innerText !== '') count++ ;
//     let isWin = document.getElementsByClassName("info")[0] ;
//     console.log('outside condition')
//     console.log('value of count',count)
//     if(count === 9 && isWin !== "X Won" && isWin !== "0 Won"){
//         console.log('inside condition')
//         alert("game draw") ;
//     }
// });

