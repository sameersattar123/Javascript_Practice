import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }){
  const [formData, setformData] = useState({
    type: "expense",
    amount: 0,
    descripton : ''
})
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [allTransaction, setAllTransaction] = useState([])
  const [value, setValue] = useState('expense')

  const handleFormSubmit = (currentFormData) => {

    setAllTransaction([...allTransaction , {
      ...currentFormData , id : Date.now()
    }])
  }

  console.log(allTransaction)


  return <GlobalContext.Provider
  value={{
    formData,
    setformData,
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
    allTransaction,
    setAllTransaction,
    value,
    setValue,
    handleFormSubmit
  }}
  >{children}</GlobalContext.Provider>;
};
