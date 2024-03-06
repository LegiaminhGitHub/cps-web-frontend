import React from "react";
import { useNavigate } from "react-router-dom";

function Authencation_page() {
  const navigate = useNavigate();

  function navigate_to() {
    navigate("/play");
  }

  return (
    <button id="test" onClick={navigate_to}>Navigate to main_page</button>
  );
}

export default Authencation_page;

