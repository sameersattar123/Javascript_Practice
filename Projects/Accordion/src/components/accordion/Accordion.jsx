import React, { useState } from "react";
import "./Accordion.css";
import data from "./data";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  console.log(selected)

  return (
    <>
      <div className="wrapper">
        <button>Enable Multi Selection</button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              return (
                <div className="item">
                  <div
                    className="title"
                    onClick={() => handleSingleSelection(dataItem.id)}
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div>No Data Found!</div>
          )}
        </div>
      </div>
    </>
  );
};
