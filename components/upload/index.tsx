import { FC } from "react";
import ImgUpload from "./ImgUpload";
import InforInput from "./InforInput";
import * as S from "./styles";

interface Props {}

const MusicUpload: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Description>
          😊 저작권 위반 파일 업로드시 법적 제제를 받을 수 있습니다
        </S.Description>
        <S.FlexWrap>
          <ImgUpload />
          <S.InputWrap>
            <InforInput />
          </S.InputWrap>
        </S.FlexWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default MusicUpload;
