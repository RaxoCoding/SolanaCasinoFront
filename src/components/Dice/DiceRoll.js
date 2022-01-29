import React from "react";
import './css/DiceRoll.css';
import DiceBlack1 from "./img/black1.png";
import DiceBlack2 from "./img/black2.png";
import DiceBlack3 from "./img/black3.png";
import DiceBlack4 from "./img/black4.png";
import DiceBlack5 from "./img/black5.png";

const DiceRoll = (props) => {

    const setDice = () => {
        var elDiceOne = document.getElementById('dice1');
        var elDiceTwo = document.getElementById('dice2');
        var elComeOut = document.getElementById('roll');

        var diceOne = props.rolluser1;
        var diceTwo = props.rolluser2;
        
        console.log(diceOne + ' ' + diceTwo);

        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            elDiceTwo.classList.remove('show-' + i);
        }

        elDiceOne.classList.add('show-' + diceOne);

        elDiceTwo.classList.add('show-' + diceTwo);
    }

    const rollDice = () => {
        var elDiceOne = document.getElementById('dice1');
        var elDiceTwo = document.getElementById('dice2');
        var elComeOut = document.getElementById('roll');

        var diceOne = props.rolluser1;
        var diceTwo = props.rolluser2;
        
        console.log(diceOne + ' ' + diceTwo);

        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
            }
        }

        for (var k = 1; k <= 6; k++) {
            elDiceTwo.classList.remove('show-' + k);
            if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
            }
        } 
    }   

    return (
        <>
         <div class="game">
    <div class="container">
      <div id='dice1' class="dice dice-one">
        <div id="dice-one-side-one" class='side one'>
          <img class="diceImg" src={DiceBlack1}></img>
        </div>
        <div id="dice-one-side-two" class='side two'>
          <img class="diceImg" src={DiceBlack2}></img>
        </div>
        <div id="dice-one-side-three" class='side three'>
          <img class="diceImg" src={DiceBlack3}></img>
        </div>
        <div id="dice-one-side-four" class='side four'>
          <img class="diceImg" src={DiceBlack4}></img>
        </div>
        <div id="dice-one-side-five" class='side five'>
          <img class="diceImg" src={DiceBlack5}></img>
        </div>
        <div id="dice-one-side-six" class='side six'>
          <img class="diceImg" src={DiceBlack5}></img>
        </div>
      </div>
   </div>
    <div class="container">
      <div id='dice2' class="dice dice-two">
        <div id="dice-two-side-one" class='side one'>
            <img class="diceImg" src={DiceBlack1}></img>
        </div>
        <div id="dice-two-side-two" class='side two'>
            <img class="diceImg" src={DiceBlack2}></img>
        </div>
        <div id="dice-two-side-three" class='side three'>
            <img class="diceImg" src={DiceBlack3}></img>
        </div>
        <div id="dice-two-side-four" class='side four'>
            <img class="diceImg" src={DiceBlack4}></img>
        </div>
        <div id="dice-two-side-five" class='side five'>
            <img class="diceImg" src={DiceBlack5}></img>
        </div>
        <div id="dice-two-side-six" class='side six'>
        <img class="diceImg" src={DiceBlack5}></img>
        </div>
      </div> 
   </div>
  </div>
  {props.state === 'started' ? setTimeout(() => {rollDice();}, 5000) : props.state === 'finished' ? setDice() : null}
        </>
    );
}

export default DiceRoll;
