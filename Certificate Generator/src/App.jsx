import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Request from "./Components/Request";
import Details from "./Components/Details";

export default function App() {
  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold underline text-center">Admin Portal</h1>
        <br /><br />
        <Routes>
          <Route path="/" element={<RequestsPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function RequestsPage() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      <Request />
      <Request />
      <Request />
      <Request />
      <Request />
      <Request />
    </div>
  );
}

function DetailsPage() {
  return <Details />;
}
