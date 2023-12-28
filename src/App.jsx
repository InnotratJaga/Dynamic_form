import { Button, Checkbox, Select, TagsInput, TextInput } from "@mantine/core";
import React, { useRef, useState } from "react";

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [selectType, setSelectType] = useState("");
  // const [dropdownValue, setDropdownValue] = useState("");

  const [open, setOpen] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [updatedData, setUpdatedData] = useState([]);
  const select = useRef();

  const handleChange = () => {
    console.log(select.current.value);
    if (textValue === "") {
      return;
    } else if (selectType === "Number" || selectType === "TextBox") {
      console.log("clicked");
      setUpdatedData((prev) => [
        ...prev,
        { lebel: textValue, dropDownType: selectType },
      ]);

      const reset = (select.current.value = "");

      setTextValue("");
      setSelectType(reset);
      // select.current.value = ""
    } else {
      setOpen(true);
      setTextValue("");
      setSelectType("");
    }
  };

  // console.log(updatedData);

  // console.log("selectType", selectType);
  // console.log("select", select);
  return (
    <div className="w-screen min-h-screen bg-gray-300 flex items-center">
      <div className="mx-auto h-full max-w-2xl  mt-20  ">
        <div className="flex w-full gap-2 bg-gray-200 px-3 py-3 mb-2 rounded-md">
          <TextInput
            placeholder="Enter lebel"
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            className="w-full"
          />

          <Select
            data={["dropDown", "TextBox", "Number"]}
            onChange={(e) => setSelectType(e)}
            value={selectType}
            id="main-dropdown"
            className="w-full"
            placeholder="select Field Type"
            ref={select}
          />
        </div>
        <div className="w-full">
          {updatedData?.map((item, i) => (
            // <div>{item.dropDownType}</div>

            <div
              key={item.lebel}
              className="flex gap-2 w-full mb-5 bg-gray-200 px-2 py-3 rounded-md  "
            >
              <TextInput
                placeholder="Enter lebel"
                value={item.dropDownType}
                className="w-full"
                readOnly
              />

              <TextInput
                placeholder="Enter lebel"
                value={item.dropDownType}
                className="w-full"
                readOnly
              />
            </div>
          ))}

          {open && (
            <div className="bg-gray-200 px-2 py-3 rounded-md ">
              <TagsInput
                placeholder="possible message"
                searchValue={searchValue}
                onSearchChange={(e) => setSearchValue(e)}
                data={[]}
                size="lg"
              />
            </div>
          )}
        </div>
        <Button
          variant="filled"
          size="md"
          onClick={handleChange}
          className="float-right mt-3"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default App;
