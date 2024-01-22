import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReadApiComponent from './crud/read.component';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/read-api" element={<ReadApiComponent />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
