import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

const AddTransactions = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
              />
            </FormControl>
            <RadioGroup mt={"5"}>
              <Radio value="income" name="type" colorScheme="green">
                Income
              </Radio>
              <Radio value="expense" name="type" colorScheme="red">
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <button mr={"4"} onClick={onClose}>
              Cancel
            </button>
            <button>Add</button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransactions;
