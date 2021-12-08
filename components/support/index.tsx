import { FC, useEffect, useState } from "react";
import kdt from "../../lib/api/kdt";
import { SupportCardType } from "../../lib/interface/kdt";
import LoadingSpinner from "../common/LoadingSpinner";
import SelectBar from "./selectBar";
import * as S from "./styles";
import SupportCard from "./supportCard/index";

export type SupportType = "mySupport" | "isSupported";

interface Props {}

const Support: FC<Props> = () => {
  const [supportType, setSupportType] = useState<SupportType>("mySupport");
  const [isDone, setIsDone] = useState(0);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (supportType === "mySupport") {
      setType(1 + isDone);
      kdt
        .getMySupport({ page: 1, size: 10, done: isDone })
        .then((res) => {
          setSupportData(res.data.history);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
    } else {
      setType(3 + isDone);
      kdt
        .getIsSupported({ page: 1, size: 10, done: isDone })
        .then((res) => {
          setLoading(false);
          setSupportData(res.data.history);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
    }
  }, [isDone, supportType]);

  return (
    <S.Wrapper>
      <h1 className="page-title">후원 내역</h1>
      <SelectBar
        setSupportType={setSupportType}
        supportType={supportType}
        setIsDone={setIsDone}
      />
      <SupportCard type={type} data={supportData} />
      {supportData.length === 0 && <S.None>내역이 없습니다</S.None>}
      {loading && (
        <S.LoadingWrap>
          <LoadingSpinner size={50} />
        </S.LoadingWrap>
      )}
    </S.Wrapper>
  );
};

export default Support;
