import React from "react";
import Chai from "./Chai";
import Counter from "./Counter";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator";

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
      <div>
        <Card username={"sameer"}/>
        <Card username={"kashif"} btnText={"click me"}  />
      </div>
      <div>
        <BgChanger/>
      </div>
      <div>
        <RandomPasswordGenerator/>
      </div>
        </>
  );
};

export default App;
