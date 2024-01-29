import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Shop from "./Shop";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      let url =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        keyword +
        "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
        "&maxResults=40";
      let options = {
        method: "GET",
      };
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          let { items } = jsonData;
          //console.log(items);
          setLoading(false);
          setSearchResults(items);
        });

      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log(searchResults);

  return (
    <div className="container">
      <div className="mt-3 row">
        <div className="col-2"></div>
        <input
          className="col-6 form-control mr-3"
          id="outlined-basic"
          value={keyword}
          onChange={handleKeywordChange}
          variant="outlined"
          placeholder="Search Here"
        />

        <button
          variant="contained"
          onClick={handleSearch}
          className=" btn btn-primary col-1"
        >
          Search
        </button>
        <div className="col-2"></div>
      </div>

      {loading && <CircularProgress />}

      {searchResults.length !== 0 ? (
        <div className="mt-3">
          <Shop products={searchResults} />
        </div>
      ) : (
        <h4 className="text-center text-success mt-3">
          No search for any data yet!
        </h4>
      )}
    </div>
  );
};

export default Search;
