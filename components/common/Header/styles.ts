import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  transition: 300ms;
`;

export const Container = styled.div`
  width: 1400px;
  height: 85px;
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
`;

export const ProfileWrap = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ProfileMenu = styled.div`
  width: 170px;
  background-color: ${ColorMap.grey800};
  position: absolute;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & div {
    padding: 15px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: ${ColorMap.grey000};
    font-size: 18px;
    border-bottom: 1px solid ${ColorMap.grey700};
    &:last-of-type {
      color: ${ColorMap.red100};
      font-weight: 500;
      border: none;
    }
    &:hover {
      background-color: ${ColorMap.grey900};
    }
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
