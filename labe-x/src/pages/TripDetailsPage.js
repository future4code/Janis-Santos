import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage, goToLoginPage, goToLastPage, goToListTripPage } from "../routes/coordinator";

const TripDetailsPage = () => {
  const history = useHistory();

  return (
    <>
      <p>Detalhes da viagem</p>
      <button onClick={() => goToListTripPage(history)}>Ver Viagens</button>
      <button onClick={() => goToAdminHomePage(history)}>Área de Admin</button>
    </>
  );
};

export default TripDetailsPage;