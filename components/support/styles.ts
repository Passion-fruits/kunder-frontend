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
