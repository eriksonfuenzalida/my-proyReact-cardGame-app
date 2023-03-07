import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 50px;
  }
`;

export const HeaderLogoImg = styled.img`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 55px;
  width: 160px;
  margin-left: 5px;
  margin-right: 5px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 30px;
  text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
    1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 300px;
    font-size: 24px;
  }
`;
