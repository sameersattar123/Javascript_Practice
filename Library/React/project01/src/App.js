import React, { useState } from "react";
import Chai from "./Chai";
import Counter from "./Counter";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator";
import { InputBox } from "./components/CurrencyConverter";
import useCurrencyInfo from "./components/Hooks/useCurrencyInfo";
import Profile from "./components/Profile";
import Login from "./components/Login";

const App = () => {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const  currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo);
    // console.table(options)

    const swap = () => {
       setFrom(to)
       setTo(from);
       setConvertedAmount(amount);
       setAmount(convertedAmount)
    }

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }


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
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}    
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div>
          <h1>Welcome to Our Context Api Testing App</h1>
                        <Login/>
                        <Profile/>
        </div>
        </>
  );
};

export default App;
