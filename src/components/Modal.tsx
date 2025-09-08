import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import { useForm } from '@mantine/form';

type AddExpenseModalProps = {
    opened: boolean;
    onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);
  
  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

    const inputNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameError(false);
    setName(event.target.value);
  };

    const selectCatagoryOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryError(false);
    setCategory(event.target.value);
  };

  const handleSubmit = () => {

  }

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0




    const computeTotalPayment = () => {
    let total = 0;
    
    return total;
  };

  return (
    /* Type additional text here. */
  <div
      className="modal fade"
      id="modalcomponent" 
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalcomponentLabel"
      aria-hidden="true"
    >
      <div className="modal-body">
            {/* First name & Last name */}
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">Name</label>
                <input
                  className={"form-control" + (nameError ? " is-invalid" : "")}
                  onChange={inputNameOnChange}
                  value={name}
                />
                <div className="invalid-feedback">Invalid last name</div>
              </div>
              <NumberInput value={amount} onChange={setAmount} />
      <div className="mt-2">
              <label className="form-label">Plan</label>
              <select
                data = {[]}
                className={"form-select" + (categoryError ? " is-invalid" : "")}
                onChange={selectCatagoryOnChange}
                value={category}
              >
                {/* <option value="">Please select..</option>
                <option value="funrun">Fun run 5.5 Km (500 THB)</option>
                <option value="mini">Mini Marathon 10 Km (800 THB)</option>
                <option value="half">Half Marathon 21 Km (1,200 THB)</option>
                <option value="full">
                  Full Marathon 42.195 Km (1,500 THB)
                </option> */}
              </select>
              <div className="invalid-feedback">Please select a Plan</div>
            </div>
      </div>
    </div>
  </div>
  );

}

