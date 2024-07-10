function Button(props) {
  const handleClick = () => console.log("Button clicked!");
  const handleMouse = () => console.log("Mouse on click!");

  return (
    <button onClick={handleClick} onMouseOver={handleMouse}>
      Click me
    </button>
  );
}
export default Button;
