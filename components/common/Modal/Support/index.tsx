import styled from "@emotion/styled";
import { FC } from "react";
import { ColorMap } from "../../../../styles/color";

const Support: FC = () => {
  return <Wrapper />;
};

export default Support;

export const Wrapper = styled.div`
  width: 500px;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
`;
