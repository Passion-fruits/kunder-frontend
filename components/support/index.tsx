import { FC } from "react";
import SelectBar from "./selectBar";
import * as S from "./styles";
import SupportCard from "./supportCard/index";

interface Props {}

const Support: FC<Props> = () => {
  return (
    <S.Wrapper>
      <h1 className="page-title">후원 내역</h1>
      <SelectBar />
      <SupportCard />
    </S.Wrapper>
  );
};

export default Support;
