import { FC, useRef, useState } from "react";
import FileInput from "../common/FileInput";
import ImgUpload from "./ImgUpload";
import InforInput from "./InforInput";
import * as S from "./styles";
import { getFileData } from "./../../lib/utils/getFileData";
import { toast } from "material-react-toastify";
import music from "../../lib/api/music";
import { useRouter } from "next/dist/client/router";
import { USER_ID } from "../../lib/api/export";

interface Props {}

const MusicUpload: FC<Props> = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const genreRef = useRef(null);
  const moodRef = useRef(null);
  const [song, setSong] = useState<File>();
  const [coverImg, setCoverImg] = useState("");
  const [songDuration, setSongDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const songUpload = (event) => {
    getFileData(event).then((res) => {
      const audio = new Audio(res.preview);
      audio.oncanplaythrough = () => {
        const duration = audio.duration;
        if (duration > 60 && duration < 360) {
          setSong(res.file);
          setSongDuration(duration);
        } else {
          toast.info("😢 1분에서 6분 사이의 곡을 선택해주세요!");
          setSong(null);
        }
      };
    });
  };

  const submit = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const genre = genreRef.current.value;
    const mood = moodRef.current.value;
    setLoading(true);
    toast.info("😊 정상 처리중입니다...");
    music
      .uploadMusic({
        song: song,
        cover_img: coverImg,
        duration: Math.round(songDuration),
        title: title,
        description: description,
        genre: parseInt(genre),
        mood: parseInt(mood),
      })
      .then((res) => {
        toast.success("✨ 음악이 공개되었습니다!");
        router.push(`/profile/${localStorage.getItem(USER_ID)}`);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("😊 모든 정보를 입력했는지 확인하세요");
          setLoading(false);
        } else {
          toast.error("😢 에러가 발생하였습니다.");
          setLoading(false);
        }
      });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Description>
          😊 저작권 위반 파일 업로드시 법적 제제를 받을 수 있습니다
        </S.Description>
        <S.FlexWrap>
          <ImgUpload setCoverImg={setCoverImg} />
          <S.InputWrap>
            <InforInput title="곡 제목" type="input" inputRef={titleRef} />
            <InforInput
              title="곡 설명"
              type="textarea"
              textareaRef={descriptionRef}
            />
            <S.SelectWrap>
              <div className="container">
                <InforInput
                  title="장르"
                  type="select"
                  selectRef={genreRef}
                  selectType="genre"
                />
              </div>
              <div className="container">
                <InforInput
                  title="분위기"
                  type="select"
                  selectRef={moodRef}
                  selectType="mood"
                />
              </div>
            </S.SelectWrap>
            <S.Mp3UploadWrap>
              <FileInput id="song" onChange={songUpload} type="audio" />
              <label htmlFor="song">
                <div>음악 선택</div>
              </label>
              <span className="text-overflow">
                {song ? song.name : "파일이 없습니다."}
              </span>
            </S.Mp3UploadWrap>
            <S.SubmitButton onClick={!loading ? submit : undefined}>
              음악 업로드
            </S.SubmitButton>
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
