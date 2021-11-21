import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1400px;
  height: 85px;
  background-color: rgb(0, 0, 0, 0.8);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .logo {
    font-size: 30px;
    font-family: "Agency FB";
    color: ${ColorMap.mainColor};
    z-index: 2;
    cursor: pointer;
  }
  & .profile {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const Menu = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: ${ColorMap.grey400};
`;
