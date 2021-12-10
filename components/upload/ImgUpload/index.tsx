import { FC, useState } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../styles/color";
import FileInput from "../../common/FileInput";
import { getFileData } from "./../../../lib/utils/getFileData";

interface Props {
  setCoverImg(any): void;
}

const ImgUpload: FC<Props> = ({ setCoverImg }) => {
  const [preview, setPreview] = useState("");

  const upload = (event) => {
    getFileData(event).then((res) => {
      setPreview(res.preview);
      setCoverImg(res.file);
    });
  };
  return (
    <Wrapper>
      <FileInput type="img" id="cover_img" onChange={upload} />
      {preview ? <img src={preview} /> : <div className="none" />}
      <label htmlFor="cover_img">
        <div>이미지 업로드</div>
      </label>
    </Wrapper>
  );
};

export default ImgUpload;

const Wrapper = styled.div`
  width: 250px;
  & img,
  .none {
    width: 250px;
    height: 250px;
  }
  & .none {
    background: linear-gradient(45deg, #9a87ff, #00ff90);
  }
  & label div {
    background-color: ${ColorMap.mainColor};
    color: ${ColorMap.grey000};
    width: 100%;
    height: 35px;
    font-size: 15px;
    border-radius: 3px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
