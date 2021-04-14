import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLoginPage, goToLastPage, goToListTripPage } from "../routes/coordinator";

const LoginPage = () => {
  const history = useHistory();

  return (
    <>
      <p>Login</p>
      <button onClick={() => goToListTripPage(history)}>Ver Viagens</button>
      <button onClick={() => goToAdminHomePage(history)}>Área de Admin</button>
    </>
  );
};

export default LoginPage;