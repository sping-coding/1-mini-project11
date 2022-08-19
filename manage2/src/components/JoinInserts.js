import { useCallback, useState, useRef } from 'react';
import './JoinInserts.css';
import { MdAdd } from 'react-icons/md';

const JoinInserts = ({ onInsert }) => {
  const [value, setValue] = useState({
    id: '',
    password: '',
    email: '',
    gender: '',
  });
  const { id, password, email, gender } = value;
  const genderMale = useRef();
  const genderFemale = useRef();

  const onChange = useCallback(
    (e) => {
      const nextValue = {
        ...value,
        [e.target.name]: e.target.value,
      };
      setValue(nextValue);
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue({
        id: '',
        password: '',
        email: '',
        gender: '',
      });

      genderMale.current.checked = false;
      genderFemale.current.checked = false;

      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <>
      <form className="JoinInserts" onSubmit={onSubmit}>
        <table border="1">
          <tbody>
            <tr>
              <td width="30%">아이디</td>
              <td>
                <input
                  type="text"
                  name="id"
                  value={id}
                  onChange={onChange}
                  placeholder="아이디를 입력하세요"
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="비밀번호를 입력하세요"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="이메일을 입력하세요"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>성별</td>
              <td>
                <div className="genderRadio">
                  <div className="genderMan">
                    <label for="male">남성</label>
                    <input
                      type="radio"
                      value="남성"
                      name="gender"
                      onChange={onChange}
                      ref={genderMale}
                      className="checkbox2"
                    />
                  </div>
                  <div className="genderWoman">
                    <label for="female">여성</label>
                    <input
                      type="radio"
                      value="여성"
                      name="gender"
                      onChange={onChange}
                      ref={genderFemale}
                      className="checkbox2"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button type="submit">
                  <MdAdd />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="app-title">회원 정보</div>
    </>
  );
};

export default JoinInserts;
