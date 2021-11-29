import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const MenuWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 50px;
  & li {
    font-size: 18px;
    color: ${ColorMap.grey400};
    cursor: pointer;
    padding-bottom: 15px;
  }
  & .active {
    color: ${ColorMap.grey000};
    font-weight: bold;
    border-bottom: 2px solid ${ColorMap.grey000};
  }
`;
