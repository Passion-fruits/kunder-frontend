import { FC } from "react";
import * as S from "./styles";

interface Props {
  id: string;
  content: string;
}

const Radio: FC<Props> = ({ id, content }) => {
  return (
    <label htmlFor={id}>
      <input type="radio" id={id} name="sortMenu" />
      <div className="radio-icon">
        <div className="circle"></div>
      </div>
      {content}
    </label>
  );
};

export default Radio;
