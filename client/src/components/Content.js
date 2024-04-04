import Card from "./Card";
import AddCard from "./AddCard";
import { useEffect, useState } from "react";
import { getLocations } from "../services/functions";
import { setLocations } from "../reducers/locationSlice";
import { useDispatch, useSelector } from "react-redux";

const Content = ({ setDark }) => {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  console.log(locations);

  useEffect(() => {
    getLocations().then((res) => dispatch(setLocations(res)));
  }, []);

  return (
    <div className="p-10 bg-slate-50 flex flex-wrap gap-10 dark:bg-gray-300 h-screen">
      {locations.length > 0 &&
        locations.map((loc) => (
          <Card key={loc._id} location={loc.name} id={loc._id} />
        ))}
      <AddCard setDark={setDark} />
    </div>
  );
};

export default Content;
