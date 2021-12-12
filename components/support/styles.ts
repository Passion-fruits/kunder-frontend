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

export const MoredButton = styled.button`
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${ColorMap.grey300};
  background-color: ${ColorMap.grey800};
  border-radius: 5px;
  transition: 0.3s;
  margin-top: 20px;
  &:hover {
    color: ${ColorMap.blue100};
    background-color: ${ColorMap.grey900};
  }
`;
