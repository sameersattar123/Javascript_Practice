import React from "react";
import Chai from "./Chai";
import Counter from "./Counter";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div>
        <Chai />
       <h1 className= "text-3xl font-bold underline">
         sameer sattar
        </h1>
        <Counter/>
      </div>
        <Card username={"sameer"}/>
        <Card username={"kashif"} btnText={"click me"}  />
        </>
  );
};

export default App;
