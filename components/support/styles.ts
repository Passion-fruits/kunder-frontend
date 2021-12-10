import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & .page-title {
    color: ${ColorMap.grey000};
    font-size: 25px;
    font-weight: bold;
  }
`;

export const None = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${ColorMap.grey000};
`;

export const LoadingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
