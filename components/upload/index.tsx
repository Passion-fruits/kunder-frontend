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
            <InforInput title="곡 제목" type="input" />
            <InforInput title="곡 설명" type="textarea" />
            <S.SelectWrap>
              <div className="container">
                <InforInput title="장르" type="select" />
              </div>
              <div className="container">
                <InforInput title="장르" type="select" />
              </div>
            </S.SelectWrap>
            <S.Mp3UploadWrap>
              <button>음악 선택</button>
              <span>파일이 없습니다.</span>
            </S.Mp3UploadWrap>
            <S.SubmitButton>음악 업로드</S.SubmitButton>
          </S.InputWrap>
        </S.FlexWrap>
        <S.Alert>
          사진 규격은 <b>752px * 752px</b> 이상을 권장합니다. 음악은 업로드 시
          삭제할 수 없으며, 음악으로 후원받은 내역은 <b>후원내역</b>에서 확인할
          수 있습니다. 저작권 위반 파일 혹은 부적절한 파일 업로드 시 알림 없이
          <b>삭제조치</b>될 수 있습니다.
        </S.Alert>
      </S.Container>
    </S.Wrapper>
  );
};

export default MusicUpload;
