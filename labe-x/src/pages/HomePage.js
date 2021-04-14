import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage, goToListTripPage } from "../routes/coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <p>Home Page</p>
      <button onClick={() => goToListTripPage(history)}>Ver Viagens</button>
      <button onClick={() => goToAdminHomePage(history)}>Área de Admin</button>
    </>
  );
};

export default HomePage;
