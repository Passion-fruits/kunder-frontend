import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";

export const MenuWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const Menu = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: ${ColorMap.grey400};
`;
