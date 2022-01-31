const Display = (props) => {
  if (props.power === true) {
    return (
      <div id={props.id}>
        <p>{props.display}</p>
      </div>
    );
  }
  if (props.power === false) {
    return (
      <div id={props.id} className="display-off">
        <p>{props.display}</p>
      </div>
    );
  }
};

export default Display;
