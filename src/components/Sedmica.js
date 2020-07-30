import React from "react";
import "../App.css";

const Sedmica = ({ combPass }) => {
  return (
    <button onClick={() => combPass(sedmica())} className="buttons">
      Loto7
    </button>
  );
};

////////////////////RANDOM NUMBER////////////////////////////////////////
const randNum = (top) => Math.floor(Math.random() * top + 1);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//////////////////SEDMICA////////////////////////////////////////////

const sedmica = () => {
  let arr, sortedArr, x, spacedArr;

  // uzima brojeve iz funkcije get random dok ne napuni broj elemenata, ako nadje isti preskace
  arr = [];
  while (arr.length < 7) {
    x = randNum(35);
    if (arr.includes(x)) {
      continue;
    } else {
      arr.push(x);
    }
  }
  // sortira brojeve
  sortedArr = arr.sort((a, b) => a - b);
  spacedArr = sortedArr.join(" | ");
  return spacedArr;
};
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

export default Sedmica;
