import React, { useEffect, useState } from "react";
import Chai from "./Chai";
import Counter from "./Counter";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator";
import { InputBox } from "./components/CurrencyConverter";
import useCurrencyInfo from "./components/Hooks/useCurrencyInfo";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { ThemeProvider } from "./components/Context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import MainCard from "./components/MainCard";
import { TodoContextProvider } from "./components/Context/TodoContext";

const App = () => {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = ()  => {
    setThemeMode("dark")
  }
  const lightTheme = ()  => {
    setThemeMode("light")
  }
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.table(options)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light' , "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  const [todos, setTodos] = useState([])

 
  const addTodo = (todo) => {
    setTodos((prev) => [ {id : Date.now() , ...todo}, ...prev])
  }
  const updateTodo =  (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id) ? todo: prevTodo)
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , complete : !prevTodo.complete} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
        setTodos(todos)
    } 
  }, [])
  

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <>
      <div>
        <Chai />
        <h1 className="text-3xl font-bold underline">sameer sattar</h1>
        <Counter />
      </div>
      <div>
        <Card username={"sameer"} />
        <Card username={"kashif"} btnText={"click me"} />
      </div>
      <div>
        <BgChanger />
      </div>
      <div>
        <RandomPasswordGenerator />
      </div>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
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
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h1>Welcome to Our Context Api Testing App</h1>
        <Login />
        <Profile />
      </div>
      <div>
        <ThemeProvider value={{lightTheme  , darkTheme , themeMode}}>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
              <ThemeBtn/>
              <div className="w-full max-w-sm mx-auto">
                <MainCard/>
              </div>
            </div>
          </div>
        </ThemeProvider>
        <TodoContextProvider value={{ todos , addTodo , updateTodo , deleteTodo , toggleComplete }}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoContextProvider>
      </div>
    </>
  );
};

export default App;
