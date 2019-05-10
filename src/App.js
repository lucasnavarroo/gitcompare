import React, { Fragment } from "react";
import Main from "./pages/Main"
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main/>
    </Fragment>
  );
}

export default App;
