import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_INDEPTH_DATA_BY_LOCATION } from "../queries";
import DetermineImage from "./DetermineImage";

const SingleView = () => {
  const { location } = useParams();

  const { data, error, loading } = useQuery(GET_INDEPTH_DATA_BY_LOCATION, {
    variables: { location },
  });

  console.log(data);

  return (
    <div className="relative">
      {data && (
        <div>
          <DetermineImage condition={data.getCurrent.current.condition.text} />
          <div className="bg-white rounded-t-[50px] h-screen w-screen absolute top-1/2 flex flex-col items-center px-32 py-20 gap-28">
            <p className="text-3xl">
              {location}, {data.getCurrent.location.country}
            </p>
            <p>{data.getCurrent.current.condition.text}</p>
            <div className="bg-gray-200 w-full h-full">
              <p>Temperature: {data.getCurrent.current.temp_c}</p>
              <p>Feels like: {data.getCurrent.current.feelslike_c}</p>
              <p>Wind direction: {data.getCurrent.current.wind_dir}</p>
              <p>Wind: {data.getCurrent.current.wind_kph} kph</p>
              <p>Precip: {data.getCurrent.current.precip_mm} mm</p>
              <p>UV index: {data.getCurrent.current.uv}</p>
              <p>Local time: {data.getCurrent.location.localtime}</p>
              <p>Timezone: {data.getCurrent.location.tz_id}</p>
            </div>
          </div>
          <p>{data.getCurrent.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default SingleView;
