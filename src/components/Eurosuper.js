import React from "react";
import "../App.css";

function Eurosuper(props) {
  return (
    <button onClick={() => props.combPass(euroJack())} className="buttons">
      EuroJackpot
    </button>
  );
}

////////////////////RANDOM NUMBER////////////////////////////////////////
const randNum = (top) => Math.floor(Math.random() * top + 1);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//////////////////EUROJACK////////////////////////////////////////////
const euroJack = () => {
  let x, arr, arr1, sortedArr, spacedArr, sortedArr1, spacedArr1;

  arr = [];
  arr1 = [];
  while (arr.length < 5) {
    x = randNum(50);
    if (arr.includes(x)) {
      continue;
    } else {
      arr.push(x);
    }
  }
  sortedArr = arr.sort((a, b) => a - b);
  spacedArr = sortedArr.join(" |  ");

  console.log(spacedArr);

  while (arr1.length < 2) {
    x = randNum(10);
    if (arr1.includes(x)) {
      continue;
    } else {
      arr1.push(x);
    }
  }
  sortedArr1 = arr1.sort((a, b) => a - b);
  spacedArr1 = sortedArr1.join(" |  ");

  return `${spacedArr1}\u00A0\u00A0 ${spacedArr}`;
};
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

export default Eurosuper;
