import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1100px;
  padding: 25px 50px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
`;

export const Description = styled.div`
  border-left: 3px solid ${ColorMap.mainColor};
  padding: 3px 15px;
  font-size: 17px;
  color: ${ColorMap.grey200};
`;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const InputWrap = styled.div`
  width: 700px;
`;
