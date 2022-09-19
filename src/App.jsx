import React from "react";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./styles/global";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Footer from "./components/template/Footer/Footer"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./components/carrosel/style.css";


const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="app">
        <AppRoutes />
        <GlobalStyle />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
