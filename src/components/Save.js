import React from "react";

const Save = (props) => {
  const saveMe = () => {
    console.log(props.passForSave);
    localStorage.setItem(dateTodayKey, props.passForSave);
  };

  return (
    <div>
      <button className="buttons" onClick={saveMe}>
        Save Comb
      </button>
    </div>
  );
};

//////////// Get Date ////////////////////////

let date = (currentDate) => {
  let year, month, day, h, min;
  month = currentDate.getMonth() + 1;
  day = currentDate.getDate();
  h = currentDate.getHours();
  min = currentDate.getMinutes();
  year = currentDate.getFullYear();

  return {
    year: year,
    month: month,
    day: day,
    h: h,
    min: min,
  };
};

let dateToday = date(new Date());

let dateTodayKey = `${dateToday.day}.${dateToday.month}.${dateToday.year}`;

console.log(dateTodayKey);

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

export default Save;
