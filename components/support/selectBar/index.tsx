import { FC } from "react";
import Radio from "./Radio";
import * as S from "./styles";

interface Props {}

const SelectBar: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.SelectWrap>
        <select name="" id="">
          <option value="">후원한 기록</option>
        </select>
        <select name="" id="">
          <option value="">답장 받음</option>
        </select>
      </S.SelectWrap>
      <S.RadioWrap>
        <Radio id="recent" content="최신순" />
        <Radio id="past" content="과거순" />
        <Radio id="mostKdt" content="코인순" />
      </S.RadioWrap>
    </S.Wrapper>
  );
};

export default SelectBar;
