import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

export const Container = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  & .chart-title {
    font-size: 20px;
    font-weight: bold;
    color: ${ColorMap.grey000};
    margin-bottom: 30px;
  }
`;
