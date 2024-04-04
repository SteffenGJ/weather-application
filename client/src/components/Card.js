import { useQuery } from "@apollo/client";
import { GET_WEATHER_DATA } from "../queries";
import { HighlightOff, MoreVert } from "@mui/icons-material";
import { deleteLocation } from "../services/functions";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../reducers/locationSlice";
import { Link } from "react-router-dom";

const Card = ({ location, id }) => {
  const { data } = useQuery(GET_WEATHER_DATA, {
    variables: { location },
  });

  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  console.log(id, "FROM CARD");

  const handleClick = () => {
    deleteLocation({ id }).then((res) => {
      const newLocations = locations.filter((loc) => loc._id !== res._id);
      dispatch(setLocations(newLocations));
    });
  };

  return (
    <div className="shadow-xl w-fit h-fit p-4 rounded-xl flex flex-col items-center bg-white dark:bg-gray-200 hover:bg-slate-50">
      <div className="flex justify-between items-center w-full">
        <MoreVert htmlColor="gainsboro" sx={{ fontSize: 20 }} />
        <button onClick={handleClick}>
          <HighlightOff htmlColor="gainsboro" sx={{ fontSize: 20 }} />
        </button>
      </div>
      <Link className="text-xl" to={`/${location}`}>
        {location}
      </Link>
      {data?.getCurrent ? (
        <img
          src={data.getCurrent.current.condition.icon}
          alt="STATUS"
          className="w-24"
        />
      ) : (
        <div className="h-24 w-24">--</div>
      )}
      {data?.getCurrent ? (
        <p className="text-3xl">{data.getCurrent.current.temp_c}°</p>
      ) : (
        <p className="text-3xl">00°</p>
      )}
    </div>
  );
};

export default Card;
