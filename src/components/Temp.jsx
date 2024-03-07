import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState(0);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.renderKelvin({ value:  (273.15 + value) })}
      {props.renderFahrenheit({ value: (value * 9) / 5 + 32 })}
    </>
  );
}

export default function Temperature() {
  return (
    <Input
      renderKelvin={({ value }) => <div className="temp">{value}K</div>}  //renderKelvin is a function which outputs <div></div>
      //and this function is the renderprop here which is then passed to the input function above
      //so normally we dont pass functions as props thats y its called render props.
      renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
    />
  );
}
