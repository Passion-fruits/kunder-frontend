import { ChangeEvent, FC } from "react";
import Radio from "./Radio";
import * as S from "./styles";
import { SupportType } from "..";

interface Props {
  setSupportType(p: SupportType): void;
  supportType: SupportType;
  setIsDone(p: number): void;
}

const SelectBar: FC<Props> = ({ setSupportType, supportType, setIsDone }) => {
  const supportTypeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const type: number = parseInt(event.target.value);
    if (type === 1) {
      setSupportType("mySupport");
    } else {
      setSupportType("isSupported");
    }
  };

  const isDoneHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const done = parseInt(event.target.value);
    setIsDone(done);
  };

  return (
    <S.Wrapper>
      <S.SelectWrap>
        <select onChange={supportTypeHandler}>
          <option value={1}>후원한 기록</option>
          <option value={2}>후원받은 기록</option>
        </select>
        <select onChange={isDoneHandler}>
          {supportType === "isSupported" ? (
            <>
              <option value={0}>답장 못함</option>
              <option value={1}>답장 완료</option>
            </>
          ) : (
            <>
              <option value={0}>답장 받지 못함</option>
              <option value={1}>답장 받음</option>
            </>
          )}
        </select>
      </S.SelectWrap>
      <S.RadioWrap>
        {/*         <Radio id="recent" content="최신순" />
        <Radio id="past" content="과거순" />
        <Radio id="mostKdt" content="코인순" /> */}
      </S.RadioWrap>
    </S.Wrapper>
  );
};

export default SelectBar;
