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
import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const AddTransactions = ({ isOpen, onClose }) => {
  const { formData, setformData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleFormChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
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
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio
                checked={formData.type == "income"}
                onChange={handleFormChange}
                value="income"
                name="type"
                colorScheme="green"
              >
                Income
              </Radio>
              <Radio
                value="expense"
                onChange={handleFormChange}
                name="type"
                colorScheme="red"
                checked={formData.type == "expense"}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <button mr={"4"} onClick={onClose}>
              Cancel
            </button>
            <button onClick={onClose} type="submit">
              Add
            </button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransactions;
