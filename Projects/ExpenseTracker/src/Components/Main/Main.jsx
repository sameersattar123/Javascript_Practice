import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../Summary/Summary";
import ExpenseView from "../ExpenseView/ExpenseView";
import { GlobalContext } from "../../Context";

const Main = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
    allTransaction,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransaction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransaction]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        onClose={onClose}
        isOpen={isOpen}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          type={"income"}
          data={allTransaction.filter(item => item.type === "income")}
        />
        <ExpenseView
          type={"expense"}
          data={allTransaction.filter(item => item.type === "expense")}
        />
      </Flex>
    </Flex>
  );
};

export default Main;
