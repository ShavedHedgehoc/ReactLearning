import React from "react";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import "./styles/App.css";

import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <div className="searchForm">
        <SearchForm />
      </div>
      <div className="content">
        <div>
          <p>Content</p>
        </div>
        <div className="table">
          <Table data={data} headers={["Name", "Date", "Marking", "Plant"]} />
        </div>
      </div>
    </div>
  );
}
