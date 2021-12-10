import { FC, LegacyRef, MutableRefObject } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../styles/color";
import { genreList } from "./../../../lib/list/genre";
import { moodList } from "./../../../lib/list/mood";

interface Props {
  type: "input" | "textarea" | "select";
  title: string;
  inputRef?: LegacyRef<HTMLInputElement>;
  selectRef?: LegacyRef<HTMLSelectElement>;
  textareaRef?: LegacyRef<HTMLTextAreaElement>;
  selectType?: "genre" | "mood";
}

const InforInput: FC<Props> = ({
  type,
  title,
  inputRef,
  textareaRef,
  selectRef,
  selectType,
}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {(() => {
        switch (type) {
          case "input":
            return (
              <input
                type="text"
                ref={inputRef}
                placeholder="음악 제목이 무엇인가요?"
              />
            );
          case "select":
            return (
              <select ref={selectRef}>
                {selectType === "genre"
                  ? genreList.map((genre, index) => (
                      <option value={index + 1} key={index}>
                        {genre}
                      </option>
                    ))
                  : moodList.map((mood, index) => (
                      <option value={index + 1} key={index}>
                        {mood}
                      </option>
                    ))}
              </select>
            );
          case "textarea":
            return (
              <textarea
                placeholder="곡에 대한 설명을 적어주세요!"
                ref={textareaRef}
              />
            );
        }
      })()}
    </Wrapper>
  );
};

export default InforInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h1 {
    font-size: 18px;
    color: ${ColorMap.grey000};
    &::after {
      content: "*";
      margin-left: 5px;
      color: ${ColorMap.red100};
    }
  }
  & input,
  textarea,
  select {
    width: 100%;
    height: 50px;
    border: 1px solid ${ColorMap.grey300};
    color: ${ColorMap.grey100};
    font-size: 17px;
    border-radius: 5px;
    padding: 0 15px;
    &::placeholder {
      color: ${ColorMap.grey200};
    }
  }
  & option {
    background-color: ${ColorMap.grey800};
  }
  & textarea {
    height: 200px;
    padding-top: 15px;
  }
`;
