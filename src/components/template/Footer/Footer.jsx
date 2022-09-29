import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white footer-linha">
      <MDBContainer className="p-4 pb-0"></MDBContainer>
      <div className="text-center p-3 footer-banner"
        style={{ backgroundColor: "#2F3440" }}>Presta Serviço WEB © 2022 Copyright</div>
    </MDBFooter>
  );
}
