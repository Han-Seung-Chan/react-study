const TrueFalse = ({ count }) => {
  return <span>{count % 2 === 0 ? '짝수' : '홀수'}</span>;
};

export default TrueFalse;
