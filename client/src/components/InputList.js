import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_OPTIONS_BY_TEXT } from "../queries";

const InputList = ({ value, setValue }) => {
  //const [value, setValue] = useState("");

  const [fetchOptions, { data, loading, error }] =
    useLazyQuery(GET_OPTIONS_BY_TEXT);

  const handleChange = (e) => {
    setValue(e.target.value);
    fetchOptions({
      variables: { text: e.target.value },
      onCompleted: (data) => console.log(data),
    });
  };

  return (
    <div className="">
      <input
        list="places"
        value={value}
        onChange={handleChange}
        className="border-2 rounded-l border-gray-500"
      />
      <datalist id="places">
        {data?.getSuggestions.map((sug) => (
          <option key={sug.id} value={`${sug.name}, ${sug.country}`} />
        ))}
        <option value="No results" />
      </datalist>
    </div>
  );
};

export default InputList;

/* <option value="Dubai" />
        <option value="Moscow" />
        <option value="London" />
        <option value="Dublin" />
        <option value="Horsens" />
        <option value="Randers" />
        <option value="Sydney" />
        <option value="Canberra" />
        <option value="Astana" />
        <option value="Oslo" />
        <option value="Vienna" />
        <option value="Edinburgh" />
        <option value="Bergen" />
        <option value="Stockholm" />
        <option value="København" />
        <option value="Ljubjana" />
        <option value="Bratislava" />
        <option value="Paris" />
        <option value="Berlin" />
        <option value="Hamburg" />
        <option value="Essen" />
        <option value="Istanbul" />
        <option value="Rome" />
        <option value="Doha" />
        <option value="Jeddah" />
        <option value="Beijing" />
        <option value="Seoul" />
        <option value="Tokyo" />
        <option value="Osaka" />*/
