import React, { useEffect, useState } from "react";

const RandomColors = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const GenrateRandomHexColor = () => {
    let Hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    let HexColor = "#";

    for (let i = 0; i < 6; i++) {
      HexColor += Hex[generateRandomNumber(Hex.length)];
    }

    console.log(HexColor);
    setColor(HexColor);
  };

  const GenrateRandomRgbColor = () => {
    let r = generateRandomNumber(256);
    let g = generateRandomNumber(256);
    let b = generateRandomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      GenrateRandomRgbColor();
    } else {
      GenrateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          background: color,
          width: "100vw",
          height: "100vh",
        }}
      >
        <button onClick={() => settypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => settypeOfColor("rgb")}>Create rgb Color</button>
        <button
          onClick={
            typeOfColor == "hex" ? GenrateRandomHexColor : GenrateRandomRgbColor
          }
        >
          Genrate Random Colors
        </button>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div className="" style={{ color: "white" }}>
            {typeOfColor} color
          </div>
          <div className="" style={{ color: "white" }}>
            {color}
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomColors;
