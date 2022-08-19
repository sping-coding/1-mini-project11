import './JoinListItem.scss';
import './JoinListItem.css';

const JoinListItem = ({ join, onRemove }) => {
  // 왜 id값에 전부 들어가 있는지 모르겠음
  const { key, id, password, email, gender } = join;
  return (
    <>
      <form className="JoinListItem">
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">
                <input type="text" name="id" value={id} disabled />
              </td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">
                <input type="text" name="password" value={password} disabled />
              </td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">
                <input type="email" name="email" value={email} disabled />
              </td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td width="440px">
                <input type="text" value={gender} disabled />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  className="update"
                  name="btn"
                  value="수정"
                />
                <input
                  type="button"
                  className="delete"
                  name="btn"
                  value="삭제"
                  onClick={() => onRemove(key)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default JoinListItem;
