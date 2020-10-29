import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { countries } from "../../api";

const CountryPicker = ({ handleChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };
    fetchCountries();
  }, [setFetchedCountries]);
  const handleSubmit = () => {
    return handleChange(selectedCountry);
  };

  return (
    <Autocomplete
      options={fetchedCountries}
      style={{ width: 300 }}
      renderInput={(params) => (
        <React.Fragment>
          <TextField
            onSelect={(e) => setSelectedCountry(e.target.value)}
            {...params}
            label="Select a country"
            variant="outlined"
          />
          <Box textAlign="center" m={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </React.Fragment>
      )}
    />
  );
};

export default CountryPicker;

// onChange={(e) => handleChange(e.target.value)}

// {
//   /* <option value="Global">Global</option>
//         {fetchedCountries.map((country, i) => (
//           <option value={country} key={i}>
//             {country}
//           </option>
//         ))} */
// }
