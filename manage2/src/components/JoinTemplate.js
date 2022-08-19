import './JoinTemplate.scss';

const JoinTemplate = ({ children }) => {
  return (
    <div className="JoinTemplate">
      <div className="app-title">회원 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default JoinTemplate;
