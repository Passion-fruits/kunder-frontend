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
          toast.info("π’ 1λΆμμ 6λΆ μ¬μ΄μ κ³‘μ μ νν΄μ£ΌμΈμ!");
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
    toast.info("π μ μ μ²λ¦¬μ€μλλ€...");
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
        toast.success("β¨ μμμ΄ κ³΅κ°λμμ΅λλ€!");
        router.push(`/profile/${localStorage.getItem(USER_ID)}`);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("π λͺ¨λ  μ λ³΄λ₯Ό μλ ₯νλμ§ νμΈνμΈμ");
          setLoading(false);
        } else {
          toast.error("π’ μλ¬κ° λ°μνμμ΅λλ€.");
          setLoading(false);
        }
      });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Description>
          π μ μκΆ μλ° νμΌ μλ‘λμ λ²μ  μ μ λ₯Ό λ°μ μ μμ΅λλ€
        </S.Description>
        <S.FlexWrap>
          <ImgUpload setCoverImg={setCoverImg} />
          <S.InputWrap>
            <InforInput title="κ³‘ μ λͺ©" type="input" inputRef={titleRef} />
            <InforInput
              title="κ³‘ μ€λͺ"
              type="textarea"
              textareaRef={descriptionRef}
            />
            <S.SelectWrap>
              <div className="container">
                <InforInput
                  title="μ₯λ₯΄"
                  type="select"
                  selectRef={genreRef}
                  selectType="genre"
                />
              </div>
              <div className="container">
                <InforInput
                  title="λΆμκΈ°"
                  type="select"
                  selectRef={moodRef}
                  selectType="mood"
                />
              </div>
            </S.SelectWrap>
            <S.Mp3UploadWrap>
              <FileInput id="song" onChange={songUpload} type="audio" />
              <label htmlFor="song">
                <div>μμ μ ν</div>
              </label>
              <span className="text-overflow">
                {song ? song.name : "νμΌμ΄ μμ΅λλ€."}
              </span>
            </S.Mp3UploadWrap>
            <S.SubmitButton onClick={!loading ? submit : undefined}>
              μμ μλ‘λ
            </S.SubmitButton>
          </S.InputWrap>
        </S.FlexWrap>
        <S.Alert>
          μ¬μ§ κ·κ²©μ <b>752px * 752px</b> μ΄μμ κΆμ₯ν©λλ€. μμμ μλ‘λ μ
          μ­μ ν  μ μμΌλ©°, μμμΌλ‘ νμλ°μ λ΄μ­μ <b>νμλ΄μ­</b>μμ νμΈν 
          μ μμ΅λλ€. μ μκΆ μλ° νμΌ νΉμ λΆμ μ ν νμΌ μλ‘λ μ μλ¦Ό μμ΄
          <b>μ­μ μ‘°μΉ</b>λ  μ μμ΅λλ€.
        </S.Alert>
      </S.Container>
    </S.Wrapper>
  );
};

export default MusicUpload;
