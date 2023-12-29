import { Button, Select, TagsInput, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [selectType, setSelectType] = useState(null);

  const [updatedData, setUpdatedData] = useState([]);

  const handleChange = () => {
    if (
      selectType === "TextBox" ||
      selectType === "Number" ||
      selectType === "dropDown"
    ) {
      setUpdatedData((prev) => [
        ...prev,
        { label: textValue, category: selectType },
      ]);
    }

    setSelectType(null);
    setTextValue("");
  };

  const handleTagChange = (index, tags) => {
    setUpdatedData((prev) => {
      const updated = [...prev];
      updated[index].tags = tags;
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("form_detail", JSON.stringify(updatedData));
  }, [updatedData]);

  return (
    <div className="w-screen min-h-screen bg-gray-300 flex justify-center ">
      <div className=" h-full  max-w-4xl  place-content-center pt-10 ">
        <div
          className="flex items-center  justify-between w-full gap-2 bg-orange-400 px-5 py-3 mb-4 rounded-md"
          style={{ border: "2px solid red" }}
        >
          <div className="flex gap-2">
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
              className="w-full"
              placeholder="select Field Type"
            />
          </div>

          <Button
            variant="filled"
            size="md"
            color="pink"
            onClick={handleChange}
            className="float-right "
          >
            Add
          </Button>
        </div>

        {updatedData.map((item, i) => (
          <div className="flex flex-col gap-2" key={i}>
            {item.category === "dropDown" ? (
              <div key={i}>
                <TagsInput
                  label={item.label}
                  placeholder="Enter desired option"
                  value={item.tags}
                  onChange={(e) => handleTagChange(i, e)}
                />
              </div>
            ) : (
              <div key={i} className="flex gap-2 ">
                <TextInput
                  label={item.label}
                  value={item.category}
                  className="w-full"
                  readOnly
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
