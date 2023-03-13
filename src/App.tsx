import "./App.scss";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "components/LoginForm";

function App() {
  return (
    <div className="app"> 
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
