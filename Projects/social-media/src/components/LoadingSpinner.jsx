const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{ margin: "20px" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
