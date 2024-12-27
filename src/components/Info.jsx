const Info = ({ title, value }) => {
  return (
    <div className="info-item">
      <span className="info-title">{title}: </span>
      <span className="info-value">{value}</span>
    </div>
  );
};

export default Info;
