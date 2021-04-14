import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage, goToLastPage } from "../routes/coordinator";

const ListTripPage = () => {
  const history = useHistory();

  return (
    <>
      <p>Lista de Viagens</p>
      <button onClick={() => goToHomePage(history)}>Ver Viagens</button>
      <button onClick={() => goToLastPage(history)}>Área de Admin</button>
    </>
  );
};

export default ListTripPage;