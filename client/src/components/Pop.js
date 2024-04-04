import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../reducers/locationSlice";
import { postLocation } from "../services/functions";
import InputList from "./InputList";

const Pop = ({ closer }) => {
  const [value, setValue] = useState("");
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const handleClick = () => {
    const [name, country] = value.split(", ");
    postLocation({ name, country }).then((res) =>
      dispatch(setLocations([...locations, res]))
    );
    console.log("ADDED " + name);
    closer();
  };

  return (
    <div className="bg-white h-96 w-96 shadow-xl rounded-xl p-4 text-center flex flex-col justify-evenly">
      <p className="font-semibold text-l">What would you like add?</p>
      <InputList value={value} setValue={setValue} />
      <div className="w-full flex justify-evenly">
        <button
          onClick={closer}
          className="w-1/3 p-1 rounded-xl border-2 border-slate-200 bg-gray-100 text-gray-500 hover:bg-gray-50"
        >
          Close
        </button>
        <button
          className="bg-blue-500 w-1/3 p-2 rounded-xl"
          onClick={handleClick}
        >
          Add Location
        </button>
      </div>
    </div>
  );
};

export default Pop;
