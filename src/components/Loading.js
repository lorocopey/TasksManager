import "../css/loading.css";

function Loading() {
  return (
    <div className="lds-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { Loading };
