export default function StyledTable({ currentDate, vaccineDates }) {
  console.log(vaccineDates, currentDate);

  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "#737373", color: "white" }}>
          <th>Name</th>
          <th>Vaccination Date</th>
          <th>Vaccination Status</th>
        </tr>
      </thead>
      <tbody>
        {vaccineDates.length > 0 &&
          vaccineDates.map((obj) => {
            let bool =
              new Date(obj.vaccination_date).getTime() <=
              new Date(currentDate.current_date).getTime();
              console.log(bool)

            return (
              <tr className={bool ? "vaccinated": "pending"}>
                <td>{obj.person_name}</td>
                <td>{obj.vaccination_date}</td>
                <td>{bool ? "Vaccinated": "Pending"}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
