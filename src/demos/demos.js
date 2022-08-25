import { useState } from "react";

function Demo() {
  const [isclick, setisclick] = useState(false);

  function OnClick() {
    console.log("Button clicked");
    setisclick(!isclick);
  }

  return (
    <>
      <button onClick={OnClick}>CLick me </button>

      {isclick && <div className="as">Hello</div>}
    </>
  );
}
export default Demo;
