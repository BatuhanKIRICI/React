function Heading(props) {
  const styles = {
    fontSize: "25px",
    color: "blue",
    background: "orange",
  };

  return <h1 style={styles}>Hello, {props.firstName}</h1>;
}

export default Heading;
