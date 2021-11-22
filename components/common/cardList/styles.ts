import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const RowWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-row-gap: 30px;
  justify-content: space-between;
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
