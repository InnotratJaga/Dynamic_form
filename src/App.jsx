import {
  Button,
  Checkbox,
  Input,
  NumberInput,
  Select,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";

const App = () => {
  const [textInput, setTextInput] = useState([1]);
  const increase = () => {
    setTextInput((prev) => [...prev, prev.length - 1 + 1]);
  };
  const decrease = () => {
    const data = [...textInput];
    data.pop();
    setTextInput(data);
  };
  return (
    <div className="w-screen min-h-screen   flex justify-center items-center bg-gray-100">
      <div className="mx-auto max-w-4xl min-auto  bg-gray-50  shadow-lg rounded-lg flex relative overflow-auto">
        <div className=" h-auto w-full py-12 px-7    gap-1 ">
          <div className="w-[35%] my-5">
            <NumberInput
              // label="Input label"
              // description="Input description"
              placeholder="Form Id"
            />
          </div>
          <div className="flex  gap-4">
            <div className="flex flex-col gap-2">
              {textInput.map((item, i) => (
                <div className="flex  gap-5">
                  <Input placeholder="Toy Name" />
                  <Select placeholder="Game Name" data={["A", "B", "C"]} />
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked label="A" />
                    <Checkbox defaultChecked label="B" />
                    <Checkbox defaultChecked label="C" />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="border-[1px] border-gray-500 absolute left-2 top-4 px-2 py-1  rounded-md cursor-pointer "
              onClick={increase}
            >
              <IconPlus />
            </div>
            {textInput.length > 1 && (
              <div
                className="border-[1px] border-gray-500 ml-2  absolute top-4  left-12 px-2 py-1  rounded-md cursor-pointer "
                onClick={decrease}
              >
                <IconMinus />
              </div>
            )}
          </div>
          <Button className="mt-5" variant="filled" size="md">
            <span className="font-medium">Submit</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
