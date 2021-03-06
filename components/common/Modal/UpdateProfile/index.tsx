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
        toast.success("π μ λ³΄κ° λ³κ²½λμμ΅λλ€!");
        toast.success("π μλ‘κ³ μΉ¨ ν λ³κ²½λ©λλ€!");
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 400) {
          toast.info("π μ΄λ¦μ νμμλλ€!");
        }
      });
  };

  const updateProfileCover = (event) => {
    getFileData(event).then((res) => {
      toast.info("π μ¬μ§μ λ³κ²½μ€μλλ€...");
      profile.updateProfileCover(res.file).then((res) => {
        toast.success("π μ¬μ§μ΄ λ³κ²½λμμ΅λλ€!");
        toast.success("π μλ‘κ³ μΉ¨ ν λ³κ²½λ©λλ€!");
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
              placeholder="μ΄λ¦μ μλ ₯νμΈμ"
              ref={nameRef}
              defaultValue={profileData.name}
            />
            <input
              placeholder="μκΈ°μκ°λ₯Ό μλ ₯νμΈμ"
              ref={descriptionRef}
              defaultValue={profileData.bio}
            />
            <input
              placeholder="νμ΄μ€λΆ λ§ν¬"
              ref={facebookRef}
              defaultValue={profileData.facebook}
            />
            <input
              placeholder="μΈμ€νκ·Έλ¨ λ§ν¬"
              ref={instaRef}
              defaultValue={profileData.insta}
            />
            <input
              placeholder="μ νλΈ λ§ν¬"
              ref={youtubeRef}
              defaultValue={profileData.youtube}
            />
            <input
              placeholder="μ¬μ΄λν΄λΌμ°λ λ§ν¬"
              ref={soundcloudRef}
              defaultValue={profileData.soundcloud}
            />
          </InputContainer>
        </FlexWrap>
      )}
      <button onClick={update}>νλ‘ν μμ </button>
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
