import { FC, useEffect, useState } from "react";
import kdt from "../../lib/api/kdt";
import { SupportCardType } from "../../lib/interface/kdt";
import SelectBar from "./selectBar";
import * as S from "./styles";
import SupportCard from "./supportCard/index";

export type SupportType = "mySupport" | "isSupported";

interface Props {}

const Support: FC<Props> = () => {
  const [supportType, setSupportType] = useState<SupportType>("mySupport");
  const [isDone, setIsDone] = useState(0);
  const [type, setType] = useState<number>(1);
  /**
   * type
   * 1 : 후원하고 답장 안옴
   * 2 : 후원하고 답장 옴
   * 3 : 후원받고 답장 안함
   * 4 : 후원받고 답장 함
   */
  const [supportData, setSupportData] = useState<SupportCardType[]>([]);

  useEffect(() => {
    if (supportType === "mySupport") {
      setType(1 + isDone);
      kdt
        .getMySupport({ page: 1, size: 10, done: isDone })
        .then((res) => {
          setSupportData(res.data.history);
        })
        .catch((err) => {
          return;
        });
    } else {
      setType(3 + isDone);
      kdt
        .getIsSupported({ page: 1, size: 10, done: isDone })
        .then((res) => {
          setSupportData(res.data.history);
        })
        .catch((err) => {
          return;
        });
    }
  }, [isDone, supportType]);

  console.log(supportData);

  return (
    <S.Wrapper>
      <h1 className="page-title">후원 내역</h1>
      <SelectBar
        setSupportType={setSupportType}
        supportType={supportType}
        setIsDone={setIsDone}
      />
      <SupportCard type={type} data={supportData} />
    </S.Wrapper>
  );
};

export default Support;
