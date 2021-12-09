import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import { USER_ID } from "../../../../lib/api/export";
import profile from "../../../../lib/api/profile";
import { ColorMap } from "../../../../styles/color";
import { Profile } from "./../../../../lib/interface/profile";
import { AxiosError } from "axios";
import { toast } from "material-react-toastify";
import { setContextValue } from "../../../../lib/context";
import FileInput from "../../FileInput";
import { getFileData } from "./../../../../lib/utils/getFileData";

const UpdateProfile: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const facebookRef = useRef<HTMLInputElement>(null);
  const instaRef = useRef<HTMLInputElement>(null);
  const youtubeRef = useRef<HTMLInputElement>(null);
  const soundcloudRef = useRef<HTMLInputElement>(null);
  const [profileData, setProfileData] = useState<Profile>();
  const dispatch = setContextValue();

  useEffect(() => {
    profile.getProfileDetail(localStorage.getItem(USER_ID)).then((res) => {
      setProfileData(res.data);
    });
  }, []);

  const update = () => {
    profile
      .updateProfile({
        name: nameRef.current.value,
        bio: descriptionRef.current.value,
        facebook: facebookRef.current.value,
        insta: instaRef.current.value,
        soundcloud: soundcloudRef.current.value,
        youtube: youtubeRef.current.value,
      })
      .then((res) => {
        toast.success("😎 정보가 변경되었습니다!");
        toast.success("👉 새로고침 후 변경됩니다!");
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 400) {
          toast.info("😊 이름은 필수입니다!");
        }
      });
  };

  const updateProfileCover = (event) => {
    getFileData(event).then((res) => {
      toast.info("🙌 사진을 변경중입니다...");
      profile.updateProfileCover(res.file).then((res) => {
        toast.success("😊 사진이 변경되었습니다!");
        toast.success("👉 새로고침 후 변경됩니다!");
        setProfileData({
          ...profileData,
          profile: res.data.image_path,
        });
      });
    });
  };

  return (
    <Wrapper>
      <FileInput id="profile-cover" onChange={updateProfileCover} type="img" />
      {profileData && (
        <FlexWrap>
          <label htmlFor="profile-cover">
            <img src={profileData.profile} />
          </label>
          <InputContainer>
            <input
              placeholder="이름을 입력하세요"
              ref={nameRef}
              defaultValue={profileData.name}
            />
            <input
              placeholder="자기소개를 입력하세요"
              ref={descriptionRef}
              defaultValue={profileData.bio}
            />
            <input
              placeholder="페이스북 링크"
              ref={facebookRef}
              defaultValue={profileData.facebook}
            />
            <input
              placeholder="인스타그램 링크"
              ref={instaRef}
              defaultValue={profileData.insta}
            />
            <input
              placeholder="유튜브 링크"
              ref={youtubeRef}
              defaultValue={profileData.youtube}
            />
            <input
              placeholder="사운드클라우드 링크"
              ref={soundcloudRef}
              defaultValue={profileData.soundcloud}
            />
          </InputContainer>
        </FlexWrap>
      )}
      <button onClick={update}>프로필 수정</button>
    </Wrapper>
  );
};

export default UpdateProfile;

const Wrapper = styled.div`
  background-color: ${ColorMap.grey800};
  width: 600px;
  padding: 40px;
  border-radius: 10px;
  & button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: ${ColorMap.mainColor};
    color: ${ColorMap.grey000};
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  & input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
    color: ${ColorMap.grey000};
    background-color: ${ColorMap.grey700};
    padding: 0 15px;
    &::placeholder {
      color: ${ColorMap.grey200};
    }
  }
`;
