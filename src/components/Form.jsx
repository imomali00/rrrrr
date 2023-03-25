import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [inputFields, setInputFields] = useState([{ name: "", value: "" }]);
  const [val, setVal] = useState([{}]);

  const handleAddInput = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index] = { ...data[index], [event.target.name]: event.target.value };
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { name: "", value: "" };

    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <div className="">
      <div className="container w-[1200px] ml-[100px] mt-3 drop-shadow-xl bg-slate-50 h-full border-current">
        <div className="pt-5 font-semibold pl-5">
          <h1>Variants</h1>
        </div>

        <form className="">
          {inputFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="mx-20 mt-6">
                  <p>Option name</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={input.name}
                      onChange={(event) => handleFormChange(index, event)}
                      autocomplete="off"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                    />
                    <button onClick={removeFields}>
                      <i class="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                    </button>
                  </div>
                </div>
                <div className="mx-20 mt-6">
                  <p>Option values</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="value"
                      id="value"
                      value={input.value}
                      onChange={(event) => handleFormChange(index, event)}
                      autocomplete="off"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                    />
                    <button>
                      <i className="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      onClick={() => handleAddInput()}
                      placeholder="Add another value"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                    />
                    <button>
                      <i className="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                    </button>
                  </div>
                  {val.map((data, i) => {
                    return (
                      <>
                        <div className="flex items-center">
                          <input
                            type="text"
                            name="value"
                            id="value"
                            value={data}
                            onChange={(e) => handleChange(e, i)}
                            autocomplete="off"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 w-[500px]"
                          />
                          <button onClick={() => handleDelete()}>
                            <i className="fa-solid fa-trash-can ml-3 cursor-pointer"></i>
                          </button>
                        </div>
                      </>
                    );
                  })}
                  <button
                    className="mt-5 bg-transparent  text-black-700 font-semibold  py-2 px-4 border border-black-900"
                    onClick={""}
                  >
                    Done
                  </button>
                </div>
              </div>
            );
          })}
        </form>

        <hr className="mt-3" />
        <div className="flex h-[100px] items-center text-blue-500">
          <button className="ml-5" onClick={addFields}>
            {" "}
            <i className="fa-solid fa-plus mr-5 "></i>Add another option
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Form;
