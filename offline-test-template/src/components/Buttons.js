import { useState } from "react";

export default function ({ handleDateClick,currentDate }) {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <>
      <button
        onClick={() => {
          handleDateClick("increment");
        }}
      >
        +
      </button>
      <p> {new Date(currentDate.current_date).toDateString()} </p>
      <button
        onClick={() => {
          handleDateClick("decrement");
        }}
      >
        -
      </button>
    </>
  );
}
