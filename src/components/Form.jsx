import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [inputFields, setInputFields] = useState([{ name: "", values: [] }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index] = { ...data[index], [event.target.name]: event.target.value };
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", values: [] };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleAddValue = (index) => {
    let data = [...inputFields];
    data[index].values.push("");
    setInputFields(data);
  };

  const handleDeleteValue = (fieldIndex, valueIndex) => {
    let data = [...inputFields];
    data[fieldIndex].values.splice(valueIndex, 1);
    setInputFields(data);
  };

  const handleValueChange = (fieldIndex, valueIndex, event) => {
    let data = [...inputFields];
    data[fieldIndex].values[valueIndex] = event.target.value;
    setInputFields(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <div className="">
      <div className="container w-[1200px] ml-[100px] mt-3 drop-shadow-xl bg-slate-50 h-full border-current">
        <div className="pt-5 font-semibold pl-5">
          <h1>Variants</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {inputFields.map((input, fieldIndex) => {
            return (
              <div key={fieldIndex}>
                <div className="mx-20 mt-6">
                  <p>Option name</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={input.name}
                      onChange={(event) => handleFormChange(fieldIndex, event)}
                      autoComplete="off"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                    />
                    <button onClick={() => removeFields(fieldIndex)}>
                      <i className="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                    </button>
                  </div>
                </div>
                <div className="mx-20 mt-6">
                  <p>Option values</p>
                  {input.values.map((value, valueIndex) => {
                    return (
                      <div className="flex items-center" key={valueIndex}>
                        <input
                          type="text"
                          name="value"
                          id="value"
                          value={value}
                          onChange={(event) =>
                            handleValueChange(fieldIndex, valueIndex, event)
                          }
                          autoComplete="off"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                        />
                        <button
                          onClick={() =>
                            handleDeleteValue(fieldIndex, valueIndex)
                          }
                        >
                          <i className="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                        </button>
                      </div>
                    );
                  })}
                  <div className="flex items-center">
                    <button
                      className="block w-full"
                      onClick={() => handleAddValue(fieldIndex)}
                    >
                      <input
                        type="text"
                        placeholder="Add another value"
                        disabled
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                      />
                    </button>
                    <div className="ml-6">{""}</div>
                  </div>
                  <button
                    className="mt-5 bg-transparent text-black-700 font-semibold py-2 px-4 border border-black-900"
                    type="submit"
                  >
                    Done
                  </button>
                </div>
                <hr className="mt-3" />
              </div>
            );
          })}
        </form>

        <div className="flex h-[100px] items-center text-blue-500">
          <button className="ml-5" onClick={addFields}>
            {" "}
            <i className="fa-solid fa-plus mr-5 "></i>Add another option
          </button>
        </div>
        <hr />
        <table className="table-auto ml-10 h-10">
          <thead>
            <tr>
              <th>Values</th>
            </tr>
          </thead>
          {inputFields &&
            inputFields.map((s, i) => {
              return (
                <tbody key={i}>
                  <tr>{s.values && <td>{s.values}</td>}</tr>
                </tbody>
              );
            })}
        </table>
        {/* {inputFields &&
          inputFields.map((s, i) => {
            return (
              <table className="table-auto ml-10 h-10" key={i}>
                <thead>
                  <tr>
                    <th>Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>{s.values && <td>{s.values}</td>}</tr>
                </tbody>
              </table>
            );
          })} */}
      </div>
    </div>
  );
};

export default Form;
