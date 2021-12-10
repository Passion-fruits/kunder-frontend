import { FC } from "react";
import * as S from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ColorMap } from "./../../../../styles/color";

interface Props {
  path: string;
  content: string;
}

const Menu: FC<Props> = ({ path, content }: Props) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <S.Menu
        style={router.pathname === path ? { color: ColorMap.grey000 } : {}}
      >
        {content}
      </S.Menu>
    </Link>
  );
};

export default Menu;
