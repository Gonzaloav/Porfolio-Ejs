import React from "react";
import styled from "styled-components";
import { PrincipalLink } from "../Link";

const HeaderbotonInico = styled.header`
  position: fixed;
  right: 7%;
  margin-top: 30%;
  justify-content: center;
`;

const Navnombre = styled.nav`
  background-color: #d78c0e52;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 85vw;
  height: 30vh;
  align-items: center;
  margin: 2px;
  border-radius: 20px;
`;

const Minombre = styled.h1`
  justify-content: space-between;
  font-family: Vladimir Script;
  color: #063a35;
  font-size: 48pt;
`;

const NombreLinks = styled.h2`
  justify-content: space-between;
  font-family: Kunstler Script;
  font-size: 36pt;
  color: goldenrod;
`;

const Barrabotones = () => {
  return (
    <>
      <HeaderbotonInico>
        <Navnombre>
          <Minombre> Zalo Aller </Minombre>
          <NombreLinks>
            <PrincipalLink />
          </NombreLinks>
        </Navnombre>
      </HeaderbotonInico>
    </>
  );
};

export default Barrabotones;
