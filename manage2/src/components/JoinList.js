import JoinListItem from './JoinListItem';

const JoinList = ({ joins, onRemove, onInsert }) => {
  return (
    <div className="JoinList">
      {joins.map((join) => (
        <JoinListItem
          join={join}
          key={join.key}
          onRemove={onRemove}
          onInsert={onInsert}
        />
      ))}
    </div>
  );
};

export default JoinList;
