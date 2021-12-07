import { FC } from "react";

interface Props {
  type: "img" | "audio";
  id: string;
  onChange(any): void;
}

const FileInput: FC<Props> = ({ type, id, onChange }) => {
  return (
    <input
      type="file"
      accept={type === "img" ? "image/*" : type === "audio" ? "audio/*" : ""}
      id={id}
      onChange={onChange}
      style={{ display: "none" }}
    />
  );
};

export default FileInput;
