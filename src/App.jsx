import React from "react";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./styles/global";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'rsuite/dist/rsuite.min.css';


const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="app">
        <AppRoutes />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
