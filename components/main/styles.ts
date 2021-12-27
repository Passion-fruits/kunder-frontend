import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  &:first-of-type {
    margin-top: 0px;
  }
  & .list-title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
