import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  & .title {
    color: ${ColorMap.grey000};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const CoverImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6bb19;
  position: relative;
  & img {
    width: 160px;
    height: 160px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  }
`;
