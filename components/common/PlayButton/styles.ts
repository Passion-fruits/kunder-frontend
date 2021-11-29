import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
  transition: 0.3s;
  & svg {
    margin-left: 4px;
    margin-top: 2px;
  }
  &:hover {
    width: 55px;
    height: 55px;
    background-color: rgb(0, 0, 0, 0.7);
  }
`;
