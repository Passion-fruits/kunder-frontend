import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import comment from "../../lib/api/comment";
import { toast } from "material-react-toastify";
import { CommentType } from "./../../lib/interface/comment";
import { getDate } from "./../../lib/utils/getDate";

interface Props {
  comment_cnt: string;
}

const Comment: FC<Props> = ({ comment_cnt }) => {
  const router = useRouter();
  const song_id = router.query.id;
  const commentRef = useRef<HTMLInputElement>(null);
  const [commentArr, setCommentArr] = useState<CommentType[]>([]);

  const getComment = () => {
    comment
      .getComment(song_id)
      .then((res) => {
        setCommentArr(res.data);
      })
      .catch(() => {
        // none comment
        return;
      });
  };

  const writeComment = (event) => {
    if (event.keyCode !== 13) return;
    const content = commentRef.current.value;
    if (!content) {
      toast.info("😢 댓글 작성 후 등록해주세요!");
      return;
    }
    comment
      .writeComment({
        song_id: song_id,
        content: content,
      })
      .then((res) => {
        commentRef.current.value = "";
        getComment();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("😢 이미 댓글을 작성하셨습니다");
          return;
        }
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <S.WriteComment
        type="text"
        placeholder="음악에 의견을 남겨주세요! (엔터키를 눌러 등록)"
        ref={commentRef}
        onKeyDown={writeComment}
      />
      <S.CommentWrap>
        <span className="comment-cnt">댓글 {comment_cnt}개</span>
        <S.Comment>
          <img src="https://i.guim.co.uk/img/media/25ba79983d414405579567ebde7176600681ff81/0_466_2590_1553/master/2590.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=26221ae9b213bccadebbe491442b7e04" />
          {commentArr.map((obj, index) => (
            <div>
              <span>
                {obj.name} <time>{getDate(obj.created_at)}</time>
                <p>{obj.comment_content}</p>
              </span>
            </div>
          ))}
        </S.Comment>
      </S.CommentWrap>
    </>
  );
};

export default Comment;
