import React, { useState } from "react";
import "./Accordion.css";
import data from "./data";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let CopyMultiple = [...multiple]

    const findIndexOfCurrentId = CopyMultiple.indexOf(id)
    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) {
        CopyMultiple.push(id)
    } else {
        CopyMultiple.splice(findIndexOfCurrentId,1)
    }

    setMultiple(CopyMultiple)
  };
  console.log(selected , multiple)

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              return (
                <div className="item">
                  <div
                    className="title"
                    onClick={ enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
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
