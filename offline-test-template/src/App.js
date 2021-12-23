import "./styles.css";
import PieChart from "./components/PieChart";
import StyledTable from "./components/Table";
import Buttons from "./components/Buttons";
import React, { useEffect } from "react";
import { getVaccinationDate, getCurrentDate } from "./api";
import { changeDate,filterDate } from "./utils";

//Actions type
const SET_CURRENT_DATE = "SET_CURRENT_DATE";
const SET_VACCINE_DATES = "SET_VACCINE_DATES";
const SET_VACCINATED_PERSON_INFO = "SET_VACCINATED_PERSON_INFO";

const initState = {
  currentDate: { current_date: "" },
  vaccineDates: [],
  vaccinatedPersonInfo: {},
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DATE: {
      return { ...state, currentDate: payload };
    }

    case SET_VACCINE_DATES: {
      return { ...state, vaccineDates: payload };
    }

    case SET_VACCINATED_PERSON_INFO: {
      return { ...state, vaccinatedPersonInfo: payload };
    }

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const handleDateClick = (label) => {
    const payload = {
      current_date: changeDate(state.currentDate.current_date, label),
    };

    const action = {
      type: SET_CURRENT_DATE,
      payload,
    };

    dispatch(action);
  };

  useEffect(async () => {
    const vaccineDates = await getVaccinationDate();
    const currentDate = await getCurrentDate();

    dispatch({ type: SET_CURRENT_DATE, payload: currentDate });
    dispatch({ type: SET_VACCINE_DATES, payload: vaccineDates });
  }, []);

  let data= [...filterDate(state.currentDate.current_date, state.vaccineDates)]

  return (
    <div className="App">
      <div className="chart">
        <PieChart data={data} />
      </div>

      <div className="buttons">
        <Buttons
          handleDateClick={(label) => handleDateClick(label)}
          currentDate={state.currentDate}
        />
      </div>

      <b style={{ textAlign: "center" }}>

        {data[0]} out of {data[0] + data[1]} persons have been vccinated.
      </b>
      <div className="table" >
        <StyledTable currentDate={state.currentDate} vaccineDates={state.vaccineDates} />
      </div>
    </div>
  );
}
