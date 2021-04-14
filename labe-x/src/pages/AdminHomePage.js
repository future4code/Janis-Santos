import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

const AdminHomePage = () => {
  const history = useHistory();

  return (
    <>
      <p>Página Inicial do Admin</p>
      <button onClick={() => goToHomePage(history)}>Home</button>
    </>
  );
};

export default AdminHomePage;